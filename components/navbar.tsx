"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5",
        !isHomePage && !scrolled ? "bg-gray-900" : "",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span
              className={cn(
                "text-2xl font-bold transition-colors duration-300",
                scrolled || isMenuOpen ? "text-gray-900" : "text-white",
              )}
            >
              <span className="text-yellow-500">BDR</span> Equipment
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <NavLink href="/" scrolled={scrolled}>
                Home
              </NavLink>
              <NavLink href="/services" scrolled={scrolled}>
                Services
              </NavLink>
              <NavLink href="/contact" scrolled={scrolled}>
                Contact
              </NavLink>
            </div>
            <Button
              asChild
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium group relative overflow-hidden"
            >
              <Link href="/request-repair" className="flex items-center">
                <span>Request Repair</span>
                <span className="absolute inset-0 w-full h-full bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-10"></span>
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden focus:outline-none transition-colors",
              scrolled || isMenuOpen ? "text-gray-900" : "text-white drop-shadow-md",
            )}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/services" onClick={toggleMenu}>
              Services
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
            <Button
              asChild
              className="bg-yellow-500 hover:bg-yellow-600 text-black w-full mt-2 group relative overflow-hidden"
            >
              <Link href="/request-repair" onClick={toggleMenu} className="flex items-center justify-center">
                <span>Request Repair</span>
                <span className="absolute inset-0 w-full h-full bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-10"></span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, scrolled }) {
  return (
    <Link
      href={href}
      className={cn(
        "font-medium transition-colors relative py-2",
        scrolled ? "text-gray-700 hover:text-yellow-500" : "text-white hover:text-yellow-300",
        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-yellow-500 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left",
      )}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-700 hover:text-yellow-500 font-medium py-2 transition-colors relative group"
    >
      <span className="group-hover:pl-2 transition-all duration-300">{children}</span>
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-1 group-hover:h-1 bg-yellow-500 rounded-full transition-all duration-300"></span>
    </Link>
  )
}

