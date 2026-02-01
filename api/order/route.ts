import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

type Payload = {
  name: string;
  company?: string;
  phone?: string;
  email?: string;
  address: string;
  country: string;
  pounds: number;
  baleType: "mixed" | "sorted";
  notes?: string;
};

function okStr(s: unknown, min = 2) {
  return typeof s === "string" && s.trim().length >= min;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Payload>;

    // ✅ validation
    if (!okStr(body.name, 2)) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!okStr(body.address, 6)) {
      return NextResponse.json({ error: "Address is required." }, { status: 400 });
    }
    if (!okStr(body.country, 2)) {
      return NextResponse.json({ error: "Country is required." }, { status: 400 });
    }
    if (typeof body.pounds !== "number" || !Number.isFinite(body.pounds) || body.pounds <= 0) {
      return NextResponse.json({ error: "Pounds must be a positive number." }, { status: 400 });
    }
    if (body.baleType !== "mixed" && body.baleType !== "sorted") {
      return NextResponse.json({ error: "Bale type must be mixed or sorted." }, { status: 400 });
    }

    // ✅ env vars (set these in Vercel)
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

    const toEmail = "cedricperpignand@gmail.com";

    const subject = `NEW BALE ORDER — ${String(body.baleType).toUpperCase()} — ${body.pounds} lbs`;

    const text = [
      "NEW BALE ORDER REQUEST",
      "----------------------",
      `Name: ${body.name}`,
      `Company: ${body.company || "-"}`,
      `Phone: ${body.phone || "-"}`,
      `Buyer Email: ${body.email || "-"}`,
      "",
      `Delivery Address: ${body.address}`,
      `Destination Country: ${body.country}`,
      "",
      `Bale Type: ${body.baleType}`,
      `Pounds Needed: ${body.pounds}`,
      "",
      `Notes: ${body.notes || "-"}`,
      "",
      `Submitted: ${new Date().toISOString()}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"Union Komes Orders" <${SMTP_USER}>`,
      to: toEmail,
      replyTo: body.email && body.email.includes("@") ? body.email : undefined,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}
