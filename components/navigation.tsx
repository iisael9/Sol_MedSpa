"use client"
import { Button } from "@/components/ui/button"
import { X, Menu, Phone, Mail, MapPin, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setShowMobileMenu(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-stone-200/50 shadow-sm">
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
              <Link href="/#services">
                <Button
                  variant="ghost"
                  className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
                >
                  Services
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
              <Link href="/#about">
                <Button
                  variant="ghost"
                  className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
                >
                  About
                </Button>
              </Link>
              <Link href="/care">
                <Button
                  variant="ghost"
                  className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
                >
                  Care
                </Button>
              </Link>
              <button
                onClick={() => setShowComingSoonModal(true)}
                className="relative text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
              >
                Pricing
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  SOON
                </span>
              </button>
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
                <span className="text-sm">Book A Session</span>
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
              <Link href="/#services" onClick={() => setShowMobileMenu(false)}>
                <Button
                  variant="ghost"
                  className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-3 rounded-lg transition-all duration-200 justify-start"
                >
                  Services
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
              <Link href="/#about" onClick={() => setShowMobileMenu(false)}>
                <Button
                  variant="ghost"
                  className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-3 rounded-lg transition-all duration-200 justify-start"
                >
                  About
                </Button>
              </Link>
              <Link href="/care" onClick={() => setShowMobileMenu(false)}>
                <Button
                  variant="ghost"
                  className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-3 rounded-lg transition-all duration-200 justify-start"
                >
                  Care
                </Button>
              </Link>
              <button
                onClick={() => setShowComingSoonModal(true)}
                className="w-full text-left text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-3 rounded-lg transition-all duration-200 relative"
              >
                Pricing
                <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  SOON
                </span>
              </button>
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
                  Book a Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {showComingSoonModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative">
            <button
              onClick={() => setShowComingSoonModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div
                className="w-36 h-36 rounded-full mx-auto mb-4 flex items-center justify-center bg-white border-4 shadow-xl"
                style={{ borderColor: "#C4956C" }}
              >
                <Image
                  src="/images/sol-logo-icon.svg"
                  alt="Sol MedSpa Logo"
                  width={180}
                  height={180}
                  className="w-44 h-44"
                />
              </div>

              <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3">Coming Soon</h3>

              <p className="text-stone-600 mb-6 leading-relaxed">
                This page is currently being prepared. Check back soon for updates, or contact us directly for more
                information.
              </p>

              <Button
                onClick={() => setShowComingSoonModal(false)}
                className="w-full text-white font-medium rounded-full py-3 hover:shadow-lg transition-all duration-200 bg-sol-brown hover:bg-sol-brown-dark"
              >
                Got It
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
