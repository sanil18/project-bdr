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

// Function to convert FormData to a plain object
function formDataToObject(formData: FormData) {
  const object: Record<string, any> = {}
  formData.forEach((value, key) => {
    // Handle file uploads separately
    if (value instanceof File) {
      object[key] = {
        filename: value.name,
        type: value.type,
        size: value.size,
      }
    } else {
      object[key] = value
    }
  })
  return object
}

export async function submitRepairRequest(formData: FormData) {
  try {
    // Convert FormData to a plain object for easier handling
    const data = formDataToObject(formData)

    // Extract file data if present
    const imageFile = formData.get("imageUpload") as File
    const attachments = []

    if (imageFile && imageFile.size > 0) {
      // Convert file to buffer for email attachment
      const buffer = await imageFile.arrayBuffer()

      attachments.push({
        filename: imageFile.name,
        content: Buffer.from(buffer),
        contentType: imageFile.type,
      })
    }

    // Prepare email content
    const emailContent = `
      <h1>New Repair Request</h1>
      <h2>Customer Information</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Company:</strong> ${data.companyName || "N/A"}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Preferred Contact Method:</strong> ${data.preferredContactMethod}</p>
      
      <h2>Equipment Information</h2>
      <p><strong>Equipment Type:</strong> ${data.equipmentType}</p>
      <p><strong>Make:</strong> ${data.make}</p>
      <p><strong>Model:</strong> ${data.model}</p>
      <p><strong>Location:</strong> ${data.equipmentLocation}</p>
      
      <h2>Issue Description</h2>
      <p>${data.issueDescription}</p>
      
      ${imageFile && imageFile.size > 0 ? "<p><strong>Image Attached:</strong> Yes</p>" : "<p><strong>Image Attached:</strong> No</p>"}
    `

    // Send email
    const info = await transporter.sendMail({
      from: `"BDR Equipment Website" <${process.env.EMAIL_USER || "your-email@gmail.com"}>`,
      to: process.env.RECIPIENT_EMAIL || "info@bdrequipment.com",
      subject: "New Repair Request Submission",
      html: emailContent,
      attachments: attachments,
    })

    console.log("Email sent successfully:", info.messageId)

    // Revalidate the page to show the success message
    revalidatePath("/request-repair")

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to submit repair request")
  }
}

