"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sun, ChevronLeft, ChevronRight } from 'lucide-react'

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
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
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
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ backgroundColor: "#C4956C" }}
        >
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
    <div className="min-h-screen" style={{ backgroundColor: "#F5F1EB" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-stone-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                <Sun className="w-6 h-6 text-amber-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-stone-800 font-serif text-xl font-bold tracking-wide">Sol MedSpa</span>
              </div>
            </Link>

            <Link href="/">
              <Button
                variant="ghost"
                className="text-stone-600 hover:text-stone-800 hover:bg-stone-100 font-medium px-4 py-2 rounded-full"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-6 leading-tight">
            Results
            <span className="block" style={{ color: "#E55B13" }}>
              & Radiance
            </span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
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
                <h3 className="text-3xl font-serif text-stone-800 mb-3">{item.title}</h3>
                <p className="text-lg text-stone-600">{item.description}</p>
              </div>

              <ImageComparisonSlider beforeImage={item.before} afterImage={item.after} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-serif text-stone-800 mb-6">Ready to Transform Your Look?</h3>
          <p className="text-lg text-stone-600 mb-8">
            Experience the Sol Medspa difference. Book your consultation today.
          </p>
          <Link href="/">
            <Button
              className="px-8 py-6 text-lg text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              style={{ backgroundColor: "#C4956C" }}
            >
              Get Notified When We Launch
            </Button>
          </Link>
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
          <p className="text-sm text-stone-500 mt-4">© 2025 Sol Medspa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
