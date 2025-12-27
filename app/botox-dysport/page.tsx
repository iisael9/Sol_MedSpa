import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Clock, Shield, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Botox & Dysport Treatments | Mobile Injections in Los Angeles",
  description:
    "Professional Botox and Dysport treatments delivered to your home in Los Angeles & Riverside County. Smooth wrinkles and fine lines with our mobile medical spa service.",
  alternates: {
    canonical: "/botox-dysport",
  },
}

export default function BotoxDysportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sol-cream-bg to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Botox & Dysport Treatments",
            description:
              "Professional Botox and Dysport anti-wrinkle injectable treatments for smoothing fine lines and wrinkles",
            procedureType: "Cosmetic Injection",
            medicationUsed: ["Botox", "Dysport"],
            provider: {
              "@type": "MedicalBusiness",
              name: "Sol Medspa",
              areaServed: "Los Angeles, Riverside County & Surrounding Areas",
            },
          }),
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sol-brown/10 mb-6">
            <Sparkles className="w-10 h-10 text-sol-brown" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">Botox & Dysport</h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Smooth wrinkles and fine lines for a refreshed, youthful appearance with our premium injectable treatments
          </p>
        </div>
      </section>

      {/* What Are They Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">What Are Botox & Dysport?</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Botox and Dysport are FDA-approved neurotoxin treatments that temporarily reduce the appearance of
                facial wrinkles and fine lines. Both work by relaxing the muscles that cause dynamic wrinkles, giving
                you a smoother, more youthful appearance.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                These treatments are most effective for forehead lines, crow's feet, frown lines between the eyebrows,
                and other expression lines. Results are natural-looking and can last 3-4 months.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sol-orange mt-1 flex-shrink-0" />
                  <p className="text-stone-600">Quick, minimally invasive procedure</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sol-orange mt-1 flex-shrink-0" />
                  <p className="text-stone-600">Visible results within 3-7 days</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sol-orange mt-1 flex-shrink-0" />
                  <p className="text-stone-600">No downtime required</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sol-orange mt-1 flex-shrink-0" />
                  <p className="text-stone-600">Natural-looking, refreshed appearance</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/face-01.jpg"
                alt="Woman with smooth, youthful skin after Botox treatment"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-12 text-center">
            Why Choose Botox or Dysport?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sol-cream-bg mb-4">
                <Clock className="w-8 h-8 text-sol-brown" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">Quick Treatment</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Most sessions take just 10-20 minutes with no downtime, making it easy to fit into your busy schedule
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sol-cream-bg mb-4">
                <Shield className="w-8 h-8 text-sol-brown" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">Safe & Proven</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                FDA-approved treatments with decades of safety data, administered by experienced professionals
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sol-cream-bg mb-4">
                <Sparkles className="w-8 h-8 text-sol-brown" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">Natural Results</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Subtle enhancements that let your natural beauty shine through without looking "overdone"
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-sol-cream-bg to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Have Questions?</h2>
          <p className="text-xl text-stone-600 mb-8">
            Our team is here to help you understand your treatment options and create a personalized plan
          </p>
          <Link href="/contact">
            <Button className="px-8 py-6 text-lg text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-sol-brown hover:bg-sol-brown-dark">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
