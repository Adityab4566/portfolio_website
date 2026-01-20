import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please provide name, email, and message." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const hasSmtp =
      process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS;

    let transporter: nodemailer.Transporter;
    let to = process.env.CONTACT_TO || "adityabommidapu@gmail.com";
    let from =
      process.env.SMTP_FROM || `"Portfolio Contact" <no-reply@example.com>`;

    if (hasSmtp) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST!,
        port: Number(process.env.SMTP_PORT!),
        secure: Number(process.env.SMTP_PORT!) === 465,
        auth: {
          user: process.env.SMTP_USER!,
          pass: process.env.SMTP_PASS!,
        },
      });
    } else {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      to = testAccount.user;
      from = `"Portfolio Contact (Preview)" <${testAccount.user}>`;
    }

    const info = await transporter.sendMail({
      from,
      to,
      subject: "New portfolio contact",
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info) || null;

    return NextResponse.json({
      ok: true,
      messageId: info.messageId,
      previewUrl,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
