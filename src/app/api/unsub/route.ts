import { NextRequest, NextResponse } from "next/server";

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
    const res = await fetch(`${supabaseUrl}/rest/v1/suppression_list`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        lead_id: identifier,
        reason: "opted_out",
        created_at: new Date().toISOString(),
      }),
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
