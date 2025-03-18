"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function TermsOfServicePage() {
  const headerAnimation = useScrollAnimation()
  const contentAnimation = useScrollAnimation()

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gray-900 py-24">
        <div
          ref={headerAnimation.ref}
          className={cn(
            "container mx-auto px-4 text-center transition-all duration-1000 transform",
            headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div
          ref={contentAnimation.ref}
          className={cn(
            "container mx-auto px-4 max-w-4xl transition-all duration-1000 transform",
            contentAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>

              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your use of the website operated by BDR Heavy Equipment
                Maintenance LLC ("we," "our," or "us") and the services we provide. By accessing our website or using
                our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may
                not access our website or use our services.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Service Description</h2>
              <p>
                BDR Heavy Equipment Maintenance LLC provides repair, maintenance, and related services for heavy
                equipment and industrial machinery, including but not limited to wheel loaders, backhoe loaders,
                excavators, graders, forklifts, rollers, and other industrial equipment. Our services include engine
                overhauling, transmission repair, brake and hydraulic works, electrical and A/C works, painting and
                denting, and on-site repairs.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Service Requests and Appointments</h2>
              <p>
                When you submit a repair request or contact us for services through our website, you are not guaranteed
                a specific appointment time until confirmed by our team. We will make reasonable efforts to contact you
                promptly to schedule service appointments.
              </p>
              <p>
                You agree to provide accurate and complete information when submitting repair requests or contacting us
                for services. Inaccurate or incomplete information may result in delays or inability to provide
                services.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Payment Terms</h2>
              <p>
                Payment terms will be discussed and agreed upon before any work is performed. We may require a deposit
                for certain services. Final payment is typically due upon completion of services, unless otherwise
                agreed in writing.
              </p>
              <p>
                Prices for our services may change without notice. We reserve the right to refuse service to anyone for
                any reason at any time.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Warranty</h2>
              <p>
                We provide a standard 90-day warranty on parts and labor for our repair services, unless otherwise
                specified. This warranty covers defects in workmanship and materials under normal use. The warranty does
                not cover damage resulting from misuse, abuse, neglect, accidents, or unauthorized modifications.
              </p>
              <p>
                To claim warranty service, contact us with your original repair information. We will assess the issue
                and determine if it is covered under warranty.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, BDR Heavy Equipment Maintenance LLC shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits
                or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
                intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>
                  Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services by
                  any third party
                </li>
              </ul>
              <p>
                Our total liability for any claims under these Terms shall not exceed the amount you paid us for the
                service in question.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Customer Responsibilities</h2>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Providing accurate information about your equipment and the issues requiring service</li>
                <li>Ensuring safe access to equipment requiring service</li>
                <li>Obtaining any necessary permits or permissions for repair work</li>
                <li>Promptly communicating any concerns or issues with completed work</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Intellectual Property</h2>
              <p>
                The content on our website, including text, graphics, logos, images, and software, is the property of
                BDR Heavy Equipment Maintenance LLC and is protected by copyright and other intellectual property laws.
                You may not use, reproduce, distribute, or create derivative works from this content without our express
                written permission.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates.
                Any disputes arising under or in connection with these Terms shall be subject to the exclusive
                jurisdiction of the courts located in Dubai, UAE.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by
                posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our
                website and services after such changes constitutes your acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck
                and the remaining provisions shall be enforced.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <ul className="list-none pl-0 mb-6 space-y-2">
                <li>By email: Bdrheavy@gmail.com</li>
                <li>By phone: +971 529335265</li>
                <li>By mail: Ras Al Khor Industrial Area 1, Dubai - United Arab Emirates</li>
              </ul>

              <div className="mt-12 text-center">
                <Link href="/" className="text-yellow-500 hover:text-yellow-600 font-medium">
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

