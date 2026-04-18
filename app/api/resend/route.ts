import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email via Resend
    await resend.emails.send({
      from: "Kafkha Portfolio <onboarding@resend.dev>",
      to: "Korqsz@proton.me",
      replyTo: email,
      subject: `New Message from ${name} - Portfolio Contact`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #000 0%, #1a1a1a 100%); padding: 30px; border-left: 4px solid #ff00ff;">
            <h1 style="color: #ff00ff; margin: 0 0 10px 0; font-size: 24px;">NEW MESSAGE FROM PORTFOLIO</h1>
            <p style="color: #00ffff; margin: 0; font-size: 14px;">━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          </div>

          <div style="background: #0a0a0a; padding: 30px; border: 1px solid #333;">
            <h2 style="color: #ffffff; margin-top: 0; font-size: 18px;">Contact Information</h2>
            
            <div style="margin-bottom: 20px;">
              <p style="color: #999; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">FROM</p>
              <p style="color: #ffffff; margin: 0; font-size: 16px; font-weight: bold;">${name}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <p style="color: #999; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">EMAIL</p>
              <p style="color: #00ffff; margin: 0; font-size: 16px;">
                <a href="mailto:${email}" style="color: #00ffff; text-decoration: none;">${email}</a>
              </p>
            </div>

            <div style="margin-bottom: 20px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #999; margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">MESSAGE</p>
              <div style="background: #1a1a1a; padding: 15px; border-left: 2px solid #ff00ff;">
                <p style="color: #ffffff; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>

          <div style="background: #000; padding: 20px; text-align: center; border-top: 1px solid #333;">
            <p style="color: #666; margin: 0; font-size: 12px;">
              This message was sent from your portfolio contact form.<br/>
              <span style="color: #ff00ff;">KAFKHA YASIN ALBIAN</span> | Web Developer & Designer
            </p>
          </div>
        </div>
      `,
    });

    // Also send a confirmation email to the person who submitted the form
    await resend.emails.send({
      from: "Kafkha Portfolio <onboarding@resend.dev>",
      to: email,
      subject: `I received your message - Thanks for reaching out!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #000 0%, #1a1a1a 100%); padding: 30px; border-left: 4px solid #00ffff;">
            <h1 style="color: #00ffff; margin: 0 0 10px 0; font-size: 24px;">MESSAGE RECEIVED</h1>
            <p style="color: #ff00ff; margin: 0; font-size: 14px;">━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          </div>

          <div style="background: #0a0a0a; padding: 30px; border: 1px solid #333;">
            <p style="color: #ffffff; margin: 0 0 20px 0; font-size: 16px;">Hi <strong>${name}</strong>,</p>
            
            <p style="color: #cccccc; margin: 0 0 15px 0; font-size: 14px; line-height: 1.6;">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible. I appreciate you taking the time to connect with me.
            </p>

            <div style="background: #1a1a1a; padding: 20px; border-left: 2px solid #00ffff; margin: 20px 0;">
              <p style="color: #999; margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase;">YOUR MESSAGE</p>
              <p style="color: #ffffff; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="color: #cccccc; margin: 20px 0 0 0; font-size: 14px; line-height: 1.6;">
              Looking forward to our conversation!
            </p>
          </div>

          <div style="background: #000; padding: 20px; text-align: center; border-top: 1px solid #333;">
            <p style="color: #666; margin: 0; font-size: 12px;">
              <span style="color: #00ffff;">KAFKHA YASIN ALBIAN</span><br/>
              Web Developer & Designer | Bogor Barat, Indonesia<br/>
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
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
