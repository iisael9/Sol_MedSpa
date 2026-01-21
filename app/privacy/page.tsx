import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Sol Medspa's privacy policy explains how we collect, use, and protect your personal information when you use our mobile medical spa services in Los Angeles and Riverside County.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-sol-cream-bg">
      <Navigation />
      
      <main id="main-content" className="pt-32 pb-16 px-4">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Privacy Policy</h1>
            <p className="text-stone-600">Last Updated: January 2025</p>
          </header>

          <div className="prose prose-stone max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Introduction</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Sol Medspa MSO LLC (doing business as Sol Medspa, "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website sol-medspa.com or use our mobile medical spa services in Los Angeles, Riverside County, and surrounding areas in California.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Personal Information</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Book an appointment or consultation</li>
                <li>Fill out a contact form or subscribe to our newsletter</li>
                <li>Request information about our services</li>
                <li>Complete patient intake forms</li>
              </ul>
              <p className="text-stone-600 leading-relaxed mb-4">
                This information may include your name, email address, phone number, mailing address, and other contact details.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Health Information</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                As a medical spa, we may collect health-related information necessary to provide our aesthetic treatments safely. This information is handled in accordance with applicable healthcare privacy laws and is used solely for treatment purposes.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Automatically Collected Information</h3>
              <p className="text-stone-600 leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, access times, and the pages you have viewed. We use this information to analyze trends, administer the site, and improve our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">How We Use Your Information</h2>
              <p className="text-stone-600 leading-relaxed mb-4">We may use the information we collect for purposes including:</p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Scheduling and managing appointments</li>
                <li>Providing our medical spa services safely and effectively</li>
                <li>Communicating with you about appointments, services, and promotions</li>
                <li>Responding to your inquiries and requests</li>
                <li>Improving our website and services</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Analyzing website usage through tools like Google Analytics</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to collect and track information about your browsing activities on our website. These technologies help us:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you interact with our website</li>
                <li>Analyze website traffic and performance</li>
                <li>Provide personalized content and advertising</li>
              </ul>
              <p className="text-stone-600 leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Google Analytics</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We use Google Analytics to help us understand how visitors interact with our website. Google Analytics uses cookies to collect information about your use of the website, which is then used to compile reports and help us improve the site.
              </p>
              <p className="text-stone-600 leading-relaxed">
                You can opt out of Google Analytics by installing the{" "}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sol-brown hover:text-sol-brown-dark underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Disclosure of Your Information</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li><strong>Service Providers:</strong> With third-party vendors who help us operate our business (e.g., appointment scheduling systems, payment processors)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you have given us permission to share your information</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">California Privacy Rights</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA), including the right to:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Know what personal information we collect about you</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of the sale of your personal information (we do not sell personal information)</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-stone-600 leading-relaxed">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:contact@sol-medspa.com" className="text-sol-brown hover:text-sol-brown-dark underline">
                  contact@sol-medspa.com
                </a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Data Security</h2>
              <p className="text-stone-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Children's Privacy</h2>
              <p className="text-stone-600 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-stone-600 leading-relaxed">
                We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this privacy policy periodically for any changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Contact Us</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                If you have questions or comments about this privacy policy, please contact us at:
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
                <Link href="/terms" className="text-sol-brown hover:text-sol-brown-dark underline">
                  Terms of Service
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
