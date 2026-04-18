import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email to admin (Korqsz@proton.me)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "Korqsz@proton.me",
      replyTo: email,
      subject: `🔥 New Message from ${name} - Portfolio Contact`,
      html: `
        <div style="font-family: 'Courier New', monospace; max-width: 600px; margin: 0 auto; padding: 20px; background: #000; color: #fff;">
          <div style="border-left: 4px solid #ff00ff; padding: 20px; margin-bottom: 20px; background: #0a0a0a;">
            <h1 style="color: #ff00ff; margin: 0 0 10px 0; font-size: 24px; text-transform: uppercase;">━━━━━━━━━━━━━━━━━━</h1>
            <h2 style="color: #00ffff; margin: 0; font-size: 18px;">NEW CONTACT FORM SUBMISSION</h2>
            <h1 style="color: #ff00ff; margin: 10px 0 0 0; font-size: 24px; text-transform: uppercase;">━━━━━━━━━━━━━━━━━━</h1>
          </div>

          <div style="background: #1a1a1a; padding: 20px; border: 1px solid #333; margin-bottom: 20px;">
            <div style="margin-bottom: 15px;">
              <p style="color: #888; margin: 0 0 5px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">► FROM</p>
              <p style="color: #ff00ff; margin: 0; font-size: 16px; font-weight: bold;">${name}</p>
            </div>

            <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #333;">
              <p style="color: #888; margin: 0 0 5px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">► EMAIL</p>
              <p style="color: #00ffff; margin: 0; font-size: 14px;">
                <a href="mailto:${email}" style="color: #00ffff; text-decoration: none; font-weight: bold;">${email}</a>
              </p>
            </div>

            <div>
              <p style="color: #888; margin: 0 0 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">► MESSAGE</p>
              <div style="background: #000; padding: 15px; border-left: 2px solid #00ffff; white-space: pre-wrap; word-wrap: break-word;">
                <p style="color: #fff; margin: 0; font-size: 13px; line-height: 1.6;">${message}</p>
              </div>
            </div>
          </div>

          <div style="background: #0a0a0a; padding: 15px; border: 1px solid #333; text-align: center; border-top: 2px solid #ff00ff;">
            <p style="color: #666; margin: 0; font-size: 11px; text-transform: uppercase;">
              📧 SENT VIA PORTFOLIO CONTACT FORM<br/>
              <span style="color: #ff00ff;">KAFKHA YASIN ALBIAN</span>
            </p>
          </div>
        </div>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: `✓ Your message was received - Thanks for contacting me!`,
      html: `
        <div style="font-family: 'Courier New', monospace; max-width: 600px; margin: 0 auto; padding: 20px; background: #000; color: #fff;">
          <div style="border-left: 4px solid #00ffff; padding: 20px; margin-bottom: 20px; background: #0a0a0a;">
            <h1 style="color: #00ffff; margin: 0 0 10px 0; font-size: 24px; text-transform: uppercase;">━━━━━━━━━━━━━━━━━━</h1>
            <h2 style="color: #ff00ff; margin: 0; font-size: 18px;">MESSAGE RECEIVED</h2>
            <h1 style="color: #00ffff; margin: 10px 0 0 0; font-size: 24px; text-transform: uppercase;">━━━━━━━━━━━━━━━━━━</h1>
          </div>

          <div style="background: #1a1a1a; padding: 20px; border: 1px solid #333; margin-bottom: 20px;">
            <p style="color: #fff; margin: 0 0 15px 0; font-size: 14px;">Hi <strong style="color: #00ffff;">${name}</strong>,</p>
            
            <p style="color: #ccc; margin: 0 0 15px 0; font-size: 13px; line-height: 1.6;">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible. I really appreciate you taking the time to connect with me.
            </p>

            <div style="background: #000; padding: 15px; border-left: 2px solid #ff00ff; margin: 20px 0; white-space: pre-wrap; word-wrap: break-word;">
              <p style="color: #888; margin: 0 0 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">► YOUR MESSAGE</p>
              <p style="color: #fff; margin: 0; font-size: 13px; line-height: 1.6;">${message}</p>
            </div>

            <p style="color: #ccc; margin: 20px 0 0 0; font-size: 13px; line-height: 1.6;">
              Looking forward to our conversation!
            </p>
          </div>

          <div style="background: #0a0a0a; padding: 15px; text-align: center; border-top: 2px solid #00ffff;">
            <p style="color: #666; margin: 0; font-size: 11px; text-transform: uppercase;">
              <span style="color: #00ffff;">KAFKHA YASIN ALBIAN</span><br/>
              Web Developer & Designer<br/>
              <a href="https://github.com/KORQ-Kalbs" style="color: #ff00ff; text-decoration: none; margin-right: 10px;">GitHub</a>
              <a href="https://linkedin.com/in/kafkha-yasin-albian-676b42369/" style="color: #ff00ff; text-decoration: none;">LinkedIn</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please check your configuration." },
      { status: 500 },
    );
  }
}
