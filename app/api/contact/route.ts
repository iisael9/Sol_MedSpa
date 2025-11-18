import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, serviceType, message } = body

    const { data, error } = await resend.emails.send({
      from: "Sol MedSpa <onboarding@resend.dev>",
      to: "admin@sol-medspa.com", // Updated to admin@sol-medspa.com which is the verified email in testing mode
      replyTo: email,
      subject: `New Contact Form Submission - ${serviceType || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #F5F1EB; border-radius: 10px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px;">
            <h1 style="color: #C4956C; font-size: 28px; margin-bottom: 20px;">New Contact Form Submission</h1>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #57534e; font-size: 16px; margin-bottom: 10px;">Contact Information:</h3>
              <p style="color: #78716c; margin: 5px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="color: #78716c; margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="color: #78716c; margin: 5px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p style="color: #78716c; margin: 5px 0;"><strong>Service Type:</strong> ${serviceType || "Not specified"}</p>
            </div>
            
            <div style="margin-top: 25px;">
              <h3 style="color: #57534e; font-size: 16px; margin-bottom: 10px;">Message:</h3>
              <p style="color: #78716c; line-height: 1.6; white-space: pre-wrap;">${message || "No message provided"}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #F5F1EB;">
              <p style="color: #a8a29e; font-size: 12px; margin: 0;">
                This message was sent from the Sol MedSpa contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Email sent successfully", data }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
