"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Instagram, Facebook, Twitter, HomeIcon, Star, X } from "lucide-react"
import Image from "next/image"
import { submitEmail } from "./actions/email"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [showComingSoonModal, setShowComingSoonModal] = useState(false)

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

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

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
    <div className="min-h-screen bg-sol-cream-bg">
      {/* Header Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-serif text-stone-800 mb-6 leading-tight">
                Radiant Skin.
                <span className="block text-sol-orange">Reimagined.</span>
              </h2>
              <p className="text-2xl md:text-3xl font-serif mb-6 text-sol-brown">Host the glow</p>

              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                <span className="font-bold italic">Sol</span> Medspa - elevate your glow, in the comfort of your home.
                Host your own botox party.
              </p>

              {/* Book a Session Button */}
              <div className="flex justify-center lg:justify-start">
                <Link href="/contact">
                  <Button className="h-14 px-10 text-lg text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 bg-sol-brown hover:bg-sol-brown-dark">
                    Book a Session
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 shadow-2xl">
                <Image
                  src="/images/design-mode/v0_image-2.png"
                  alt="Luxury medspa beauty party at home - male doctor providing gentle skin consultation to woman while two friends chat in elegant modern living room with warm beige tones"
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

      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif text-stone-800 mb-8">Our Services</h3>

          <p className="text-lg text-stone-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold italic">Sol</span> Medspa offers premium aesthetic treatments designed to enhance
            your natural beauty with the highest standards of care and expertise.
          </p>

          {/* Core Services */}
          <div className="mb-12">
            <h4 className="text-xl font-serif text-stone-800 mb-6">Core Services</h4>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="border-stone-200 hover:border-stone-300 transition-colors bg-stone-50/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-sol-brown-alpha-20">
                    <Sparkles className="w-6 h-6 text-sol-brown" />
                  </div>
                  <h4 className="font-medium text-stone-800 mb-2">Botox & Dysport</h4>
                  <p className="text-sm text-stone-600">
                    Smooth wrinkles and fine lines for a refreshed, youthful appearance
                  </p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 hover:border-stone-300 transition-colors bg-stone-50/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-sol-brown-alpha-20">
                    <Sparkles className="w-6 h-6 text-sol-brown" />
                  </div>
                  <h4 className="font-medium text-stone-800 mb-2">GLP-1 Inhibitors</h4>
                  <p className="text-sm text-stone-600">Available upon request</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 hover:border-stone-300 transition-colors bg-gradient-to-br from-stone-50/80 to-amber-50/30 relative overflow-hidden">
                <CardContent className="p-6 text-center relative z-10">
                  {/* Party Discount Badge */}
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold text-white shadow-sm bg-sol-orange">
                    Group Discounts
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-sol-brown-alpha-20">
                    <Heart className="w-6 h-6 text-sol-brown" />
                  </div>
                  <h4 className="font-medium text-stone-800 mb-2">Botox Party Experience</h4>
                  <p className="text-sm text-stone-600 mb-3">Host a private Botox party at home with friends</p>
                  <p className="text-xs font-semibold text-sol-brown">Special pricing for groups of 3+</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Coming Soon Services */}
          <div>
            <h4 className="text-xl font-serif text-stone-800 mb-6">Coming Soon</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-stone-200 bg-stone-50/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-sol-brown-alpha-10">
                    <Sparkles className="w-6 h-6 text-stone-400" />
                  </div>
                  <h4 className="font-medium text-stone-700 mb-2">Lip Fillers</h4>
                  <p className="text-sm text-stone-500">Enhanced lip treatments</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 bg-stone-50/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-sol-brown-alpha-10">
                    <Sparkles className="w-6 h-6 text-stone-400" />
                  </div>
                  <h4 className="font-medium text-stone-700 mb-2">Laser Therapy</h4>
                  <p className="text-sm text-stone-500">Advanced skin rejuvenation</p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 bg-stone-50/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-sol-brown-alpha-10">
                    <HomeIcon className="w-6 h-6 text-stone-400" />
                  </div>
                  <h4 className="font-medium text-stone-700 mb-2">In-Home Treatments</h4>
                  <p className="text-sm text-stone-500">We bring the med spa to you</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="concierge-experience" className="py-16 px-4 bg-sol-cream-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-stone-800 mb-6">Concierge Experience</h3>
            <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto mb-4">
              We bring the luxury medical spa experience directly to your home.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
              Experience comfort, safety, and convenience with our mobile concierge service—premium treatments in the
              privacy of your own space.
            </p>
          </div>

          {/* Image + Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/spa-interior-treatment-room.jpeg"
                  alt="Professional treatment setup"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:pl-8">
              <h4 className="text-2xl font-serif text-stone-800 mb-6">Why Choose Our Concierge Model</h4>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Our mobile spa model brings professional, medical-grade treatments to the comfort and safety of your
                home. No travel, no waiting rooms—just pure relaxation and results.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-sol-brown">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700">Fully licensed and insured treatments in your home</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-sol-brown">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700">Personalized care in a comfortable, private setting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-sol-brown">
                    <Image
                      src="/images/sol-logo-icon.svg"
                      alt="Sol MedSpa Logo"
                      width={16}
                      height={16}
                      className="w-4 h-4 brightness-0 invert"
                    />
                  </div>
                  <span className="text-stone-700">Medical-grade equipment and premium products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-sol-brown">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700">Flexible scheduling that fits your lifestyle</span>
                </div>
              </div>

              <p className="text-stone-600 italic">
                "Experience the future of aesthetic care—where luxury meets convenience, right at your doorstep."
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-2xl font-serif text-stone-800 text-center mb-8">Client Testimonials</h4>

            <div className="max-w-4xl mx-auto">
              <Card className="border-stone-200 shadow-xl bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Before/After Slider */}
                    <div
                      className="relative aspect-square rounded-lg overflow-hidden select-none cursor-ew-resize"
                      onMouseDown={handleMouseDown}
                      onMouseUp={handleMouseUp}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseUp}
                      onTouchStart={handleMouseDown}
                      onTouchEnd={handleMouseUp}
                      onTouchMove={handleTouchMove}
                    >
                      {/* Before Image */}
                      <div className="absolute inset-0">
                        <Image
                          src="/woman-with-forehead-wrinkles-before-treatment.jpg"
                          alt="Before treatment"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Before
                        </div>
                      </div>

                      {/* After Image with clip path */}
                      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                        <Image
                          src="/same-woman-with-smooth-forehead-after-botox-treatm.jpg"
                          alt="After treatment"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                          After
                        </div>
                      </div>

                      {/* Slider Handle */}
                      <div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-sol-brown">
                          <div className="flex gap-0.5">
                            <div className="w-0.5 h-4 bg-white rounded"></div>
                            <div className="w-0.5 h-4 bg-white rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div>
                      <div className="flex mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-lg text-stone-700 mb-6 leading-relaxed italic">
                        "The results are incredible! I love that I could have the treatment done in the comfort of my
                        own home. Dr. Vasquez was so professional and made me feel completely at ease. I can't wait for
                        my next appointment!"
                      </p>
                      <div>
                        <p className="font-semibold text-stone-800">Sarah M.</p>
                        <p className="text-sm text-stone-600">Botox Treatment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-2xl font-serif text-stone-800 text-center mb-8">Why Choose Us</h4>

            <div className="max-w-4xl mx-auto">
              <Card className="border-stone-200 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Doctor Image */}
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-stone-100">
                      <Image
                        src="/professional-male-doctor-in-white-coat-medical-set.jpg"
                        alt="Dr. Juan Vasquez"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Doctor Info */}
                    <div>
                      <h5 className="text-2xl font-serif text-stone-800 mb-2">
                        <span className="font-bold italic">Sol</span> Medspa
                      </h5>
                      <p className="text-lg mb-6 text-sol-brown">Board-Certified Aesthetic Physician</p>

                      <p className="text-stone-700 mb-4 leading-relaxed">
                        With over 10 years of experience in aesthetic medicine, Dr. Vasquez brings expertise, precision,
                        and artistry to every treatment.
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sol-brown">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-stone-700">
                            Board-certified with extensive training in injectables and aesthetic procedures
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sol-brown">
                            <Heart className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-stone-700">
                            Personalized treatment plans tailored to your unique beauty goals
                          </span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sol-brown">
                            <Image
                              src="/images/sol-logo-icon.svg"
                              alt="Sol MedSpa Logo"
                              width={16}
                              height={16}
                              className="w-4 h-4 brightness-0 invert"
                            />
                          </div>
                          <span className="text-stone-700">
                            Committed to natural-looking results that enhance your confidence
                          </span>
                        </div>
                      </div>

                      <p className="text-stone-600 italic">
                        "My mission is to help you look and feel your absolute best, with treatments that bring out your
                        natural radiance."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">Ready to Transform Your Look?</h3>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            Experience the <span className="font-bold italic">Sol</span> Medspa difference. Book your consultation
            today.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-10 text-lg text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 bg-sol-brown hover:bg-sol-brown-dark"
            >
              Book a Session Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-sol-cream-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <Image
              src="/images/sol-logo-icon.svg"
              alt="Sol MedSpa Logo"
              width={160}
              height={160}
              className="w-40 h-40 opacity-100"
            />
          </div>

          <h4 className="text-2xl font-serif text-stone-800 mb-2">
            <span className="font-bold italic">Sol</span> Medspa
          </h4>
          <p className="text-stone-600 mb-6">Launching Soon in Your City</p>

          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://www.instagram.com/sol.medspa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 text-sol-brown hover:text-sol-brown-dark transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61584058650535"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 text-sol-brown hover:text-sol-brown-dark transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <Button variant="ghost" size="icon" className="hover:bg-white/20 text-sol-brown hover:text-sol-brown-dark">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-stone-500">
            © 2025 <span className="font-bold italic">Sol</span> Medspa. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Coming Soon Modal */}
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
              <div className="flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/sol-logo-icon.svg"
                  alt="Sol MedSpa Logo"
                  width={120}
                  height={120}
                  className="w-30 h-30"
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
    </div>
  )
}
