"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formError, setFormError] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError("")

    try {
      // Validate form reference
      if (!formRef.current) {
        throw new Error("Form reference is not available")
      }

      // Create a FormData object to log what's being submitted
      const formData = new FormData(formRef.current)

      // Create a simple template params object
      const templateParams = {
        from_name: formData.get("from_name") || "",
        reply_to: formData.get("reply_to") || "",
        phone: formData.get("phone") || "Not provided",
        subject: formData.get("subject") || "",
        message: formData.get("message") || "",
      }

      console.log("Sending email with parameters:", templateParams)

      // Send using the direct method
      const result = await emailjs.send("service_778dg7e", "template_t0rfwtt", templateParams, "JoMoEAjPtIkHPxO5l")

      console.log("Email sent successfully:", result.text)
      setIsSuccess(true)
      formRef.current?.reset()
    } catch (error: any) {
      console.error("Form submission error:", error)
      setFormError(
        `Error: ${error.message || "Unknown error"}. Please try again or contact us directly at Bdrheavy@gmail.com.`,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent Successfully!</h3>
        <p className="text-gray-700 mb-6">Thank you for contacting us. We'll get back to you as soon as possible.</p>
        <Button onClick={() => setIsSuccess(false)} className="bg-yellow-500 hover:bg-yellow-600 text-black">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {formError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="from_name">Full Name *</Label>
          <Input id="from_name" name="from_name" required placeholder="John Doe" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="reply_to">Email Address *</Label>
          <Input id="reply_to" name="reply_to" type="email" required placeholder="you@example.com" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" placeholder="(555) 123-4567" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject *</Label>
        <Input id="subject" name="subject" required placeholder="How can we help you?" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Please provide details about your inquiry"
          className="min-h-[120px]"
        />
      </div>

      <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}

