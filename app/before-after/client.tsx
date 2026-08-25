"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Instagram, Facebook } from "lucide-react" // Import Instagram and Facebook icons

// Side-by-side comparison cards
function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  beforePosition = "center",
  afterPosition = "center",
}: {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  beforePosition?: string
  afterPosition?: string
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {[{ image: beforeImage, label: beforeLabel, position: beforePosition }, { image: afterImage, label: afterLabel, position: afterPosition }].map((photo) => (
        <figure key={photo.label} className="overflow-hidden rounded-2xl border border-sol-brown/15 bg-background shadow-lg">
          <div className="relative aspect-[4/3]">
            <Image
              src={photo.image || "/placeholder.svg"}
              alt={photo.label}
              fill
              className="object-cover"
              style={{ objectPosition: photo.position }}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <figcaption className="px-5 py-3 text-center text-sm font-semibold tracking-[0.18em] text-sol-brown uppercase">
            {photo.label}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function BeforeAfterPageClient() {
  const beforeAfterData = [
    {
      before:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mark_before-NZdyMNoJsTc7DKNMvD3aHhWZ6JzkdO.jpeg",
      after:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mark_after.JPEG-YpLal3ULpHNJd6msiBqcVYFDbHs3b6.jpeg",
      title: "Forehead Line Treatment",
      description: "A personalized treatment focused on softening the appearance of forehead lines.",
      beforePosition: "center 35%",
      afterPosition: "center 46%",
    },
    {
      before:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lonjino_before-LuX281Z1h6zBMxtvFfQ6bc5XKlKixl.jpeg",
      after:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lonjino_after-C7o44UK8HUuz94L7PNm9FyqwK6GaPS.jpeg",
      title: "Forehead Line Treatment",
      description: "A personalized treatment focused on softening the appearance of forehead lines.",
    },
    {
      before:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mark_before2-7mvlOm5OQrfwX4FcI7MnuPwpy67RpK.jpeg",
      after:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mark_after2.JPEG-WZqzP06R8Dgmb6Y1ho7FyiSwoPIjZK.jpeg",
      title: "Forehead Line Treatment",
      description: "A personalized treatment focused on softening the appearance of forehead lines.",
    },
  ]

  return (
    <div className="min-h-screen bg-sol-cream-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
            Results
            <span className="block text-sol-orange">& Radiance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore real treatment results with clear, side-by-side Before and After photos.
          </p>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {beforeAfterData.map((item, index) => (
            <div key={index} className="space-y-6">
              <div className="text-center">
                <h3 className="text-3xl font-serif text-foreground mb-3">{item.title}</h3>
                <p className="text-lg text-muted-foreground">{item.description}</p>
              </div>

              <ImageComparisonSlider beforeImage={item.before} afterImage={item.after} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-serif text-foreground mb-6">Ready to Transform Your Look?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the <span className="font-bold italic">Sol</span> Medspa difference. Book your session today.
          </p>
          <a
            href="https://app.squareup.com/appointments/book/9cjimearmu7iz4/LM76T0GTP6A6G/start"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-sol-brown hover:bg-sol-orange px-8 py-6 text-lg text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Book Now
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
