"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"

const COOKIE_CONSENT_KEY = "sol-medspa-cookie-consent"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Small delay for better UX - don't show immediately on page load
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    setShowBanner(false)
    // Google Analytics is already loaded, this just records consent
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined")
    setShowBanner(false)
    // Optionally disable GA tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      })
    }
  }

  const handleClose = () => {
    // Closing without choosing = accept (common pattern)
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-stone-200 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 id="cookie-consent-title" className="text-lg font-semibold text-stone-800 mb-2">
              We Value Your Privacy
            </h2>
            <p id="cookie-consent-description" className="text-stone-600 text-sm leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and 
              understand where our visitors come from. By clicking "Accept All", you consent to our use of cookies. 
              Read our{" "}
              <Link href="/privacy" className="text-sol-brown hover:text-sol-brown-dark underline">
                Privacy Policy
              </Link>{" "}
              for more information.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleAccept}
                className="bg-sol-brown hover:bg-sol-brown-dark text-white px-6"
              >
                Accept All
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent"
              >
                Decline Optional
              </Button>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-stone-400 hover:text-stone-600 transition-colors p-1 -mt-1 -mr-1"
            aria-label="Close cookie consent banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: object) => void
  }
}
