import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import rateLimit from "../../../lib/rateLimit";
import { success } from "zod";

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await req.json();

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form dat" }, { status: 400 });
    }

    const { name, email, message, company } = parsed.data;

    // honeypot anti-spamÒ
    if (company) {
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
      port: Number(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio contact" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Message de ${name}`,
      replyTo: email || process.env.CONTACT_EMAIL,
      text: message,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
