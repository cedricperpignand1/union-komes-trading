import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: "Missing SMTP env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = `NEW BALE ORDER — ${(body?.baleType || "mixed").toUpperCase()} — ${body?.pounds || "?"} lbs`;

    const text = [
      "NEW BALE ORDER REQUEST",
      "----------------------",
      `Name: ${body?.name || "-"}`,
      `Company: ${body?.company || "-"}`,
      `Phone: ${body?.phone || "-"}`,
      `Buyer Email: ${body?.email || "-"}`,
      "",
      `Address: ${body?.address || "-"}`,
      `Destination Country: ${body?.country || "-"}`,
      "",
      `Bale Type: ${body?.baleType || "-"}`,
      `Pounds Needed: ${body?.pounds || "-"}`,
      "",
      `Notes: ${body?.notes || "-"}`,
      "",
      `Submitted: ${new Date().toISOString()}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"Union Komes Orders" <${SMTP_USER}>`,
      to: "cedricperpignand@gmail.com",
      replyTo: body?.email && String(body.email).includes("@") ? body.email : undefined,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("ORDER EMAIL ERROR:", err);
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}

// Optional: allows GET to show a helpful message instead of 405
export async function GET() {
  return NextResponse.json({ ok: true, message: "Use POST to submit an order." });
}
