"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Instagram, Facebook, Twitter, X } from "lucide-react"
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
      <section className="relative pt-32 pb-20 px-4 lg:bg-none bg-cover bg-center bg-[url('/images/design-mode/v0_image-2.png')]">
        <div className="absolute inset-0 bg-black/40 lg:hidden"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-serif lg:text-stone-800 text-white mb-6 leading-tight">
                Radiant Skin.
                <span className="block text-sol-orange">Reimagined.</span>
              </h2>
              <p className="text-2xl md:text-3xl font-serif mb-6 lg:text-sol-brown text-white">Host the glow</p>

              <p className="text-xl lg:text-stone-600 text-white mb-8 leading-relaxed">
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

            <div className="relative hidden lg:block">
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

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-serif text-stone-800 mb-12 text-center">Our Services</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Botox Party Experience */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/luxurious-home-botox-party-friends-enjoying-treatm.jpg"
                alt="Botox Party Experience"
                width={450}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Default State - Title Only */}
              <div className="absolute inset-0 flex items-end justify-center p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-2xl font-serif text-white text-center">Botox Party Experience</h4>
              </div>

              {/* Hover State - Details */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                <h4 className="text-2xl font-serif text-white mb-4 text-center">Botox Party Experience</h4>
                <ul className="text-white text-sm space-y-2 text-center">
                  <li>Host a private party at home</li>
                  <li>Bring friends & family</li>
                  <li>Special group pricing (3+ guests)</li>
                  <li>Professional, comfortable setting</li>
                </ul>
              </div>
            </div>

            {/* Botox & Dysport */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/professional-botox-injection-treatment-medical-aes.jpg"
                alt="Botox & Dysport"
                width={450}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Default State - Title Only */}
              <div className="absolute inset-0 flex items-end justify-center p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-2xl font-serif text-white text-center">Injectables</h4>
              </div>

              {/* Hover State - Details */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                <h4 className="text-2xl font-serif text-white mb-4 text-center">Injectables</h4>
                <ul className="text-white text-sm space-y-2 text-center">
                  <li>Botox & Dysport</li>
                  <li>Smooth wrinkles & fine lines</li>
                  <li>Natural, refreshed appearance</li>
                  <li>Quick, comfortable treatment</li>
                </ul>
              </div>
            </div>

            {/* GLP-1 Inhibitors */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/wellness-weight-management-medical-professional-co.jpg"
                alt="GLP-1 Inhibitors"
                width={450}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Default State - Title Only */}
              <div className="absolute inset-0 flex items-end justify-center p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-2xl font-serif text-white text-center">Weight Management</h4>
              </div>

              {/* Hover State - Details */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                <h4 className="text-2xl font-serif text-white mb-4 text-center">Weight Management</h4>
                <ul className="text-white text-sm space-y-2 text-center">
                  <li>GLP-1 Inhibitors</li>
                  <li>Medically supervised program</li>
                  <li>Available upon request</li>
                  <li>Personalized treatment plans</li>
                </ul>
              </div>
            </div>

            {/* Coming Soon - Skin Care */}
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/luxurious-facial-skin-care-treatment-spa.jpg"
                alt="Skin Care"
                width={450}
                height={600}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-sol-orange shadow-lg">
                Coming Soon
              </div>

              {/* Default State - Title Only */}
              <div className="absolute inset-0 flex items-end justify-center p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-2xl font-serif text-white text-center">Skin Care</h4>
              </div>

              {/* Hover State - Details */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                <h4 className="text-2xl font-serif text-white mb-4 text-center">Skin Care</h4>
                <ul className="text-white text-sm space-y-2 text-center">
                  <li>Advanced facial treatments</li>
                  <li>Medical-grade products</li>
                  <li>Customized skincare plans</li>
                  <li>Launching soon</li>
                </ul>
              </div>
            </div>
          </div>
          {/* </CHANGE> */}
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
                  src="/concierge-home-luxury-medspa-treatment.jpg"
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

              <div className="space-y-4 mb-6">
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

          <div className="mt-16"></div>

          <div className="mt-16" id="about">
            <h4 className="text-2xl font-serif text-stone-800 text-center mb-8">Why Choose Us</h4>

            <div className="max-w-4xl mx-auto">
              <Card className="border-stone-200 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Doctor Image */}
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-stone-100">
                      <Image
                        src="/images/dr-vasquez-portrait.png"
                        alt="Dr. Juan Vasquez Vasquez"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Doctor Info */}
                    <div>
                      <h5 className="text-2xl font-serif text-stone-800 mb-1">Juan Vasquez Vasquez, MD</h5>
                      <p className="text-lg mb-4 text-sol-brown">Board-Certified Aesthetic Physician</p>

                      <p className="text-stone-700 mb-6 leading-relaxed">
                        A California Medical Board certified provider with over half a decade of experience in aesthetic
                        procedures, Dr. Vasquez Vasquez brings expertise, precision, and artistry to every treatment. He
                        provides high quality, affordable, and personalized treatment plans tailored to your unique
                        beauty goals.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="font-semibold text-stone-800">University of California, Berkeley</p>
                          <p className="text-sm text-stone-600">Bachelor of Arts - BA, Integrative Biology</p>
                          <p className="text-xs text-stone-500">Jan 2011 - Jun 2015</p>
                        </div>
                        <div>
                          <p className="font-semibold text-stone-800">
                            University of California San Francisco School of Medicine
                          </p>
                          <p className="text-sm text-stone-600">Doctor of Medicine</p>
                          <p className="text-xs text-stone-500">Jul 2017 - Jun 2021</p>
                        </div>
                        <div>
                          <p className="font-semibold text-stone-800">New York University School of Medicine</p>
                          <p className="text-sm text-stone-600">Emergency Medicine Residency Program</p>
                          <p className="text-xs text-stone-500">Jul 2021 - Jun 2025</p>
                        </div>
                      </div>
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
