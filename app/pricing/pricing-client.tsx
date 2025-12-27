"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function PricingClient() {
  return (
    <div className="min-h-screen bg-sol-cream-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            name: "Sol Medspa Treatment Pricing",
            priceCurrency: "USD",
            description: "Founders' introductory pricing for mobile medical spa services",
          }),
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="/elegant-woman-beauty-portrait-close-up-face.jpg"
            alt="Beautiful results from Sol Medspa treatments"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white text-center">
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
            <p className="text-2xl md:text-3xl font-serif text-foreground mb-4">Founders' Introductory Pricing</p>
            <p className="text-xl md:text-2xl text-foreground mb-6 font-semibold">
              Grand Opening – Founders' Introductory Pricing
            </p>
            <p className="text-foreground text-lg max-w-3xl mx-auto mb-6">
              For a limited time, enjoy Founders' Pricing during our Grand Opening. Pricing reflects up to{" "}
              <span className="text-3xl font-bold text-sol-brown">50%</span> off our future standard rates.
            </p>
            <div className="w-16 h-px bg-border mx-auto mb-6" />
            <p className="text-foreground italic font-serif text-xl">Where Skin Meets Soul</p>
          </div>

          {/* Grand Opening Bonuses */}
          <div className="mb-16 bg-sol-cream-bg border-2 border-sol-brown/20 rounded-xl p-8">
            <h3 className="text-2xl font-serif text-foreground mb-6 text-center">Additional Bonus Incentives</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-sol-brown mb-2">10%</div>
                <p className="text-muted-foreground text-base">Loyalty bonus on a returning client's second visit</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sol-brown mb-2">15%</div>
                <p className="text-muted-foreground text-base">
                  One-time referral bonus when your referral completes a session
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sol-brown mb-2">20%</div>
                <p className="text-muted-foreground text-base">
                  Group booking bonus for Botox parties of 3 or more clients
                </p>
              </div>
            </div>
            <p className="text-center text-muted-foreground text-base mt-6 italic">
              Founders' pricing is available for a limited time and will not be offered again.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Anti-Wrinkle */}
            <div className="flex flex-col">
              <h3 className="text-3xl font-serif text-foreground mb-6">Anti-Wrinkle Injectables</h3>
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium text-lg">Dysport</span>
                    <p className="text-sm text-muted-foreground">First time client</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-xl">$6 / unit</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium text-lg">Botox</span>
                    <p className="text-sm text-muted-foreground">First time client</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-xl">$10 / unit</span>
                </div>
              </div>
            </div>

            {/* Weight Management */}
            <div className="flex flex-col">
              <h3 className="text-3xl font-serif text-foreground mb-6">Weight Management</h3>
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium text-lg">Mounjaro (tirzepatide)</span>
                    <p className="text-sm text-muted-foreground">Month-long treatment</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-xl">$999</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium text-lg">Wegovy (semaglutide)</span>
                    <p className="text-sm text-muted-foreground">Month-long treatment</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-xl">$1199</span>
                </div>
              </div>
            </div>

            {/* IV Therapy */}
            <div className="flex flex-col">
              <h3 className="text-3xl font-serif text-foreground mb-6">IV Therapy</h3>
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium text-lg">Basic Hydration</span>
                    <p className="text-sm text-muted-foreground">Sodium chloride solution</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-xl">$120</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <span className="text-foreground font-medium text-lg">Advanced Hydration</span>
                    <p className="text-sm text-muted-foreground">Balanced crystalloids with electrolytes</p>
                  </div>
                  <span className="text-sol-brown font-semibold text-xl">$170</span>
                </div>
              </div>
            </div>

            {/* Coming Soon Services */}
            <div className="flex flex-col">
              <h3 className="text-3xl font-serif text-foreground mb-6">
                Additional Services <span className="text-base text-muted-foreground font-sans">(Coming Soon)</span>
              </h3>
              <div className="p-6 bg-muted rounded-lg border border-border flex-1 flex flex-col justify-center">
                <p className="text-muted-foreground text-center mb-3 text-base">
                  Fillers, laser therapy, microneedling, and chemical peels will be available soon.
                </p>
                <p className="text-muted-foreground text-center text-base">
                  Check back for updates on our expanding service menu.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Note */}
          <div className="text-center mb-16 p-6 bg-white rounded-lg border border-border">
            <p className="text-muted-foreground text-base">
              If you don't see what you're looking for, feel free to reach out about additional product and service
              availability.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6 text-lg">Ready to book your visit or ask a question?</p>
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
