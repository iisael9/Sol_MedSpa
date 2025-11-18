"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false)
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleComingSoonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowComingSoonModal(true)
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
            {/* </CHANGE> */}

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
              <Link href="/before-after">
                <Button
                  variant="ghost"
                  className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
                >
                  Before/After
                </Button>
              </Link>
              <button
                onClick={handleComingSoonClick}
                className="relative text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
              >
                Care
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  SOON
                </span>
              </button>
              <button
                onClick={handleComingSoonClick}
                className="relative text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
              >
                Pricing
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  SOON
                </span>
              </button>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <Link href="/contact">
                <Button
                  className="hidden sm:flex items-center px-6 py-2 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  style={{ backgroundColor: "#C4956C" }}
                >
                  Contact
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="md:hidden text-stone-600 hover:text-stone-800 hover:bg-stone-100 p-2 rounded-full"
              >
                <ChevronDown className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

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
              <div className="w-36 h-36 rounded-full mx-auto mb-4 flex items-center justify-center bg-white border-4 shadow-xl" style={{ borderColor: "#C4956C" }}>
                <Image 
                  src="/images/sol-logo-icon.svg"
                  alt="Sol MedSpa Logo"
                  width={180}
                  height={180}
                  className="w-44 h-44"
                />
              </div>
              {/* </CHANGE> */}
              
              <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3">
                Coming Soon
              </h3>
              
              <p className="text-stone-600 mb-6 leading-relaxed">
                This page is currently being prepared. Check back soon for updates, or contact us directly for more information.
              </p>
              
              <Button
                onClick={() => setShowComingSoonModal(false)}
                className="w-full text-white font-medium rounded-full py-3 hover:shadow-lg transition-all duration-200"
                style={{ backgroundColor: "#C4956C" }}
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
