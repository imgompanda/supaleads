import { NextRequest, NextResponse } from "next/server";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const token = request.nextUrl.searchParams.get("token");

  const identifier = id || token;

  if (!identifier || !UUID_RE.test(identifier)) {
    return NextResponse.redirect(new URL("/unsub?status=error", request.url));
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase environment variables");
    return NextResponse.redirect(new URL("/unsub?status=error", request.url));
  }

  const headers = {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    "Content-Type": "application/json",
  };

  try {
    // 1. Look up lead email from prospect_leads
    const leadRes = await fetch(
      `${supabaseUrl}/rest/v1/prospect_leads?id=eq.${identifier}&select=email,company`,
      { headers }
    );

    let email: string | null = null;
    let domain: string | null = null;
    let notes = "Unsubscribed via web link";

    if (leadRes.ok) {
      const leads = await leadRes.json();
      if (leads.length > 0 && leads[0].email) {
        email = leads[0].email as string;
        domain = email!.split("@")[1] || null;
        notes = `Unsubscribed via web link — ${leads[0].company || "unknown"}`;
      }
    }

    // Fallback: check inbound_leads if not found in prospect_leads
    if (!email) {
      const inboundRes = await fetch(
        `${supabaseUrl}/rest/v1/inbound_leads?id=eq.${identifier}&select=email,company`,
        { headers }
      );
      if (inboundRes.ok) {
        const inbound = await inboundRes.json();
        if (inbound.length > 0 && inbound[0].email) {
          email = inbound[0].email as string;
          domain = email!.split("@")[1] || null;
          notes = `Unsubscribed via web link — ${inbound[0].company || "unknown"} (inbound)`;
        }
      }
    }

    // 2. Check if already suppressed
    const checkFilter = email
      ? `email=eq.${encodeURIComponent(email)}&reason=eq.opted_out`
      : `source_lead_id=eq.${identifier}&reason=eq.opted_out`;

    const existsRes = await fetch(
      `${supabaseUrl}/rest/v1/suppression_list?${checkFilter}&select=id&limit=1`,
      { headers }
    );

    if (existsRes.ok) {
      const existing = await existsRes.json();
      if (existing.length > 0) {
        // Already unsubscribed
        return NextResponse.redirect(
          new URL("/unsub?status=already", request.url)
        );
      }
    }

    // 3. Insert into suppression_list
    const payload: Record<string, string> = {
      reason: "opted_out",
      added_by: "unsub_link",
      notes,
      source_lead_id: identifier,
    };

    if (email) payload.email = email;
    if (domain) payload.domain = domain;

    const res = await fetch(`${supabaseUrl}/rest/v1/suppression_list`, {
      method: "POST",
      headers: { ...headers, Prefer: "return=minimal" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      // 409 = duplicate (unique constraint)
      if (res.status === 409) {
        return NextResponse.redirect(
          new URL("/unsub?status=already", request.url)
        );
      }
      console.error("Supabase insert failed:", res.status, errText);
      return NextResponse.redirect(
        new URL("/unsub?status=error", request.url)
      );
    }

    // 4. Also deactivate any active sequences for this lead
    await fetch(
      `${supabaseUrl}/rest/v1/sequences?prospect_lead_id=eq.${identifier}`,
      {
        method: "PATCH",
        headers: { ...headers, Prefer: "return=minimal" },
        body: JSON.stringify({ is_active: false }),
      }
    );

    return NextResponse.redirect(
      new URL("/unsub?status=success", request.url)
    );
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return NextResponse.redirect(new URL("/unsub?status=error", request.url));
  }
}
