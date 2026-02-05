import { NextRequest, NextResponse } from "next/server";

// 1x1 transparent GIF (43 bytes)
const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  // Always return the pixel, even on error (don't break email rendering)
  const pixelResponse = () =>
    new NextResponse(PIXEL, {
      status: 200,
      headers: {
        "Content-Type": "image/gif",
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
      },
    });

  if (!id || !UUID_RE.test(id)) {
    return pixelResponse();
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return pixelResponse();
  }

  // Fire-and-forget: record the open (don't block pixel delivery)
  try {
    const headers = {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    };

    // Update sequence_steps: mark as opened (only first open)
    await fetch(
      `${supabaseUrl}/rest/v1/sequence_steps?id=eq.${id}&opened=eq.false`,
      {
        method: "PATCH",
        headers,
        body: JSON.stringify({
          opened: true,
          opened_at: new Date().toISOString(),
        }),
      }
    );
  } catch {
    // Silently fail — pixel delivery is more important
  }

  return pixelResponse();
}
