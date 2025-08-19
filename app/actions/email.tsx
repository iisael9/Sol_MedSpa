"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitEmail(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { success: false, message: "Email is required" }
  }

  try {
    // Send notification to you
    await resend.emails.send({
      from: "Sol MedSpa <onboarding@resend.dev>",
      to: ["iisael090@gmail.com"],
      subject: "New Sol MedSpa Signup!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D4AF37;">New Sol MedSpa Signup</h2>
          <p>Someone just signed up for updates about Sol MedSpa!</p>
          <div style="background: #FFF8DC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <strong>Email:</strong> ${email}
          </div>
          <p style="color: #666;">This notification was sent from your Sol MedSpa landing page.</p>
        </div>
      `,
    })

    // Send confirmation to the user
    await resend.emails.send({
      from: "Sol MedSpa <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Sol MedSpa - You're on the list!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #FFF8DC 0%, #F0E68C 100%); padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #D4AF37; font-size: 32px; margin: 0;">Sol MedSpa</h1>
            <p style="color: #B8860B; font-style: italic; margin: 5px 0;">Radiant Skin. Reimagined.</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #D4AF37; text-align: center; margin-bottom: 20px;">Welcome to Our Exclusive List!</h2>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Thank you for your interest in Sol MedSpa! You're now among the first to know when we launch our luxury wellness sanctuary.
            </p>
            
            <div style="background: #FFF8DC; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #D4AF37; margin-top: 0;">What to expect:</h3>
              <ul style="color: #333; line-height: 1.8;">
                <li>🌟 Exclusive early access to our services</li>
                <li>💎 Special launch pricing and promotions</li>
                <li>✨ Updates on our grand opening</li>
                <li>🎁 VIP treatment packages</li>
              </ul>
            </div>
            
            <p style="color: #333; line-height: 1.6;">
              We're working hard to create an exceptional experience that combines cutting-edge treatments with luxurious comfort. Stay tuned for exciting updates!
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #B8860B; font-style: italic;">
                "Your journey to radiant skin begins soon..."
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #666; font-size: 12px;">
              This email was sent because you signed up for updates at Sol MedSpa.<br>
              If you didn't sign up, please ignore this email.
            </p>
          </div>
        </div>
      `,
    })

    return { success: true, message: "Thank you! We'll notify you when we launch." }
  } catch (error) {
    console.error("Email error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}
