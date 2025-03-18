"use client"

import RepairRequestForm from "./repair-request-form"
import { FaqItem } from "@/components/faq-item"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export default function RequestRepairPage() {
  const heroAnimation = useScrollAnimation()
  const formAnimation = useScrollAnimation()
  const faqAnimation = useScrollAnimation()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 py-32">
        <div
          ref={heroAnimation.ref}
          className={cn(
            "container mx-auto px-4 text-center transition-all duration-1000 transform",
            heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Request Repair Service</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fill out the form below to request a repair service for your wheel loaders, backhoe loaders, excavators,
            graders, forklifts, rollers, or any industrial equipment. Our team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div ref={formAnimation.ref} className="container mx-auto px-4">
          <div
            className={cn(
              "max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-1000 transform",
              formAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-yellow-500 p-8 text-black">
                <h2 className="text-2xl font-bold mb-6">How It Works</h2>
                <ol className="space-y-6">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white font-bold mr-3 flex-shrink-0">
                      1
                    </span>
                    <p>Fill out the repair request form with details about your equipment and the issue.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white font-bold mr-3 flex-shrink-0">
                      2
                    </span>
                    <p>Our team will review your request and contact you to discuss the repair needs.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white font-bold mr-3 flex-shrink-0">
                      3
                    </span>
                    <p>We'll provide a quote and schedule the repair service at a convenient time.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white font-bold mr-3 flex-shrink-0">
                      4
                    </span>
                    <p>Our expert technicians will complete the repair work efficiently and professionally.</p>
                  </li>
                </ol>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-6">Repair Request Form</h3>
                <RepairRequestForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div ref={faqAnimation.ref} className="container mx-auto px-4">
          <div
            className={cn(
              "text-center mb-12 transition-all duration-1000 transform",
              faqAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our repair services and processes.
            </p>
          </div>

          <div
            className={cn(
              "max-w-3xl mx-auto space-y-4 transition-all duration-1000 delay-300 transform",
              faqAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <FaqItem
              question="What types of equipment do you service?"
              answer="We service a wide range of heavy equipment including wheel loaders, backhoe loaders, excavators, graders, forklifts, rollers, and all kinds of industrial machinery. If you have a specific piece of equipment not listed, please contact us to discuss your needs."
            />
            <FaqItem
              question="How quickly can you respond to emergency repairs?"
              answer="We understand that equipment downtime can be costly. Our team prioritizes emergency repairs and aims to respond within 24 hours for most situations. For urgent cases, we may be able to dispatch a technician even sooner."
            />
            <FaqItem
              question="Do you provide warranty on repair work?"
              answer="Yes, all our repair work comes with a standard 90-day warranty on parts and labor. Extended warranty options are available for certain types of repairs and services."
            />
            <FaqItem
              question="What information should I include in my repair request?"
              answer="To help us respond effectively, please include the equipment make and model, a detailed description of the issue, the location of the equipment, and any relevant photos or videos of the problem. The more information you provide, the better we can prepare for the repair."
            />
            <FaqItem
              question="Do you offer preventative maintenance programs?"
              answer="Yes, we offer customized preventative maintenance programs designed to reduce downtime and extend the life of your equipment. Contact us to discuss a maintenance schedule that fits your operational needs."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

