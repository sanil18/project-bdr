"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">How we collect, use, and protect your information</p>
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
                BDR Heavy Equipment Maintenance LLC ("we," "our," or "us") respects your privacy and is committed to
                protecting your personal data. This privacy policy will inform you about how we look after your personal
                data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Information We Collect</h2>
              <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Identity Data</strong>: includes first name, last name, company name.
                </li>
                <li>
                  <strong>Contact Data</strong>: includes email address, telephone number, and physical address.
                </li>
                <li>
                  <strong>Technical Data</strong>: includes internet protocol (IP) address, browser type and version,
                  time zone setting and location, browser plug-in types and versions, operating system and platform, and
                  other technology on the devices you use to access this website.
                </li>
                <li>
                  <strong>Usage Data</strong>: includes information about how you use our website and services.
                </li>
                <li>
                  <strong>Equipment Data</strong>: includes information about your heavy equipment that you provide when
                  requesting repairs or services.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">How We Use Your Information</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process and complete repair requests</li>
                <li>To contact you regarding your inquiries or service requests</li>
                <li>To improve our website and services</li>
                <li>To send you information about our services that may be of interest to you</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Data Security</h2>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being accidentally
                lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors, and other third parties who have a business
                need to know.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it
                for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Cookies</h2>
              <p>
                Our website may use cookies to enhance your experience. Cookies are small files that a site or its
                service provider transfers to your computer's hard drive through your web browser that enables the
                site's or service provider's systems to recognize your browser and capture and remember certain
                information.
              </p>
              <p>
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or
                access cookies. If you disable or refuse cookies, please note that some parts of this website may become
                inaccessible or not function properly.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins, and applications. Clicking on those
                links or enabling those connections may allow third parties to collect or share data about you. We do
                not control these third-party websites and are not responsible for their privacy statements. When you
                leave our website, we encourage you to read the privacy policy of every website you visit.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p>If you wish to exercise any of these rights, please contact us at Bdrheavy@gmail.com.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
              </p>
              <p>
                You are advised to review this privacy policy periodically for any changes. Changes to this privacy
                policy are effective when they are posted on this page.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
              <p>If you have any questions about this privacy policy, please contact us:</p>
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

