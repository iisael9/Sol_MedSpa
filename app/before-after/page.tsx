"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Instagram, Facebook } from "lucide-react"
import { Navigation } from "@/components/navigation"

// Image Comparison Slider Component
function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

    setSliderPosition(percent)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX)
    }
  }

  const handleStart = () => {
    setIsDragging(true)
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleEnd)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", handleEnd)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleEnd)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleEnd)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize select-none"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image src={beforeImage || "/placeholder.svg"} alt={beforeLabel} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
          {beforeLabel}
        </div>
      </div>

      {/* After Image with clip */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <Image src={afterImage || "/placeholder.svg"} alt={afterLabel} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
          {afterLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-sol-brown shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing">
          <ChevronLeft className="w-4 h-4 text-white absolute left-2" />
          <ChevronRight className="w-4 h-4 text-white absolute right-2" />
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfterPage() {
  const beforeAfterData = [
    {
      before: "/woman-with-forehead-wrinkles-before-treatment.jpg",
      after: "/same-woman-with-smooth-forehead-after-botox-treatm.jpg",
      title: "Botox Treatment",
      description: "Smoothed forehead lines and crow's feet with natural-looking results",
    },
    {
      before: "/woman-with-thin-lips-before-filler.jpg",
      after: "/same-woman-with-fuller-lips-after-filler.jpg",
      title: "Lip Filler Enhancement",
      description: "Natural lip augmentation for fuller, more defined lips",
    },
    {
      before: "/woman-with-fine-lines-before-dysport.jpg",
      after: "/same-woman-with-reduced-fine-lines-after-dysport.jpg",
      title: "Dysport for Fine Lines",
      description: "Reduced fine lines around eyes and forehead for a refreshed appearance",
    },
    {
      before: "/woman-with-dull-skin-before-laser-treatment.jpg",
      after: "/same-woman-with-glowing-skin-after-laser-treatment.jpg",
      title: "Laser Skin Rejuvenation",
      description: "Improved skin texture, tone, and overall radiance",
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
            See the transformative results of our treatments. Drag the slider to compare before and after photos.
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
          <h4 className="text-2xl font-serif text-foreground mb-2">
            <span className="font-bold italic">Sol</span> Medspa
          </h4>
          <div className="flex justify-center space-x-4 my-6">
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
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            © 2025 <span className="font-bold italic">Sol</span> Medspa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
