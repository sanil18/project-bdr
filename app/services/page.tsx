"use client"

import { Wrench, Settings, Truck, Zap, MapPin, CheckCircle, Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export default function ServicesPage() {
  const heroAnimation = useScrollAnimation()
  const engineAnimation = useScrollAnimation()
  const transmissionAnimation = useScrollAnimation()
  const brakeAnimation = useScrollAnimation()
  const electricalAnimation = useScrollAnimation()
  const paintingAnimation = useScrollAnimation()
  const onsiteAnimation = useScrollAnimation()
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive maintenance and repair services for wheel loaders, backhoe loaders, excavators, graders,
            forklifts, rollers, and all kinds of industrial equipment.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-24">
            <ServiceItem
              id="engine"
              icon={<Settings className="h-12 w-12 text-yellow-500" />}
              title="Engine Overhauling"
              description="Our expert technicians provide comprehensive engine diagnostics, repair, and rebuilding services to ensure optimal performance and longevity of your heavy equipment including wheel loaders, excavators, and industrial machinery."
              image="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              features={[
                "Complete engine diagnostics and troubleshooting",
                "Engine rebuilding and reconditioning",
                "Cylinder head repair and replacement",
                "Crankshaft and camshaft services",
                "Fuel system repair and maintenance",
                "Performance testing and optimization",
              ]}
              reversed={false}
              animationRef={engineAnimation.ref}
              isVisible={engineAnimation.isVisible}
            />

            <ServiceItem
              id="transmission"
              icon={<Wrench className="h-12 w-12 text-yellow-500" />}
              title="Transmission Overhauling"
              description="We specialize in transmission repair and maintenance for backhoe loaders, graders, forklifts, and other heavy equipment to keep your machinery running smoothly and efficiently, minimizing downtime and maximizing productivity."
              image="https://www.ralphstransmission.com/wp-content/uploads/2022/03/transmission-gear-repair-ralphstransmission-62276f04b24cd.jpg"
              features={[
                "Transmission diagnostics and troubleshooting",
                "Complete transmission rebuilding",
                "Clutch repair and replacement",
                "Torque converter servicing",
                "Differential repair and maintenance",
                "Driveline component replacement",
              ]}
              reversed={true}
              animationRef={transmissionAnimation.ref}
              isVisible={transmissionAnimation.isVisible}
            />

            <ServiceItem
              id="brake"
              icon={<Truck className="h-12 w-12 text-yellow-500" />}
              title="Brake & Hydraulic Works"
              description="Our hydraulic specialists provide expert repair and maintenance services for all hydraulic systems and components in rollers, excavators, and forklifts, ensuring safe and efficient operation of your industrial equipment."
              image="https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              features={[
                "Hydraulic pump and motor repair",
                "Cylinder repair and rebuilding",
                "Valve repair and replacement",
                "Brake system overhaul and maintenance",
                "Hydraulic hose replacement and fabrication",
                "System pressure testing and adjustment",
              ]}
              reversed={false}
              animationRef={brakeAnimation.ref}
              isVisible={brakeAnimation.isVisible}
            />

            <ServiceItem
              id="electrical"
              icon={<Zap className="h-12 w-12 text-yellow-500" />}
              title="Electrical & A/C Works"
              description="Our certified technicians provide comprehensive electrical system diagnostics and air conditioning repair services for wheel loaders, backhoe loaders, and all types of industrial equipment to keep your machinery operating in optimal condition."
              image="https://www.tlcautotruck.com/wp-content/uploads/2021/12/truck-electrical-wiring.jpg"
              features={[
                "Electrical system diagnostics and repair",
                "Starter and alternator rebuilding",
                "Wiring harness repair and replacement",
                "A/C system diagnostics and repair",
                "Compressor replacement and servicing",
                "Climate control system maintenance",
              ]}
              reversed={true}
              animationRef={electricalAnimation.ref}
              isVisible={electricalAnimation.isVisible}
            />

            <ServiceItem
              id="painting"
              icon={<Paintbrush className="h-12 w-12 text-yellow-500" />}
              title="Painting & Denting"
              description="We offer professional painting and denting services for all types of heavy equipment and industrial machinery, restoring your equipment's appearance and protecting it from corrosion and environmental damage."
              image="https://www.shutterstock.com/image-photo/removing-dents-on-car-pdr-600nw-1873530244.jpg"
              features={[
                "Complete body repair and dent removal",
                "Surface preparation and rust treatment",
                "High-quality industrial paint application",
                "Custom color matching and finishing",
                "Protective coating and sealant application",
                "Cabin interior restoration and refinishing",
              ]}
              reversed={false}
              animationRef={paintingAnimation.ref}
              isVisible={paintingAnimation.isVisible}
            />

            <ServiceItem
              id="onsite"
              icon={<MapPin className="h-12 w-12 text-yellow-500" />}
              title="Site Visits & On-Site Repairs"
              description="We offer mobile repair services for graders, rollers, and all industrial equipment to minimize downtime and keep your operations running smoothly, with our fully-equipped service vehicles ready to respond to your needs."
              image="https://media.istockphoto.com/id/119491874/photo/maintenance-work-of-heavy-loader.jpg?s=612x612&w=0&k=20&c=0mlvc3SHoRj_q-EbzYQyfPQmDd3nVXtMxr1MUrDxWXg="
              features={[
                "Emergency on-site repairs",
                "Scheduled maintenance visits",
                "Equipment inspection and evaluation",
                "Fluid and filter changes",
                "Minor repairs and adjustments",
                "Preventative maintenance programs",
              ]}
              reversed={true}
              animationRef={onsiteAnimation.ref}
              isVisible={onsiteAnimation.isVisible}
            />
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
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Get Your Equipment Serviced?</h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a service appointment or request a repair for your wheel loaders, excavators,
            forklifts, or any industrial equipment. We provide complete mechanical work, repairs, and maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link href="/request-repair">Request Repair</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceItem({ id, icon, title, description, image, features, reversed, animationRef, isVisible }) {
  return (
    <div id={id} ref={animationRef} className="scroll-mt-24">
      <div
        className={cn(
          `flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 transition-all duration-1000 transform`,
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
      >
        <div className="lg:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="mb-4">{icon}</div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-6">{description}</p>
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start group">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="group-hover:text-gray-900 transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black self-start">
            <Link href="/request-repair">Request This Service</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

