import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Users, Calendar, CreditCard, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BotoxPartyPage() {
  return (
    <main className="min-h-screen bg-sol-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-sol-cream-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-4 text-balance">Botox Party Experience</h1>
            <p className="text-xl text-sol-brown font-medium tracking-wide mb-2">STAY HOME. GET PAMPERED.</p>
            <p className="text-stone-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Indulge in the <span className="font-semibold text-stone-800">ultimate luxury experience</span> with Botox
              treatments in the comfort of your own home or preferred location. My in-home service brings the
              high-quality cosmetic enhancements you cherish, all within the convenience of your living room.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/group-of-diverse-women-lying-together-laughing-and.jpg"
              alt="Women enjoying botox party together"
              width={1000}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-sol-brown italic">Bring the Natural Injector experience to you!</p>
          </div>
        </div>
      </section>

      {/* Botox Parties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Botox Parties</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Indulge in a lavish Botox celebration with your besties!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-sol-cream-bg p-8 rounded-2xl">
                <h3 className="text-2xl font-serif text-stone-800 mb-4 text-center">
                  INDULGE IN SOME SELF-CARE PAMPERING FOR YOU AND YOUR SQUAD!
                </h3>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Decrease lines on the upper face by providing temporary relaxation of the underlying muscles below the
                  wrinkles. Botox may also be used on the lower face to relax certain facial muscles for a more
                  desirable appearance (e.g. de-bulking the masseter muscles by softening the jawline).
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-sol-brown uppercase text-sm tracking-wider">Details</h4>

                  <div className="space-y-3 text-stone-700">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-sol-brown flex-shrink-0 mt-0.5" />
                      <p>
                        House Calls are available{" "}
                        <span className="font-semibold">in the Los Angeles & Riverside County + Sorounding Areas.</span>
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-sol-brown flex-shrink-0 mt-0.5" />
                      <p>
                        Available for groups of <span className="font-semibold">3 or more people</span>
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-sol-brown flex-shrink-0 mt-0.5" />
                      <p>
                        Botox Parties require a <span className="font-semibold">100-unit minimum per party</span>
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CreditCard className="w-5 h-5 text-sol-brown flex-shrink-0 mt-0.5" />
                      <p>
                        Botox treatments start at <span className="font-semibold">$12 per unit</span>
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-sol-brown flex-shrink-0 mt-0.5" />
                      <p>
                        A <span className="font-semibold">travel fee</span> may apply depending on your location
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/party-image-01.jpg"
                alt="Elegant party setup with food and table settings"
                width={600}
                height={700}
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* House Calls Section */}
      <section className="py-20 bg-sol-cream-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">House Calls</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Pamper yourself in the comfort and privacy of your own home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <Image
                src="/images/product-01.jpg"
                alt="Luxury spa products and flowers"
                width={600}
                height={700}
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-serif text-stone-800 mb-4 text-center uppercase">
                  Get Personalized Botox Treatments In The Comfort And Privacy Of Your Own Home
                </h3>

                <p className="text-lg font-semibold text-sol-brown mb-6 text-center">
                  A BUSY MOM & CELEBRITY FAVORITE!
                </p>

                <p className="text-stone-700 leading-relaxed mb-6">
                  Each one-on-one visit includes an in-depth cosmetic consultation. By booking a House Call, you'll also
                  qualify for my Botox rewards programs at your next in-house or in-office appointment.
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-sol-brown uppercase text-sm tracking-wider">Details</h4>

                  <div className="space-y-3 text-stone-700">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-sol-brown flex-shrink-0 mt-0.5" />
                      <p>
                        House Calls are available <span className="font-semibold">only in the Los Angeles area</span>
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-sol-brown flex-shrink-0 mt-0.5" />
                      <p>
                        House Calls require a <span className="font-semibold">35-unit minimum per visit</span>
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CreditCard className="w-5 h-5 text-sol-brown flex-shrink-0 mt-0.5" />
                      <p>
                        Botox treatments start at <span className="font-semibold">$12 per unit</span>
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-sol-brown flex-shrink-0 mt-0.5" />
                      <p>
                        A <span className="font-semibold">travel fee</span> may apply depending on your location
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-sol-cream-bg p-12 rounded-2xl shadow-lg">
            <MessageCircle className="w-16 h-16 text-sol-brown mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">Have Questions?</h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              We're here to help! Whether you're planning a botox party or scheduling a private house call, our team is
              ready to answer any questions you may have about our services.
            </p>
            <Link href="/contact">
              <Button className="text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 bg-sol-brown hover:bg-sol-brown-dark text-lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-serif mb-4">
                <span className="italic font-bold">Sol</span> Medspa
              </h3>
              <p className="text-stone-400 leading-relaxed">
                Premium aesthetic treatments designed to enhance your natural beauty with the highest standards of care
                and expertise.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/botox-party" className="hover:text-white transition-colors">
                    Botox Party
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-stone-400">
                <li>Los Angeles, Riverside County & Surrounding Areas</li>
                <li>
                  <a href="mailto:admin@sol-medspa.com" className="hover:text-white transition-colors">
                    admin@sol-medspa.com
                  </a>
                </li>
                <li>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-stone-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Sol Medspa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
