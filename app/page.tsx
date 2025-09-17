"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Sparkles, Heart, Instagram, Facebook, Twitter, Menu } from "lucide-react"
import Image from "next/image"

export default function SolMedspaLanding() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50/30">
      {/* Header Navigation */}
      <header className="bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sun className="w-6 h-6 text-white" />
            <span className="text-white font-serif text-xl">Sol MedSpa</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-yellow-100 transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-yellow-100 transition-colors">
              About
            </a>
            <a href="#" className="text-white hover:text-yellow-100 transition-colors">
              Experience
            </a>
            <a href="#" className="text-white hover:text-yellow-100 transition-colors">
              Why Sol
            </a>
            <a href="#" className="text-white hover:text-yellow-100 transition-colors">
              Gallery
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
                Radiant Skin.
                <br />
                <span className="text-orange-600">Reimagined.</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sol Medspa is coming soon – your oasis for rejuvenation and wellness.
              </p>

              {/* Email Capture */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email to be the first to know"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 border-yellow-200 focus:border-yellow-400 focus:ring-yellow-200"
                  />
                  <Button
                    type="submit"
                    className="h-12 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium"
                  >
                    Notify Me
                  </Button>
                </div>
                {isSubmitted && (
                  <p className="text-green-600 text-sm mt-2 text-center lg:text-left">
                    Thank you! We'll notify you when we launch.
                  </p>
                )}
              </form>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://v0-pre-landing-page-sol-med-spa.vercel.app/_next/image?url=%2Fimages%2Fhero-main-treatment.jpeg&w=828&q=75"
                  alt="Beautiful woman receiving spa treatment"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sol Medspa */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-gray-800 mb-8">About Sol Medspa</h2>

          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Sol Medspa blends modern science with luxurious treatments to bring out your natural glow. We're getting
            ready to offer skincare, injectables, and self-care designed around you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Facials & Peels", icon: "✨" },
              { name: "Botox & Fillers", icon: "💉" },
              { name: "Laser Treatments", icon: "⚡" },
              { name: "Skin Rejuvenation", icon: "🌟" },
            ].map((treatment, index) => (
              <Card key={index} className="border-yellow-100 hover:border-yellow-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{treatment.icon}</div>
                  <h3 className="font-medium text-gray-800">{treatment.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Luxury Redefined */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50/50 to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://v0-pre-landing-page-sol-med-spa.vercel.app/_next/image?url=%2Fimages%2Fspa-interior-treatment-room.jpeg&w=1200&q=75"
                  alt="Spa interior or treatment room"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:pl-8">
              <h2 className="text-3xl font-serif text-gray-800 mb-6">Experience Luxury Redefined</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Step into a world where cutting-edge technology meets serene luxury. Our state-of-the-art facility is
                designed to provide you with the ultimate in comfort and results.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From our carefully curated treatment rooms to our advanced equipment, every detail has been thoughtfully
                selected to ensure your experience exceeds expectations.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Premium treatment suites</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Advanced medical-grade equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Personalized consultation process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sol */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 text-center mb-12">Why Choose Sol</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Natural Glow Treatments</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhance your natural beauty with treatments designed to bring out your inner radiance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Clinically Trained Staff</h3>
              <p className="text-gray-600 leading-relaxed">
                Our expert team combines medical expertise with a passion for aesthetic excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Luxurious Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Indulge in a serene environment where every detail is crafted for your comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Gallery */}
      <section className="py-16 px-4 bg-gradient-to-b from-yellow-50/30 to-orange-50/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 text-center mb-12">Coming Soon</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "https://v0-pre-landing-page-sol-med-spa.vercel.app/_next/image?url=%2Fimages%2Fgallery-spa-relaxation.jpeg&w=828&q=75",
                alt: "Luxury spa relaxation area",
              },
              {
                src: "https://v0-pre-landing-page-sol-med-spa.vercel.app/_next/image?url=%2Fimages%2Fgallery-laser-treatment.jpeg&w=828&q=75",
                alt: "Modern laser treatment equipment",
              },
              {
                src: "https://v0-pre-landing-page-sol-med-spa.vercel.app/_next/image?url=%2Fimages%2Fgallery-facial-treatment.jpeg&w=828&q=75",
                alt: "Professional facial treatment",
              },
            ].map((image, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white text-lg font-medium bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full mb-6">
            <Sun className="w-8 h-8 text-orange-600" />
          </div>

          <h3 className="text-2xl font-serif text-gray-800 mb-2">Sol Medspa</h3>
          <p className="text-gray-600 mb-6">Launching Soon in Your City</p>

          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="ghost" size="icon" className="text-orange-600 hover:text-orange-700 hover:bg-yellow-100">
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-orange-600 hover:text-orange-700 hover:bg-yellow-100">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-orange-600 hover:text-orange-700 hover:bg-yellow-100">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-gray-500">© 2024 Sol Medspa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
