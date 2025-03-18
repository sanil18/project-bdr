"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItemProps {
  question: string
  answer: string
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300",
        isOpen ? "shadow-lg" : "hover:shadow-lg",
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
          {question}
        </h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-yellow-500 transition-transform duration-300",
            isOpen ? "transform rotate-180" : "",
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="p-6 pt-0 text-gray-700">{answer}</div>
      </div>
    </div>
  )
}

