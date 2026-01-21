import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Sol Medspa's website and mobile medical spa services in Los Angeles and Riverside County, California.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-sol-cream-bg">
      <Navigation />
      
      <main id="main-content" className="pt-32 pb-16 px-4">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Terms of Service</h1>
            <p className="text-stone-600">Last Updated: January 2025</p>
          </header>

          <div className="prose prose-stone max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Agreement to Terms</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Welcome to Sol Medspa. These Terms of Service ("Terms") govern your use of our website at sol-medspa.com and our mobile medical spa services provided by Sol Medspa MSO LLC throughout Los Angeles, Riverside County, and surrounding areas in California.
              </p>
              <p className="text-stone-600 leading-relaxed">
                By accessing or using our website or services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our website or use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Description of Services</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Sol Medspa is a mobile medical spa providing aesthetic and wellness treatments in the comfort of clients' homes. Our services include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Botox and Dysport injectable treatments</li>
                <li>GLP-1 weight management treatments</li>
                <li>Botox party experiences for groups</li>
                <li>IV therapy (coming soon)</li>
                <li>Other aesthetic treatments as offered</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Eligibility</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                You must be at least 18 years old to use our services. By using our website or booking an appointment, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these Terms.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Certain treatments may have additional eligibility requirements based on medical history, current health conditions, or other factors that will be assessed during your consultation.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Appointments and Cancellations</h2>
              
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Booking</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Appointments can be booked through our website, by phone, or through our online booking system. All appointments are subject to availability and confirmation.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Cancellation Policy</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                We require at least 24 hours notice for appointment cancellations or rescheduling. Cancellations made with less than 24 hours notice may be subject to a cancellation fee. No-shows may result in a charge and may affect your ability to book future appointments.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Late Arrivals</h3>
              <p className="text-stone-600 leading-relaxed">
                As a mobile service, we travel to your location. Please ensure you are available and ready at the scheduled appointment time. Significant delays may result in a shortened treatment time or rescheduling.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Payment Terms</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Payment is due at the time of service unless otherwise arranged. We accept various forms of payment including credit cards, debit cards, and other methods as specified at the time of booking.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Prices for our services are subject to change. The price in effect at the time of booking will apply to your appointment.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Medical Consent</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Before receiving any treatment, you will be required to complete a patient intake form and provide informed consent. This includes disclosing your medical history, current medications, allergies, and any relevant health conditions.
              </p>
              <p className="text-stone-600 leading-relaxed">
                You understand that aesthetic treatments carry risks, and these will be explained to you before any procedure. Your consent is required before any treatment is performed.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Results and Guarantees</h2>
              <p className="text-stone-600 leading-relaxed">
                While we strive to achieve optimal results, individual outcomes may vary. We do not guarantee specific results from any treatment. Results depend on various factors including individual physiology, adherence to aftercare instructions, and other variables.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Intellectual Property</h2>
              <p className="text-stone-600 leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property of Sol Medspa or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Limitation of Liability</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                To the fullest extent permitted by law, Sol Medspa shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers or personal information</li>
                <li>Any errors or omissions in our content</li>
                <li>Any third-party conduct or content</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Indemnification</h2>
              <p className="text-stone-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Sol Medspa and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising out of or related to your violation of these Terms or your use of our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Governing Law</h2>
              <p className="text-stone-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in California.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Changes to Terms</h2>
              <p className="text-stone-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website or services after any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Severability</h2>
              <p className="text-stone-600 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Contact Information</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <address className="text-stone-600 not-italic">
                <strong>Sol Medspa</strong><br />
                Email:{" "}
                <a href="mailto:contact@sol-medspa.com" className="text-sol-brown hover:text-sol-brown-dark underline">
                  contact@sol-medspa.com
                </a><br />
                Phone:{" "}
                <a href="tel:+13108762788" className="text-sol-brown hover:text-sol-brown-dark underline">
                  (310) 876-2788
                </a><br />
                Service Area: Los Angeles, Riverside County & Surrounding Areas, California
              </address>
            </section>
          </div>

          <nav className="mt-12 pt-8 border-t border-stone-200" aria-label="Related pages">
            <p className="text-stone-600 mb-4">Related policies:</p>
            <ul className="flex flex-wrap gap-4">
              <li>
                <Link href="/privacy" className="text-sol-brown hover:text-sol-brown-dark underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sol-brown hover:text-sol-brown-dark underline">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </main>

      <Footer />
    </div>
  )
}
