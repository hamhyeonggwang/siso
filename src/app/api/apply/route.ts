import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  type: z.enum(["consultation", "program", "waitlist"]),
  guardianName: z.string().trim().min(2),
  childName: z.string().trim().min(2),
  childAge: z.string().trim().min(1),
  concerns: z.string().trim().min(8),
  phone: z.string().trim().min(9),
  email: z.string().trim().email(),
  preferredSchedule: z.string().trim().min(4),
  programSlug: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  const data = parsed.data;
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("[apply] GOOGLE_SHEETS_WEBHOOK_URL not set — skipping sheet write");
  } else {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        console.error("[apply] Google Sheets webhook error", res.status);
      }
    } catch (err) {
      console.error("[apply] Google Sheets fetch failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
