import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import iprateLimit from "../utils/ipRateLimit";
import { sendContactEmail } from "../utils/transporter";

export async function POST(req: Request) {
  try {
    const rateLimitResponse = iprateLimit(req);
    if (rateLimitResponse) return rateLimitResponse;

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const { subject, email, message, company } = parsed.data;

    // honeypot anti-spam
    if (company) {
      return NextResponse.json({ success: true });
    }

    await sendContactEmail({ subject, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error: ", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
