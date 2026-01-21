"use client"
import { Button } from "@/components/ui/button"
import { X, Menu, Phone, Mail, MapPin, Calendar, ExternalLink, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { SkipLink } from "@/components/skip-link"

export function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showMobileServicesDropdown, setShowMobileServicesDropdown] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setShowMobileMenu(false)
  }

  return (
    <>
      <SkipLink />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-stone-200/50 shadow-sm" role="banner">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/sol-logo-icon.svg"
                alt="Sol MedSpa Logo"
                width={80}
                height={80}
                className="w-20 h-20"
              />
              <div className="flex flex-col">
                <span className="text-stone-800 font-serif text-xl font-bold tracking-wide">
                  <span className="font-bold italic">Sol</span> MedSpa
                </span>
                <span className="text-stone-500 text-xs font-light tracking-wider hidden sm:block">
                  Radiant Skin. Reimagined.
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
                >
                  Home
                </Button>
              </Link>
              <Link href="/#concierge-experience">
                <Button
                  variant="ghost"
                  className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
                >
                  Concierge Experience
                </Button>
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <Button
                  variant="ghost"
                  className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {showServicesDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-stone-200 py-2 z-50">
                    <Link href="/botox-party">
                      <div className="px-4 py-2 hover:bg-stone-100 text-stone-700 hover:text-stone-900 transition-colors">
                        <div className="font-medium text-sm">Botox Party</div>
                        <div className="text-xs text-stone-500">Group treatments at home</div>
                      </div>
                    </Link>
                    <Link href="/botox-dysport">
                      <div className="px-4 py-2 hover:bg-stone-100 text-stone-700 hover:text-stone-900 transition-colors">
                        <div className="font-medium text-sm">Botox & Dysport</div>
                        <div className="text-xs text-stone-500">Wrinkle reduction</div>
                      </div>
                    </Link>
                    <Link href="/glp1">
                      <div className="px-4 py-2 hover:bg-stone-100 text-stone-700 hover:text-stone-900 transition-colors">
                        <div className="font-medium text-sm">GLP-1 Inhibitors</div>
                        <div className="text-xs text-stone-500">Weight management</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/care">
                <Button
                  variant="ghost"
                  className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
                >
                  Care
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="ghost"
                  className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
                >
                  Pricing
                </Button>
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="hidden sm:flex items-center px-4 py-2 text-stone-700 font-medium rounded-full border-stone-300 hover:bg-stone-100 transition-all duration-200 bg-transparent"
                >
                  Contact
                </Button>
              </Link>

              <a
                href="https://app.squareup.com/appointments/book/9cjimearmu7iz4/LM76T0GTP6A6G/start"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center space-x-2 px-5 py-2.5 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 bg-sol-brown hover:bg-sol-brown-dark"
              >
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Book Now</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <Button
                variant="ghost"
                className="md:hidden text-stone-600 hover:text-stone-800 hover:bg-stone-100 p-2 rounded-full"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {showMobileMenu && (
        <div className="fixed top-[88px] left-0 right-0 z-40 md:hidden bg-white shadow-lg border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="space-y-2 mb-6">
              <Link href="/" onClick={() => setShowMobileMenu(false)}>
                <Button
                  variant="ghost"
                  className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-3 rounded-lg transition-all duration-200 justify-start"
                >
                  Home
                </Button>
              </Link>
              <Link href="/#concierge-experience" onClick={() => setShowMobileMenu(false)}>
                <Button
                  variant="ghost"
                  className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-3 rounded-lg transition-all duration-200 justify-start"
                >
                  Concierge Experience
                </Button>
              </Link>
              <div>
                <Button
                  variant="ghost"
                  onClick={() => setShowMobileServicesDropdown(!showMobileServicesDropdown)}
                  className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-3 rounded-lg transition-all duration-200 justify-start flex items-center justify-between"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${showMobileServicesDropdown ? "rotate-180" : ""}`}
                  />
                </Button>
                {showMobileServicesDropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link href="/botox-party" onClick={() => setShowMobileMenu(false)}>
                      <Button
                        variant="ghost"
                        className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-lg transition-all duration-200 justify-start text-sm"
                      >
                        Botox Party
                      </Button>
                    </Link>
                    <Link href="/botox-dysport" onClick={() => setShowMobileMenu(false)}>
                      <Button
                        variant="ghost"
                        className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-lg transition-all duration-200 justify-start text-sm"
                      >
                        Botox & Dysport
                      </Button>
                    </Link>
                    <Link href="/glp1" onClick={() => setShowMobileMenu(false)}>
                      <Button
                        variant="ghost"
                        className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-lg transition-all duration-200 justify-start text-sm"
                      >
                        GLP-1 Inhibitors
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/care" onClick={() => setShowMobileMenu(false)}>
                <Button
                  variant="ghost"
                  className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-3 rounded-lg transition-all duration-200 justify-start"
                >
                  Care
                </Button>
              </Link>
              <Link href="/pricing" onClick={() => setShowMobileMenu(false)}>
                <Button
                  variant="ghost"
                  className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-3 rounded-lg transition-all duration-200 justify-start"
                >
                  Pricing
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setShowMobileMenu(false)}>
                <Button
                  variant="ghost"
                  className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-3 rounded-lg transition-all duration-200 justify-start"
                >
                  Contact
                </Button>
              </Link>
            </div>

            <div className="border-t border-stone-200 pt-6 space-y-4">
              <h3 className="text-sm font-semibold text-stone-800 mb-3">Contact Information</h3>

              <a
                href="mailto:admin@sol-medspa.com"
                className="flex items-center space-x-3 text-stone-600 hover:text-stone-800 transition-colors"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-sol-cream-bg">
                  <Mail className="w-5 h-5 text-sol-brown" />
                </div>
                <div>
                  <div className="text-xs text-stone-500">Email</div>
                  <div className="text-sm font-medium">admin@sol-medspa.com</div>
                </div>
              </a>

              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 text-stone-600 hover:text-stone-800 transition-colors"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-sol-cream-bg">
                  <Phone className="w-5 h-5 text-sol-brown" />
                </div>
                <div>
                  <div className="text-xs text-stone-500">Phone</div>
                  <div className="text-sm font-medium">+1 (555) 123-4567</div>
                </div>
              </a>

              <div className="flex items-center space-x-3 text-stone-600">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-sol-cream-bg">
                  <MapPin className="w-5 h-5 text-sol-brown" />
                </div>
                <div>
                  <div className="text-xs text-stone-500">Location</div>
                  <div className="text-sm font-medium">Los Angeles & Surrounding Areas</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/contact" onClick={() => setShowMobileMenu(false)}>
                <Button className="w-full text-white font-medium rounded-full py-3 shadow-lg hover:shadow-xl transition-all duration-200 bg-sol-brown hover:bg-sol-brown-dark">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
