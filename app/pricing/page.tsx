"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Sparkles, Sun } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F1EB" }}>
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
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Treatment Menu & Pricing
            </h2>
            <p className="text-stone-600 mb-4">Injectables & Aesthetic Enhancements</p>
            <p className="text-stone-500 text-sm max-w-3xl mx-auto mb-6">
              All treatments are performed by licensed medical professionals. Prices may vary based on specific needs or choice of products.
            </p>
            <div className="w-16 h-px bg-stone-300 mx-auto mb-6" />
            <p className="text-stone-700 italic font-serif text-lg">Where Skin Meets Soul</p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Anti-Wrinkle */}
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-6">Anti-Wrinkle</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <span className="text-stone-700">Dysport</span>
                  <span className="text-stone-500">Coming Soon</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <span className="text-stone-700">Botox</span>
                  <span className="text-stone-500">Coming Soon</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <span className="text-stone-700">Hyperhidrosis Treatment</span>
                  <span className="text-stone-500">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* GLP-1 & Wellness */}
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-6">Wellness & Weight Management</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <span className="text-stone-700">GLP-1 Inhibitors</span>
                  <span className="text-stone-500">Available upon request</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <span className="text-stone-700">B12 Injections</span>
                  <span className="text-stone-500">Available upon request</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <span className="text-stone-700">IV Hydration</span>
                  <span className="text-stone-500">Available upon request</span>
                </div>
              </div>
            </div>

            {/* Fillers */}
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-6">
                Fillers <span className="text-sm text-stone-500 font-sans">(Coming Soon)</span>
              </h3>
              <div className="p-6 bg-stone-50 rounded-lg border border-stone-200">
                <p className="text-stone-600 text-center">
                  Lip, cheek, and facial fillers will be available soon. Stay tuned for our comprehensive filler menu.
                </p>
              </div>
            </div>

            {/* Skin Treatments */}
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-6">
                Skin Treatments <span className="text-sm text-stone-500 font-sans">(Coming Soon)</span>
              </h3>
              <div className="p-6 bg-stone-50 rounded-lg border border-stone-200">
                <p className="text-stone-600 text-center">
                  Laser therapy, microneedling, and chemical peels will be available soon. Check back for updates.
                </p>
              </div>
            </div>
          </div>

          {/* Packages */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-stone-800 mb-6">Signature Packages</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-stone-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-stone-800 mb-2">Sol Signature Glow Package</h4>
                    <p className="text-stone-600 text-sm">3 comprehensive treatment sessions</p>
                  </div>
                  <span className="text-2xl font-semibold" style={{ color: "#C4956C" }}>$3000</span>
                </div>
              </Card>
              <Card className="p-6 bg-white border-stone-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-stone-800 mb-2">PRF Treatment Package</h4>
                    <p className="text-stone-600 text-sm">3 PRF injection sessions</p>
                  </div>
                  <span className="text-2xl font-semibold" style={{ color: "#C4956C" }}>$2500</span>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-stone-600 mb-6">Ready to book your visit or ask a question?</p>
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: "#C4956C" }}
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto text-center text-stone-600">
          <p className="mb-4">© 2025 Sol MedSpa. All rights reserved.</p>
          <p className="text-sm text-stone-500">Coming Soon to Your Neighborhood</p>
        </div>
      </footer>
    </div>
  )
}
