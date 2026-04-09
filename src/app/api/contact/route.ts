import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'stankofb@gmail.com',
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto;background:#111;color:#fff;border-radius:12px;padding:32px;border:1px solid #2d2d2d">
          <h2 style="color:#6ee7b7;margin-top:0">New Portfolio Message</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#999;width:80px">Name</td>
              <td style="padding:8px 0;color:#fff;font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#999">Email</td>
              <td style="padding:8px 0"><a href="mailto:${email}" style="color:#6ee7b7">${email}</a></td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #2d2d2d;margin:16px 0" />
          <p style="color:#ccc;line-height:1.6;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
