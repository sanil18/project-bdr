"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Wrench,
  Settings,
  ChevronDown,
  PenToolIcon as Tool,
  Clock,
  Shield,
  Paintbrush,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export default function Home() {
  const heroAnimation = useScrollAnimation()
  const aboutAnimation = useScrollAnimation()
  const servicesAnimation = useScrollAnimation()
  const ctaAnimation = useScrollAnimation()

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
        <div
          ref={heroAnimation.ref}
          className="relative z-20 container mx-auto px-4 flex flex-col justify-center items-start h-full"
        >
          <div
            className={cn(
              "max-w-2xl transition-all duration-1000 transform",
              heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Heavy Equipment <span className="text-yellow-400">Maintenance</span>
            </h1>
            <p className="text-xl text-white/90 max-w-xl mb-8">
              Professional repair and maintenance services for wheel loaders, backhoe loaders, excavators, graders,
              forklifts, rollers, and all kinds of industrial equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium group relative overflow-hidden transition-all duration-300"
              >
                <Link href="/request-repair" className="flex items-center">
                  <span>Request Repair</span>
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all duration-300" />
                  <span className="absolute inset-0 w-full h-full bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-10"></span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-navy-700 hover:bg-navy-800 text-white font-medium group relative overflow-hidden transition-all duration-300"
              >
                <Link href="/services" className="flex items-center">
                  <span>Our Services</span>
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all duration-300" />
                  <span className="absolute inset-0 w-full h-full bg-navy-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-10"></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center text-white hover:text-yellow-400 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div ref={aboutAnimation.ref} className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div
              className={cn(
                "md:w-1/2 transition-all duration-1000 delay-300 transform",
                aboutAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
              )}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">About BDR Heavy Equipment Maintenance</h2>
              <p className="text-gray-700 mb-6 text-lg">
                With years of experience in the industry, BDR Heavy Equipment Maintenance LLC has established itself as
                a trusted partner for businesses relying on heavy machinery.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Our team of certified technicians specializes in diagnosing and repairing all types of heavy equipment
                including wheel loaders, backhoe loaders, excavators, graders, forklifts, rollers, and industrial
                machinery, ensuring minimal downtime and maximum productivity for your operations.
              </p>
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/services">
                  Explore Our Services <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div
              className={cn(
                "md:w-1/2 transition-all duration-1000 delay-500 transform",
                aboutAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
              )}
            >
              <div className="rounded-lg overflow-hidden shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                <img
                  src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Technician repairing heavy equipment"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-yellow-400 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-yellow-500 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-200 blur-3xl"></div>
        </div>

        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div ref={servicesAnimation.ref} className="container relative z-10 mx-auto px-4">
          <div
            className={cn(
              "text-center mb-16 transition-all duration-1000 transform",
              servicesAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <span className="inline-block bg-gradient-to-r from-yellow-200 to-yellow-100 text-yellow-800 px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-sm">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 drop-shadow-sm">Our Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              We offer comprehensive maintenance and repair services for wheel loaders, backhoe loaders, excavators,
              graders, forklifts, rollers, and all kinds of industrial equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              icon={<Settings className="h-8 w-8 text-yellow-500" />}
              title="Engine Overhauling"
              description="Complete engine diagnostics, repair, and rebuilding services for optimal performance of your industrial equipment."
              delay={100}
              isVisible={servicesAnimation.isVisible}
            />
            <ServiceCard
              icon={<Wrench className="h-8 w-8 text-yellow-500" />}
              title="Transmission Repair"
              description="Expert transmission repair and maintenance to keep your heavy machinery running smoothly."
              delay={300}
              isVisible={servicesAnimation.isVisible}
            />
            <ServiceCard
              icon={<Paintbrush className="h-8 w-8 text-yellow-500" />}
              title="Painting & Denting"
              description="Professional painting and denting services to restore and protect your equipment's appearance."
              delay={500}
              isVisible={servicesAnimation.isVisible}
            />
          </div>

          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 transform",
              servicesAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <FeatureCard
              icon={<Tool className="h-6 w-6 text-yellow-500" />}
              title="Quality Parts"
              description="We use only high-quality, genuine parts for all repairs and maintenance."
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6 text-yellow-500" />}
              title="Fast Turnaround"
              description="Our efficient processes ensure your equipment is back in action quickly."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-yellow-500" />}
              title="Warranty Coverage"
              description="All our repair work is backed by a comprehensive warranty."
            />
          </div>

          <div
            className={cn(
              "text-center mt-16 transition-all duration-1000 delay-900 transform",
              servicesAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/services" className="flex items-center px-8 py-3">
                <span className="mr-2">View All Services</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div ref={ctaAnimation.ref} className="container mx-auto px-4">
          <div
            className={cn(
              "max-w-4xl mx-auto bg-gradient-to-r from-yellow-500/20 to-transparent p-12 rounded-2xl border border-yellow-500/20 transition-all duration-1000 transform",
              ctaAnimation.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Equipment Back in Action?</h2>
            <p className="text-white/80 max-w-2xl mb-8 text-lg leading-relaxed">
              Don't let equipment downtime affect your business. Our expert technicians provide complete mechanical
              work, repairs, and maintenance for wheel loaders, excavators, forklifts, and all industrial equipment to
              help you get back to work quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-6 text-lg"
              >
                <Link href="/request-repair">Request Repair</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-gray-800 border-white text-white hover:bg-white hover:text-gray-900 font-medium px-8 py-6 text-lg transition-colors duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ icon, title, description, delay, isVisible }) {
  return (
    <div
      className={cn(
        "bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 transition-all duration-1000 transform border border-gray-100 group hover:shadow-xl hover:border-yellow-200 hover:bg-gradient-to-br hover:from-white hover:to-yellow-50",
        isVisible ? `opacity-100 translate-y-0 delay-${delay}` : "opacity-0 translate-y-10",
      )}
    >
      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-yellow-200 group-hover:to-yellow-100 transition-colors group-hover:scale-110 transform duration-300 shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors">{description}</p>
      <Link
        href={`/services#${title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
        className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors inline-flex items-center group-hover:font-bold"
      >
        Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:ml-2 transition-all duration-300" />
      </Link>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-yellow-200 hover:bg-white group">
      <div className="flex items-center mb-4">
        <div className="bg-yellow-50 p-2 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-yellow-100">
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">{title}</h3>
      </div>
      <p className="text-gray-600 group-hover:text-gray-900 transition-colors">{description}</p>
    </div>
  )
}

