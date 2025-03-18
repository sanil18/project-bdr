"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const footerAnimation = useScrollAnimation()

  return (
    <footer className="bg-gray-900 text-white">
      <div ref={footerAnimation.ref} className="container mx-auto px-4 py-16">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-1000 transform",
            footerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500 h-10 w-10 rounded-md flex items-center justify-center mr-2">
                <span className="text-black font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-yellow-500">BDR</span> Heavy Equipment
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional heavy equipment repair and maintenance services for wheel loaders, backhoe loaders,
              excavators, graders, forklifts, rollers, and all kinds of industrial equipment.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Our Services</FooterLink>
              <FooterLink href="/request-repair">Request Repair</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-800">Our Services</h3>
            <ul className="space-y-3">
              <FooterLink href="/services#engine">Engine Overhauling</FooterLink>
              <FooterLink href="/services#transmission">Transmission Repair</FooterLink>
              <FooterLink href="/services#brake">Brake & Hydraulic Works</FooterLink>
              <FooterLink href="/services#electrical">Electrical & A/C Works</FooterLink>
              <FooterLink href="/services#painting">Painting & Denting</FooterLink>
              <FooterLink href="/services#onsite">On-Site Repairs</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-800">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+971 529335265" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    +971 529335265
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:Bdrheavy@gmail.com" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    Bdrheavy@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">Ras Al Khor Industrial Area 1, Dubai - United Arab Emirates</div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p>Monday-Friday: 7am-6pm</p>
                  <p>Saturday: 8am-2pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={cn(
            "border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center transition-all duration-1000 delay-300 transform",
            footerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} BDR Heavy Equipment Maintenance LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-yellow-500 transition-colors flex items-center group">
        <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-yellow-500" />
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Social media link"
    >
      {icon}
    </a>
  )
}

