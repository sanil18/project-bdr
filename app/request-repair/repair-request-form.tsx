"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2, Upload, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import emailjs from "@emailjs/browser"

export default function RepairRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formError, setFormError] = useState("")
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [equipmentType, setEquipmentType] = useState("")
  const [preferredContactMethod, setPreferredContactMethod] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setValidationErrors({
          ...validationErrors,
          imageUpload: "Image size should be less than 5MB",
        })
        e.target.value = ""
        return
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        setValidationErrors({
          ...validationErrors,
          imageUpload: "Please upload an image file",
        })
        e.target.value = ""
        return
      }

      setFileName(file.name)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
      setFileName(null)
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Reset states
    setIsSubmitting(true)
    setFormError("")
    setValidationErrors({})

    // Basic validation
    const errors: Record<string, string> = {}

    if (!formRef.current) {
      setFormError("Form reference is not available")
      setIsSubmitting(false)
      return
    }

    const formData = new FormData(formRef.current)

    // Required fields validation
    const requiredFields = ["fullName", "email", "phone", "make", "model", "issueDescription", "equipmentLocation"]

    requiredFields.forEach((field) => {
      const value = formData.get(field)
      if (!value || (typeof value === "string" && value.trim() === "")) {
        errors[field] = "This field is required"
      }
    })

    // Check select fields
    if (!equipmentType) {
      errors["equipmentType"] = "Equipment type is required"
    }

    if (!preferredContactMethod) {
      errors["preferredContactMethod"] = "Preferred contact method is required"
    }

    // Email validation
    const email = formData.get("email") as string
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors["email"] = "Please enter a valid email address"
    }

    // Phone validation
    const phone = formData.get("phone") as string
    if (phone && !/^[\d\s\-+()]+$/.test(phone)) {
      errors["phone"] = "Please enter a valid phone number"
    }

    // If there are validation errors, don't submit
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      setIsSubmitting(false)
      return
    }

    try {
      // Create a simple text-based email instead of using the HTML template
      // This bypasses any template rendering issues
      const emailContent = `
New Repair Request

Customer Information:
- Name: ${formData.get("fullName")}
- Company: ${formData.get("companyName") || "N/A"}
- Email: ${formData.get("email")}
- Phone: ${formData.get("phone")}
- Preferred Contact Method: ${preferredContactMethod}

Equipment Information:
- Equipment Type: ${equipmentType}
- Make: ${formData.get("make")}
- Model: ${formData.get("model")}
- Location: ${formData.get("equipmentLocation")}

Issue Description:
${formData.get("issueDescription")}

${imagePreview ? "Image was attached (available in the web form submission)" : "No image attached"}

This request was submitted from the BDR Heavy Equipment website.
      `

      // Send a simple email without relying on the template rendering
      const templateParams = {
        to_email: "Bdrheavy@gmail.com", // Replace with your recipient email
        subject: "New Repair Request from Website",
        message: emailContent,
        from_name: formData.get("fullName") as string,
        reply_to: formData.get("email") as string,
      }

      console.log("Sending repair request with simplified parameters")

      const result = await emailjs.send(
        "service_778dg7e",
        "template_t0rfwtt", // Using the contact template which is simpler
        templateParams,
        "JoMoEAjPtIkHPxO5l",
      )

      console.log("Repair request sent successfully:", result.text)
      setIsSuccess(true)

      // Reset form
      formRef.current.reset()
      setEquipmentType("")
      setPreferredContactMethod("")
      setImagePreview(null)
      setFileName(null)
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
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>

        <h3 className="text-2xl font-bold text-green-600 mb-4">Request Submitted Successfully!</h3>
        <p className="text-gray-700 mb-6">
          Thank you for submitting your repair request. Our team will review your information and contact you within 24
          hours to discuss next steps.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false)
            setEquipmentType("")
            setPreferredContactMethod("")
          }}
          className="bg-yellow-500 hover:bg-yellow-600 text-black"
        >
          Submit Another Request
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
        <FormField
          label="Full Name"
          name="fullName"
          required
          placeholder="John Doe"
          error={validationErrors.fullName}
        />

        <FormField label="Company Name" name="companyName" placeholder="Your Company LLC" />

        <FormField
          label="Email Address"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          error={validationErrors.email}
        />

        <FormField
          label="Phone Number"
          name="phone"
          required
          placeholder="(555) 123-4567"
          error={validationErrors.phone}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="equipmentType" className={cn(validationErrors.equipmentType && "text-red-500")}>
          Equipment Type <span className="text-red-500">*</span>
        </Label>
        <Select required onValueChange={(value) => setEquipmentType(value)} value={equipmentType}>
          <SelectTrigger className={cn(validationErrors.equipmentType && "border-red-500")}>
            <SelectValue placeholder="Select equipment type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wheel-loader">Wheel Loader</SelectItem>
            <SelectItem value="backhoe-loader">Backhoe Loader</SelectItem>
            <SelectItem value="excavator">Excavator</SelectItem>
            <SelectItem value="grader">Grader</SelectItem>
            <SelectItem value="forklift">Forklift</SelectItem>
            <SelectItem value="roller">Roller</SelectItem>
            <SelectItem value="bulldozer">Bulldozer</SelectItem>
            <SelectItem value="crane">Crane</SelectItem>
            <SelectItem value="tractor">Tractor</SelectItem>
            <SelectItem value="other">Other Industrial Equipment</SelectItem>
          </SelectContent>
        </Select>
        {validationErrors.equipmentType && (
          <p className="text-red-500 text-sm mt-1">{validationErrors.equipmentType}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Make"
          name="make"
          required
          placeholder="Caterpillar, John Deere, etc."
          error={validationErrors.make}
        />

        <FormField label="Model" name="model" required placeholder="Model number" error={validationErrors.model} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="issueDescription" className={cn(validationErrors.issueDescription && "text-red-500")}>
          Describe the Issue <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="issueDescription"
          name="issueDescription"
          required
          placeholder="Please provide details about the problem you're experiencing with your equipment"
          className={cn("min-h-[120px]", validationErrors.issueDescription && "border-red-500")}
        />
        {validationErrors.issueDescription && (
          <p className="text-red-500 text-sm mt-1">{validationErrors.issueDescription}</p>
        )}
      </div>

      <FormField
        label="Equipment Location"
        name="equipmentLocation"
        required
        placeholder="Address where the equipment is located"
        error={validationErrors.equipmentLocation}
      />

      <div className="space-y-2">
        <Label htmlFor="imageUpload" className={cn(validationErrors.imageUpload && "text-red-500")}>
          Upload Image (Optional)
        </Label>
        <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
          <input
            id="imageUpload"
            name="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <label htmlFor="imageUpload" className="cursor-pointer flex flex-col items-center">
            {!imagePreview ? (
              <>
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-gray-600 mb-1">Click to upload an image of the equipment</p>
                <p className="text-gray-400 text-sm">PNG, JPG, GIF up to 5MB</p>
              </>
            ) : (
              <div className="w-full">
                <p className="text-gray-600 mb-3 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  {fileName}
                </p>
                <div className="relative w-full max-w-xs mx-auto">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Equipment preview"
                    className="max-h-40 rounded-md border border-gray-200 mx-auto"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null)
                      setFileName(null)
                      const input = document.getElementById("imageUpload") as HTMLInputElement
                      if (input) input.value = ""
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <span className="sr-only">Remove image</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </label>
        </div>
        {validationErrors.imageUpload && <p className="text-red-500 text-sm mt-1">{validationErrors.imageUpload}</p>}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="preferredContactMethod"
          className={cn(validationErrors.preferredContactMethod && "text-red-500")}
        >
          Preferred Contact Method <span className="text-red-500">*</span>
        </Label>
        <Select required onValueChange={(value) => setPreferredContactMethod(value)} value={preferredContactMethod}>
          <SelectTrigger className={cn(validationErrors.preferredContactMethod && "border-red-500")}>
            <SelectValue placeholder="Select contact method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
            <SelectItem value="either">Either</SelectItem>
          </SelectContent>
        </Select>
        {validationErrors.preferredContactMethod && (
          <p className="text-red-500 text-sm mt-1">{validationErrors.preferredContactMethod}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-6 text-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Repair Request"
        )}
      </Button>

      <p className="text-gray-500 text-sm text-center">
        <span className="text-red-500">*</span> Required fields
      </p>
    </form>
  )
}

// Helper component for form fields
function FormField({ label, name, required = false, placeholder, type = "text", error = "", value, onChange }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className={cn(error && "text-red-500")}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={cn(error && "border-red-500")}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

