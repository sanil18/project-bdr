"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "./contact-form"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"

const MapComponent = dynamic(() => import("./map-component"), { ssr: false })

export default function ContactPage() {
  const heroAnimation = useScrollAnimation()
  const contactInfoAnimation = useScrollAnimation()
  const formAnimation = useScrollAnimation()
  const ctaAnimation = useScrollAnimation()

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our services? Need to schedule a repair for your wheel loaders, backhoe loaders,
            excavators, graders, forklifts, rollers, or any industrial equipment? Our team is ready to assist you with
            complete mechanical work, repairs, and maintenance.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div
              ref={contactInfoAnimation.ref}
              className={cn(
                "lg:w-1/2 transition-all duration-1000 transform",
                contactInfoAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
              )}
            >
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-8 mb-12">
                <ContactInfoItem
                  icon={<Phone className="h-6 w-6 text-yellow-500" />}
                  title="Phone"
                  content="+971 529335265"
                  link="tel:+971 529335265"
                />

                <ContactInfoItem
                  icon={<Mail className="h-6 w-6 text-yellow-500" />}
                  title="Email"
                  content="Bdrheavy@gmail.com"
                  link="mailto:Bdrheavy@gmail.com"
                />

                <ContactInfoItem
                  icon={<MapPin className="h-6 w-6 text-yellow-500" />}
                  title="Address"
                  content="Ras Al Khor Industrial Area 1, Dubai - United Arab Emirates"
                />

                <ContactInfoItem
                  icon={<Clock className="h-6 w-6 text-yellow-500" />}
                  title="Business Hours"
                  content={
                    <div>
                      <p>Monday-Friday: 7am-6pm</p>
                      <p>Saturday: 8am-2pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  }
                />
              </div>

              <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
                <MapComponent />
              </div>
            </div>

            <div
              ref={formAnimation.ref}
              className={cn(
                "lg:w-1/2 transition-all duration-1000 transform",
                formAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
              )}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 py-16">
        <div
          ref={ctaAnimation.ref}
          className={cn(
            "container mx-auto px-4 text-center transition-all duration-1000 transform",
            ctaAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-3xl font-bold text-black mb-6">Need Emergency Repairs?</h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-4">
            Our team is available for urgent repair needs. Call our emergency service line for immediate assistance.
          </p>
          <a href="tel:5559998888" className="text-2xl font-bold hover:text-yellow-800 transition-colors inline-block">
            (555) 999-8888
          </a>
        </div>
      </section>
    </main>
  )
}

function ContactInfoItem({ icon, title, content, link }) {
  return (
    <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors -mx-3">
      <div className="mr-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        {link ? (
          <a href={link} className="text-gray-700 hover:text-yellow-600 transition-colors">
            {content}
          </a>
        ) : (
          <div className="text-gray-700">{content}</div>
        )}
      </div>
    </div>
  )
}

