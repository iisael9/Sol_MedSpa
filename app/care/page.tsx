import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from 'lucide-react'
import { Navigation } from "@/components/navigation"

export default function CarePage() {
  const careInstructions = [
    {
      title: "Dysport",
      description: "Essential guidelines for before and after your Dysport injection treatment to ensure optimal results and minimize side effects.",
      icon: "💉"
    },
    {
      title: "Botox",
      description: "Comprehensive care instructions for Botox treatments including pre-treatment preparation and post-care protocols for best outcomes.",
      icon: "✨"
    },
    {
      title: "GLP-1 Inhibitors",
      description: "Important information about preparation, administration, and aftercare for GLP-1 inhibitor treatments to maximize effectiveness.",
      icon: "💊"
    },
    {
      title: "Lip Fillers",
      description: "Pre- and post-care details for dermal filler treatments to reduce bruising, swelling, and ensure beautiful, long-lasting results.",
      icon: "💋"
    },
    {
      title: "Laser Therapy",
      description: "Detailed instructions for skin preparation and recovery from laser treatments for optimal healing and skin rejuvenation.",
      icon: "⚡"
    },
    {
      title: "General Skincare",
      description: "Daily skincare routines and maintenance tips to complement your aesthetic treatments and maintain radiant, healthy skin.",
      icon: "🌟"
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F1EB" }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden mt-20">
        <Image
          src="/elegant-woman-beauty-portrait-close-up-face.jpg"
          alt="Elegance & Care"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-stone-900/60" />
        
        {/* Back Button */}
        <Link href="/" className="absolute top-8 left-8 z-10">
          <Button 
            variant="ghost" 
            className="text-white hover:text-white hover:bg-white/20 backdrop-blur-sm"
          >
            {/* <ArrowLeft className="mr-2 h-4 w-4" /> */}
            Back to Home
          </Button>
        </Link>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
              Elegance
              <br />
              <span className="italic">& Vitality</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Care Instructions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Care Instructions
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Access detailed pre-care and aftercare guidelines for each treatment offered at Sol MedSpa.
              <br />
              Click a treatment below to learn how to prepare and care for your skin for optimal results.
            </p>
          </div>

          {/* Care Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {careInstructions.map((item, index) => (
              <Card 
                key={index}
                className="border-stone-200 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-serif mb-2 group-hover:text-[#C4956C] transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-stone-600 leading-relaxed text-base">
                        {item.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="text-[#C4956C] hover:text-[#E55B13] hover:bg-stone-100 w-full justify-start"
                  >
                    View Care Instructions
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center">
            <Card className="border-[#C4956C] bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-stone-800 mb-4">
                  Have Questions About Your Treatment?
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Our team is here to guide you through every step of your aesthetic journey.
                  <br />
                  Contact us for personalized care instructions or to schedule a consultation.
                </p>
                <Button 
                  className="bg-[#C4956C] hover:bg-[#E55B13] text-white px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
