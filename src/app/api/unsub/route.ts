import { NextRequest, NextResponse } from "next/server";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const token = request.nextUrl.searchParams.get("token");

  const identifier = id || token;

  if (!identifier) {
    return NextResponse.json(
      { error: "Missing id or token parameter" },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase environment variables");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const payload: Record<string, string> = {
      reason: "opted_out",
      added_by: "unsub_link",
      notes: "Unsubscribed via web link",
    };

    // identifier could be an email or a UUID lead id
    if (identifier.includes("@")) {
      payload.email = identifier;
    } else if (UUID_RE.test(identifier)) {
      payload.source_lead_id = identifier;
    } else {
      payload.email = identifier;
    }

    const res = await fetch(`${supabaseUrl}/rest/v1/suppression_list`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok && res.status !== 409) {
      console.error("Supabase insert failed:", res.status, await res.text());
      return NextResponse.json(
        { error: "Failed to process unsubscribe" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
