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
    <div className="min-h-screen" style={{ backgroundColor: "#F5F1EB" }}>
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-stone-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Sol MedSpa Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                <Sun className="w-6 h-6 text-amber-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-stone-800 font-serif text-xl font-bold tracking-wide">Sol MedSpa</span>
                <span className="text-stone-500 text-xs font-light tracking-wider hidden sm:block">
                  Radiant Skin. Reimagined.
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <nav className="hidden md:flex items-center space-x-1">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("hero")}
                className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("experience")}
                className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("why-choose")}
                className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
              >
                Why Sol
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("gallery")}
                className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full transition-all duration-200"
              >
                Gallery
              </Button>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <Button
                className="hidden sm:flex items-center px-6 py-2 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                style={{ backgroundColor: "#C4956C" }}
                onClick={() => scrollToSection("hero")}
              >
                Get Notified
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="md:hidden text-stone-600 hover:text-stone-800 hover:bg-stone-100 p-2 rounded-full"
                onClick={() => scrollToSection("about")}
              >
                <ChevronDown className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative px-4 py-12 md:py-20 overflow-hidden mt-20">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-serif text-stone-800 mb-6 leading-tight">
                Radiant Skin.
                <span className="block" style={{ color: "#E55B13" }}>
                  Reimagined.
                </span>
              </h2>

              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
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
                    className="flex-1 h-12 border-stone-300 focus:border-stone-500 focus:ring-stone-200 bg-white"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 px-8 text-white font-medium shadow-lg disabled:opacity-50 hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#C4956C" }}
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
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 shadow-2xl">
                <Image
                  src="/images/hero-main-treatment.jpeg"
                  alt="Beautiful woman receiving spa treatment"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sol Medspa */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif text-stone-800 mb-8">About Sol Medspa</h3>

          <p className="text-lg text-stone-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Sol Medspa blends modern science with luxurious treatments to bring out your natural glow. We're getting
            ready to offer skincare, injectables, and self-care designed around you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Facials & Peels", "Botox & Fillers", "Laser Treatments", "Skin Rejuvenation"].map((treatment, index) => (
              <Card key={index} className="border-stone-200 hover:border-stone-300 transition-colors bg-stone-50/50">
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#C4956C20" }}
                  >
                    <Sparkles className="w-6 h-6" style={{ color: "#C4956C" }} />
                  </div>
                  <h4 className="font-medium text-stone-800">{treatment}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Luxury Redefined */}
      <section id="experience" className="py-16 px-4" style={{ backgroundColor: "#F5F1EB" }}>
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
            </div>

            <div className="lg:pl-8">
              <h3 className="text-3xl font-serif text-stone-800 mb-6">Experience Luxury Redefined</h3>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Step into a world where cutting-edge technology meets serene luxury. Our state-of-the-art facility is
                designed to provide you with the ultimate in comfort and results.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                From our carefully curated treatment rooms to our advanced equipment, every detail has been thoughtfully
                selected to ensure your experience exceeds expectations.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#C4956C" }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700">Premium treatment suites</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#C4956C" }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700">Advanced medical-grade equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#C4956C" }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700">Personalized consultation process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sol */}
      <section id="why-choose" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif text-stone-800 text-center mb-12">Why Choose Sol</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#C4956C20" }}
              >
                <Sun className="w-8 h-8" style={{ color: "#C4956C" }} />
              </div>
              <h4 className="text-xl font-serif text-stone-800 mb-4">Natural Glow Treatments</h4>
              <p className="text-stone-600 leading-relaxed">
                Enhance your natural beauty with treatments designed to bring out your inner radiance.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#C4956C20" }}
              >
                <Sparkles className="w-8 h-8" style={{ color: "#C4956C" }} />
              </div>
              <h4 className="text-xl font-serif text-stone-800 mb-4">Clinically Trained Staff</h4>
              <p className="text-stone-600 leading-relaxed">
                Our expert team combines medical expertise with a passion for aesthetic excellence.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#C4956C20" }}
              >
                <Heart className="w-8 h-8" style={{ color: "#C4956C" }} />
              </div>
              <h4 className="text-xl font-serif text-stone-800 mb-4">Luxurious Experience</h4>
              <p className="text-stone-600 leading-relaxed">
                Indulge in a serene environment where every detail is crafted for your comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="gallery" className="py-16 px-4" style={{ backgroundColor: "#F5F1EB" }}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif text-stone-800 text-center mb-12">Coming Soon</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 shadow-lg hover:shadow-xl transition-shadow"
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
      <footer className="py-12 px-4" style={{ backgroundColor: "#F5F1EB" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: "#C4956C20" }}
          >
            <Sun className="w-8 h-8" style={{ color: "#C4956C" }} />
          </div>

          <h4 className="text-2xl font-serif text-stone-800 mb-2">Sol Medspa</h4>
          <p className="text-stone-600 mb-6">Launching Soon in Your City</p>

          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="ghost" size="icon" className="hover:bg-white/20" style={{ color: "#C4956C" }}>
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/20" style={{ color: "#C4956C" }}>
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/20" style={{ color: "#C4956C" }}>
              <Twitter className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-stone-500">© 2025 Sol Medspa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
