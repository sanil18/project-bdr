"use server"

import { revalidatePath } from "next/cache"
import nodemailer from "nodemailer"

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || "smtp.gmail.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "your-app-password",
  },
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Prepare email content
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h2>Message</h2>
      <p>${message}</p>
    `

    // Send email
    const info = await transporter.sendMail({
      from: `"BDR Equipment Website" <${process.env.EMAIL_USER || "your-email@gmail.com"}>`,
      to: process.env.RECIPIENT_EMAIL || "info@bdrequipment.com",
      subject: `Contact Form: ${subject}`,
      html: emailContent,
      replyTo: email,
    })

    console.log("Contact email sent successfully:", info.messageId)

    // Revalidate the page to show the success message
    revalidatePath("/contact")

    return { success: true }
  } catch (error) {
    console.error("Error sending contact email:", error)
    throw new Error("Failed to submit contact form")
  }
}

