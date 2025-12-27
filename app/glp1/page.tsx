import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Heart, TrendingDown, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GLP-1 Weight Management | Mounjaro & Wegovy in Los Angeles",
  description:
    "Medical weight management with GLP-1 treatments (Mounjaro, Wegovy) delivered to your home in Los Angeles & Riverside County. Personalized care from Sol Medspa.",
  alternates: {
    canonical: "/glp1",
  },
}

export default function GLP1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sol-cream-bg to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: "GLP-1 Weight Management",
            description: "Medically supervised GLP-1 therapy for weight management and metabolic health",
            medicationUsed: ["Mounjaro", "Wegovy", "Semaglutide", "Tirzepatide"],
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">GLP-1 Inhibitors</h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Advanced weight management solutions available upon request for qualified patients
          </p>
        </div>
      </section>

      {/* What Are They Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">What Are GLP-1 Inhibitors?</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Sol Medspa offers medically supervised GLP-1 weight management treatments designed to support
                sustainable weight loss and improved metabolic health.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                GLP-1 medications work by regulating appetite, increasing feelings of fullness, and reducing cravings.
                Treatment plans are personalized and may include ongoing monitoring and lifestyle guidance to help
                clients achieve and maintain their goals safely and effectively.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sol-orange mt-1 flex-shrink-0" />
                  <p className="text-stone-600">Helps reduce appetite and cravings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sol-orange mt-1 flex-shrink-0" />
                  <p className="text-stone-600">Supports sustainable weight management</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sol-orange mt-1 flex-shrink-0" />
                  <p className="text-stone-600">May improve metabolic health markers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sol-orange mt-1 flex-shrink-0" />
                  <p className="text-stone-600">Once-weekly injection for convenience</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/whatyousee.jpg"
                alt="Confident woman looking in mirror representing weight management success"
                width={1300}
                height={1300}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-12 text-center">Benefits of GLP-1 Therapy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sol-cream-bg mb-4">
                <TrendingDown className="w-8 h-8 text-sol-brown" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">Weight Management</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Clinically proven to support significant and sustainable weight loss when combined with lifestyle
                changes
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sol-cream-bg mb-4">
                <Heart className="w-8 h-8 text-sol-brown" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">Metabolic Health</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                May help improve blood sugar control, cardiovascular health, and other metabolic markers
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sol-cream-bg mb-4">
                <Sparkles className="w-8 h-8 text-sol-brown" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">Personalized Care</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Customized treatment plans with ongoing support to help you achieve your wellness goals
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Availability Notice */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-sol-cream-bg border-sol-brown/20">
            <h3 className="text-xl font-serif font-bold text-stone-800 mb-3 text-center">Available Upon Request</h3>
            <p className="text-stone-600 text-center leading-relaxed">
              GLP-1 therapy requires a consultation to determine if it's right for you. Contact us to schedule an
              evaluation and learn more about this treatment option.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-sol-cream-bg to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Have Questions?</h2>
          <p className="text-xl text-stone-600 mb-8">
            Schedule a consultation to discuss whether GLP-1 therapy is right for you
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
