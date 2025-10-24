// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

// Simple in-memory rate limiter (per-IP). Not suitable for distributed or serverless production.
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 6;
const ipMap = new Map<string, { count: number; firstTs: number }>();

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  message?: string;
  honey?: string; // honeypot
};

function getClientIp(req: Request) {
  // best-effort: prefer x-forwarded-for, fallback to 'unknown'
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

function isValidEmail(e?: string) {
  if (!e) return false;
  // simple regex (not perfect but okay for this use-case)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const now = Date.now();
    const entry = ipMap.get(ip) ?? { count: 0, firstTs: now };
    if (now - entry.firstTs > RATE_LIMIT_WINDOW_MS) {
      // reset window
      entry.count = 0;
      entry.firstTs = now;
    }
    entry.count += 1;
    ipMap.set(ip, entry);

    if (entry.count > MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Body;

    // Honeypot spam check — if filled, silently reject
    if (body.honey && body.honey.trim().length > 0) {
      return NextResponse.json({ success: true }); // behave as if accepted
    }

    // Server-side validation
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }
    if (!body.message || body.message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const receiver = process.env.CONTACT_RECEIVER_EMAIL!;
    const sender = process.env.SENDER_EMAIL!;

    const html = `
      <h2>New schedule/contact request</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone ?? "—"}</p>
      <p><strong>Address:</strong> ${body.address ?? "—"}</p>
      <p><strong>Message:</strong><br/>${(body.message ?? "").replace(/\n/g, "<br/>")}</p>
    `;

    await resend.emails.send({
      from: `${sender}`,
      to: receiver,
      subject: `Bluebonnet Inspections - Schedule request from ${body.name} / ${body.email}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Server error: " + (err?.message ?? "unknown") },
      { status: 500 }
    );
  }
}
