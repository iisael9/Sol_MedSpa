import { Instagram, Facebook, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-sol-cream-bg" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start mb-4">
              <Image
                src="/images/sol-logo-icon.svg"
                alt="Sol MedSpa Logo"
                width={120}
                height={120}
                className="w-28 h-28"
              />
            </div>
            <h4 className="text-xl font-serif text-stone-800 mb-2">
              <span className="font-bold italic">Sol</span> Medspa
            </h4>
            <p className="text-stone-600 text-sm mb-4">Elevate Your Glow at Home</p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-3">
              <a
                href="https://www.instagram.com/sol.medspa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Sol Medspa on Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-sol-cream-bg text-sol-brown hover:text-sol-brown-dark transition-colors border border-stone-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584058650535"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Sol Medspa on Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-sol-cream-bg text-sol-brown hover:text-sol-brown-dark transition-colors border border-stone-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="text-center md:text-left">
            <h5 className="text-stone-800 font-semibold mb-4">Quick Links</h5>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/botox-party" className="text-stone-600 hover:text-sol-brown transition-colors">
                    Botox Party
                  </Link>
                </li>
                <li>
                  <Link href="/botox-dysport" className="text-stone-600 hover:text-sol-brown transition-colors">
                    Botox & Dysport
                  </Link>
                </li>
                <li>
                  <Link href="/glp1" className="text-stone-600 hover:text-sol-brown transition-colors">
                    GLP-1 Weight Management
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-stone-600 hover:text-sol-brown transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-stone-600 hover:text-sol-brown transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact & Legal Column */}
          <div className="text-center md:text-left">
            <h5 className="text-stone-800 font-semibold mb-4">Contact</h5>
            <address className="not-italic text-sm space-y-2 mb-6">
              <a 
                href="tel:+13108762788" 
                className="flex items-center justify-center md:justify-start gap-2 text-stone-600 hover:text-sol-brown transition-colors"
              >
                <Phone className="w-4 h-4" />
                (310) 876-2788
              </a>
              <a 
                href="mailto:contact@sol-medspa.com" 
                className="flex items-center justify-center md:justify-start gap-2 text-stone-600 hover:text-sol-brown transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@sol-medspa.com
              </a>
              <p className="text-stone-500 pt-1">
                Serving Los Angeles, Riverside County & Surrounding Areas
              </p>
            </address>

            <h5 className="text-stone-800 font-semibold mb-3">Legal</h5>
            <nav aria-label="Legal navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-stone-600 hover:text-sol-brown transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-stone-600 hover:text-sol-brown transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-stone-600 hover:text-sol-brown transition-colors">
                    Medical Disclaimer
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 pt-6 text-center">
          <p className="text-sm text-stone-500 mb-2">
            © {new Date().getFullYear()} Sol Medspa MSO LLC. All rights reserved.
          </p>
          <p className="text-xs text-stone-400">
            Mobile Medical Spa | By Appointment Only | California
          </p>
        </div>
      </div>
    </footer>
  )
}
