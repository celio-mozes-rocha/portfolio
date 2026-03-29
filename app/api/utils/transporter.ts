import { createTransport } from "nodemailer";
import type { MailPropsType } from "@/app/types/mailProps";

const SUBJECT_MAP: Record<string, string> = {
  demande_projet: "Demande de projet",
  question_projects: "Question sur mes projets",
  collaboration: "Collaboration",
  autre: "Autre",
};

const transporter = createTransport({
  host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail({
  subject,
  email,
  message,
}: MailPropsType) {
  const subjectText = SUBJECT_MAP[subject] || "Autre";

  try {
    await transporter.sendMail({
      from: `"Portfolio contact" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio: ${subjectText}`,
      replyTo: email || process.env.CONTACT_EMAIL,
      text: message,
      html: `
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Message :</strong></p>
    <p>${message}</p>
    `,
    });
  } catch (error) {
    console.error("Email sending failled:", error);
    throw error;
  }
}
