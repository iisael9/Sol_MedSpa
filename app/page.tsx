"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Sparkles, Heart, Instagram, Facebook, Twitter, ChevronDown } from "lucide-react"
import Image from "next/image"
import { submitEmail } from "./actions/email"

export default function SolMedspaLanding() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData()
    formData.append("email", email)

    try {
      const result = await submitEmail(formData)

      if (result.success) {
        setMessage({ type: "success", text: result.message })
        setEmail("")
      } else {
        setMessage({ type: "error", text: result.message })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)

      // Clear message after 5 seconds
      setTimeout(() => setMessage(null), 5000)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50/60 via-orange-50/30 to-white">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-400/95 via-orange-400/95 to-rose-400/95 backdrop-blur-md border-b border-yellow-200/50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Sol MedSpa Logo */}
            <div className="flex items-center bg-gradient-to-r from-yellow-500/90 to-amber-500/90 px-6 py-2 rounded-xl backdrop-blur-sm border border-yellow-300/40 shadow-lg">
              <Image
                src="/images/sol-logo.svg"
                alt="Sol MedSpa Logo"
                width={280}
                height={168}
                className="h-16 w-auto mr-4"
              />
              <div className="flex flex-col">
                <span className="text-white font-serif text-3xl font-bold tracking-wide bg-gradient-to-r from-yellow-200 to-orange-100 bg-clip-text text-transparent drop-shadow-lg">
                  Sol MedSpa
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <nav className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("hero")}
                className="text-white hover:bg-white/20 hover:text-white font-medium px-4 py-2"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-white hover:bg-white/20 hover:text-white font-medium px-4 py-2"
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("experience")}
                className="text-white hover:bg-white/20 hover:text-white font-medium px-4 py-2"
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("why-choose")}
                className="text-white hover:bg-white/20 hover:text-white font-medium px-4 py-2"
              >
                Why Sol
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("gallery")}
                className="text-white hover:bg-white/20 hover:text-white font-medium px-4 py-2"
              >
                Gallery
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden text-white hover:bg-white/20"
              onClick={() => scrollToSection("about")}
            >
              <ChevronDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative px-4 py-12 md:py-20 overflow-hidden mt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/60 via-orange-50/40 to-rose-100/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Logo */}
          <div className="text-center mb-12"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
                Radiant Skin.
                <span className="block text-orange-600">Reimagined.</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
                    disabled={isSubmitting}
                    className="flex-1 h-12 border-yellow-200 focus:border-yellow-400 focus:ring-yellow-200 bg-white/80 backdrop-blur-sm"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 px-8 bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white font-medium shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Notify Me"}
                  </Button>
                </div>
                {message && (
                  <p
                    className={`text-sm mt-2 text-center lg:text-left ${
                      message.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {message.text}
                  </p>
                )}
              </form>
            </div>

            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-200 to-orange-300 shadow-2xl">
                <Image
                  src="/images/hero-main-treatment.jpeg"
                  alt="Beautiful woman receiving spa treatment"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Floating Secondary Images */}
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-yellow-300/60 rounded-full blur-sm"></div>
              <div className="absolute top-1/2 -right-2 w-6 h-6 bg-orange-300/60 rounded-full blur-sm"></div>
              <div className="absolute bottom-1/4 -left-2 w-4 h-4 bg-rose-300/60 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sol Medspa */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif text-gray-800 mb-8">About Sol Medspa</h3>

          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Sol Medspa blends modern science with luxurious treatments to bring out your natural glow. We're getting
            ready to offer skincare, injectables, and self-care designed around you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Facials & Peels", "Botox & Fillers", "Laser Treatments", "Skin Rejuvenation"].map((treatment, index) => (
              <Card key={index} className="border-yellow-100 hover:border-yellow-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-medium text-gray-800">{treatment}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Image + Info Section */}
      <section id="experience" className="py-16 px-4 bg-gradient-to-r from-yellow-50/30 to-orange-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/spa-interior-treatment-room.jpeg"
                  alt="Spa interior or treatment room"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full blur-xl opacity-60"></div>
            </div>

            <div className="lg:pl-8">
              <h3 className="text-3xl font-serif text-gray-800 mb-6">Experience Luxury Redefined</h3>
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
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Premium treatment suites</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Advanced medical-grade equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Personalized consultation process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sol */}
      <section id="why-choose" className="py-16 px-4 bg-gradient-to-b from-yellow-50/40 to-orange-50/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif text-gray-800 text-center mb-12">Why Choose Sol</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-serif text-gray-800 mb-4">Natural Glow Treatments</h4>
              <p className="text-gray-600 leading-relaxed">
                Enhance your natural beauty with treatments designed to bring out your inner radiance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-serif text-gray-800 mb-4">Clinically Trained Staff</h4>
              <p className="text-gray-600 leading-relaxed">
                Our expert team combines medical expertise with a passion for aesthetic excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-serif text-gray-800 mb-4">Luxurious Experience</h4>
              <p className="text-gray-600 leading-relaxed">
                Indulge in a serene environment where every detail is crafted for your comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="gallery" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif text-gray-800 text-center mb-12">Coming Soon</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={
                    index === 1
                      ? "/images/gallery-facial-treatment.jpeg"
                      : index === 2
                        ? "/images/gallery-laser-treatment.jpeg"
                        : "/images/gallery-spa-relaxation.jpeg"
                  }
                  alt={
                    index === 1
                      ? "Professional facial treatment"
                      : index === 2
                        ? "Modern laser treatment equipment"
                        : "Luxury spa relaxation area"
                  }
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {/* Subtle bottom gradient with coming soon text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white text-sm font-medium">Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-b from-yellow-50/30 to-orange-100/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-full mb-6">
            <Sun className="w-8 h-8 text-orange-600" />
          </div>

          <h4 className="text-2xl font-serif text-gray-800 mb-2">Sol Medspa</h4>
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

          <p className="text-sm text-gray-500">© 2025 Sol Medspa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
