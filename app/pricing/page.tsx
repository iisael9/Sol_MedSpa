"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-sol-cream-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="/elegant-woman-beauty-portrait-close-up-face.jpg"
            alt="Beauty Portrait"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="text-6xl md:text-7xl font-serif mb-4">
              Results
              <br />
              <span className="italic">& Radiance</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Treatment Menu & Pricing</h2>
            <p className="text-muted-foreground mb-4">Founders' Introductory Pricing</p>
            <p className="text-foreground text-sm max-w-3xl mx-auto mb-6 font-semibold">
              Grand Opening – Founders' Introductory Pricing
            </p>
            <p className="text-muted-foreground text-sm max-w-3xl mx-auto mb-6">
              For a limited time, enjoy Founders' Pricing during our Grand Opening. Pricing reflects up to 50% off our
              future standard rates.
            </p>
            <div className="w-16 h-px bg-border mx-auto mb-6" />
            <p className="text-foreground italic font-serif text-lg">Where Skin Meets Soul</p>
          </div>

          {/* Grand Opening Bonuses */}
          <div className="mb-16 bg-sol-cream-bg border-2 border-sol-brown/20 rounded-xl p-8">
            <h3 className="text-2xl font-serif text-foreground mb-6 text-center">Additional Bonus Incentives</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-sol-brown mb-2">10%</div>
                <p className="text-muted-foreground text-sm">Loyalty bonus on a returning client's second visit</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sol-brown mb-2">15%</div>
                <p className="text-muted-foreground text-sm">
                  One-time referral bonus when your referral completes a session
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sol-brown mb-2">20%</div>
                <p className="text-muted-foreground text-sm">
                  Group booking bonus for Botox parties of 3 or more clients
                </p>
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6 italic">
              Founders' pricing is available for a limited time and will not be offered again.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Anti-Wrinkle */}
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-6">Anti-Wrinkle Injectables</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium">Dysport</span>
                    <p className="text-xs text-muted-foreground">First time client</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-lg">$6 / unit</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium">Botox</span>
                    <p className="text-xs text-muted-foreground">First time client</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-lg">$10 / unit</span>
                </div>
              </div>
            </div>

            {/* Weight Management */}
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-6">Weight Management</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium">Mounjaro (tirzepatide)</span>
                    <p className="text-xs text-muted-foreground">Month-long treatment</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-lg">$999</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium">Wegovy (semaglutide)</span>
                    <p className="text-xs text-muted-foreground">Month-long treatment</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-lg">$1199</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium">Ozempic</span>
                    <p className="text-xs text-muted-foreground">50% discount for first 6 months</p>
                  </div>
                  <span className="text-muted-foreground text-sm italic">Contact for pricing</span>
                </div>
              </div>
            </div>

            {/* IV Therapy */}
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-6">IV Therapy</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium">Basic Hydration</span>
                    <p className="text-xs text-muted-foreground">Sodium chloride solution</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-lg">$120</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium">Advanced Hydration</span>
                    <p className="text-xs text-muted-foreground">Balanced crystalloids with electrolytes</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-lg">$170</span>
                </div>
              </div>
            </div>

            {/* Coming Soon Services */}
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-6">
                Additional Services <span className="text-sm text-muted-foreground font-sans">(Coming Soon)</span>
              </h3>
              <div className="p-6 bg-muted rounded-lg border border-border">
                <p className="text-muted-foreground text-center mb-3">
                  Fillers, laser therapy, microneedling, and chemical peels will be available soon.
                </p>
                <p className="text-muted-foreground text-center text-sm">
                  Check back for updates on our expanding service menu.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Note */}
          <div className="text-center mb-16 p-6 bg-white rounded-lg border border-border">
            <p className="text-muted-foreground text-sm">
              If you don't see what you're looking for, feel free to reach out about additional product and service
              availability.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Ready to book your visit or ask a question?</p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-sol-brown hover:bg-sol-orange text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-4">
            © 2025 <span className="font-bold italic">Sol</span> MedSpa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
