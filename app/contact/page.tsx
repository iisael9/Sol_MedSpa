"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram, Facebook, Calendar, ExternalLink } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage({ type: "success", text: "Message sent successfully! We'll be in touch soon." })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
        })
      } else {
        setSubmitMessage({ type: "error", text: data.message || "Something went wrong. Please try again." })
      }
    } catch (error) {
      setSubmitMessage({ type: "error", text: "Failed to send message. Please try again later." })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(null), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-sol-cream-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-6">Let's Work Together</h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Ready to experience radiant, rejuvenated skin? Get in touch to discuss your aesthetic goals and let's create
            something beautiful together.
          </p>
        </div>
      </section>

      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-stone-50 to-stone-100 border-stone-200 shadow-xl p-8 md:p-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-sol-brown-alpha-20">
                <Calendar className="w-10 h-10 text-sol-brown" />
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">Ready to Transform Your Look?</h2>

              <p className="text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Book your appointment directly through our secure Square booking system. Choose your preferred date,
                time, and service package in just a few clicks.
              </p>

              <a
                href="https://app.squareup.com/appointments/book/9cjimearmu7iz4/LM76T0GTP6A6G/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-sol-brown text-white font-semibold rounded-xl shadow-lg hover:bg-sol-brown-dark hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                <span>Book A Session</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-sm text-stone-500 mt-6">Instant confirmation • Secure payment • Easy rescheduling</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border-stone-200 shadow-lg p-8">
              <h2 className="text-3xl font-serif text-stone-800 mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="border-stone-300 focus:border-stone-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="border-stone-300 focus:border-stone-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-stone-300 focus:border-stone-500"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-stone-300 focus:border-stone-500"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-stone-700 mb-2">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 bg-white text-stone-900"
                  >
                    <option value="">Select a service</option>
                    <option value="botox-dysport">Botox & Dysport</option>
                    <option value="glp1">GLP-1 Inhibitors</option>
                    <option value="botox-party">Botox Party Experience</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your aesthetic goals..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="border-stone-300 focus:border-stone-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-white font-medium shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50 bg-sol-brown hover:bg-sol-brown-dark"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Submit Message */}
                {submitMessage && (
                  <p
                    className={`text-sm text-center ${
                      submitMessage.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {submitMessage.text}
                  </p>
                )}
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <Card className="bg-white border-stone-200 shadow-lg p-8">
                <h2 className="text-3xl font-serif text-stone-800 mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-sol-brown-alpha-20">
                      <Mail className="w-6 h-6 text-sol-brown" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Email</h3>
                      <a
                        href="mailto:contact@sol-medspa.com"
                        className="text-stone-600 hover:text-sol-brown transition-colors underline"
                      >
                        contact@sol-medspa.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-sol-brown-alpha-20">
                      <Phone className="w-6 h-6 text-sol-brown" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Phone</h3>
                      <a
                        href="tel:+13108762788"
                        className="text-stone-600 hover:text-sol-brown transition-colors underline"
                      >
                        +1 (310)-876-2788
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-sol-brown-alpha-20">
                      <MapPin className="w-6 h-6 text-sol-brown" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Location</h3>
                      <p className="text-stone-600">Serving Los Angeles & Surrounding Areas</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="bg-white border-stone-200 shadow-lg p-8">
                <h3 className="text-xl font-serif text-stone-800 mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://www.instagram.com/sol.medspa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-100 text-sol-brown hover:text-sol-brown-dark transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61584058650535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-stone-100 text-sol-brown hover:text-sol-brown-dark transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="bg-white border-stone-200 shadow-lg p-8">
                <h3 className="text-xl font-serif text-stone-800 mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-stone-700">
                    <span>Monday - Friday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between text-stone-700">
                    <span>Saturday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between text-stone-700">
                    <span>Sunday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
