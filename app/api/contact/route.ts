import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })

        await transporter.sendMail({
            from: `"Portfolio contact" <${process.env.CONTACT_EMAIL}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `Message de ${name}`,
            replyTo: email,
            text: message,
            html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `
        })
        return NextResponse.json({ success: true })

    } catch (error) {
        console.error(error)
        console.info("host : ", process.env.SMTP_USER);
        return NextResponse.json(
            { success: false },
            { status: 500 }
        )
    }
}