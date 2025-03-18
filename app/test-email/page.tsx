"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import emailjs from "@emailjs/browser"

export default function TestEmailPage() {
  const [result, setResult] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  async function testSimpleEmail() {
    setIsLoading(true)
    setResult("")
    setError("")

    try {
      // Create a very simple email that doesn't rely on complex template variables
      const templateParams = {
        to_name: "BDR Equipment",
        from_name: "Test User",
        message: "This is a test message from the BDR Equipment website.",
        reply_to: "test@example.com",
      }

      console.log("Sending simple test email with parameters:", templateParams)

      const response = await emailjs.send(
        "service_778dg7e",
        "template_t0rfwtt", // Using the contact template
        templateParams,
        "JoMoEAjPtIkHPxO5l",
      )

      console.log("Test email sent successfully:", response)
      setResult(`Success! Email sent with ID: ${response.text}`)
    } catch (err: any) {
      console.error("Test email error:", err)
      setError(`Error: ${err.message || "Unknown error"}`)
    } finally {
      setIsLoading(false)
    }
  }

  async function testCreateNewTemplate() {
    setIsLoading(true)
    setResult("")
    setError("")

    try {
      // This function will help you create a new template in EmailJS
      // First, let's test if we can send a simple email with minimal variables
      const templateParams = {
        subject: "Test Email - New Template",
        message: `
Hello,

This is a test email to verify that a simple template works correctly.

The current time is: ${new Date().toLocaleString()}

Best regards,
BDR Equipment Website
        `,
        from_name: "Test User",
        reply_to: "test@example.com",
      }

      console.log("Testing new template creation with parameters:", templateParams)

      const response = await emailjs.send(
        "service_778dg7e",
        "template_t0rfwtt", // Using the contact template
        templateParams,
        "JoMoEAjPtIkHPxO5l",
      )

      console.log("Test email sent successfully:", response)
      setResult(`
Success! Email sent with ID: ${response.text}

IMPORTANT: If this test works but your forms don't, you should:
1. Go to EmailJS dashboard
2. Create a new template with a simple design
3. Use only basic variables like {{from_name}}, {{message}}, etc.
4. Update your code to use this new template ID
      `)
    } catch (err: any) {
      console.error("Test email error:", err)
      setError(`Error: ${err.message || "Unknown error"}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-8">EmailJS Test Page</h1>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
        <p className="mb-6">This page tests your EmailJS configuration to help diagnose any issues.</p>

        <div className="space-y-4 mb-6">
          <Button
            onClick={testSimpleEmail}
            disabled={isLoading}
            className="bg-yellow-500 hover:bg-yellow-600 text-black w-full"
          >
            {isLoading ? "Sending Simple Test Email..." : "Send Simple Test Email"}
          </Button>

          <Button
            onClick={testCreateNewTemplate}
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-600 text-white w-full"
          >
            {isLoading ? "Testing New Template..." : "Test New Template Creation"}
          </Button>
        </div>

        {result && (
          <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg mb-4 whitespace-pre-line">
            {result}
          </div>
        )}

        {error && <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg mb-4">{error}</div>}

        <div className="mt-8 text-sm text-gray-600">
          <h2 className="font-semibold mb-2">Troubleshooting Tips:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Check that your EmailJS service is active</li>
            <li>Verify your template IDs are correct</li>
            <li>Ensure your public key is valid</li>
            <li>Try creating a new, simpler template in EmailJS</li>
            <li>Check for any CORS issues in the browser console</li>
            <li>Verify your EmailJS account has available email quota</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

