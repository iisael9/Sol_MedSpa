import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
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
        <p className="text-stone-600 mb-6">Elevate Your Glow at Home</p>

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
        </div>

        <p className="text-sm text-stone-500">
          © 2025 <span className="font-bold italic">Sol</span> Medspa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
