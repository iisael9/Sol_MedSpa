import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "Important medical disclaimer for Sol Medspa's aesthetic treatments including Botox, Dysport, and GLP-1 weight management services in Los Angeles and Riverside County.",
  alternates: {
    canonical: "/disclaimer",
  },
}

export default function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-sol-cream-bg">
      <Navigation />
      
      <main id="main-content" className="pt-32 pb-16 px-4">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">Medical Disclaimer</h1>
            <p className="text-stone-600">Last Updated: January 2025</p>
          </header>

          <div className="prose prose-stone max-w-none">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-10">
              <p className="text-amber-800 font-medium text-lg mb-0">
                Please read this medical disclaimer carefully before using our services or relying on any information provided on this website.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">General Information</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                The information provided on the Sol Medspa website (sol-medspa.com), operated by Sol Medspa MSO LLC, is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition or treatment. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">No Medical Advice</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                The content on this website, including text, graphics, images, and other material, is not intended to be a substitute for professional medical advice. The information is provided to help you make informed decisions about aesthetic treatments.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Nothing contained on this website is intended to be used for medical diagnosis or treatment. A proper evaluation by a qualified medical professional is necessary to determine if any treatment is appropriate for you.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Treatment Risks and Results</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                All medical and aesthetic procedures, including but not limited to Botox, Dysport, dermal fillers, and GLP-1 treatments, carry risks. These risks will be discussed with you during your consultation.
              </p>
              <p className="text-stone-600 leading-relaxed mb-4">
                <strong>Common risks may include, but are not limited to:</strong>
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Bruising, swelling, or redness at injection sites</li>
                <li>Pain or discomfort during and after treatment</li>
                <li>Asymmetry or uneven results</li>
                <li>Allergic reactions</li>
                <li>Infection</li>
                <li>Temporary numbness or tingling</li>
                <li>Other side effects specific to each treatment</li>
              </ul>
              <p className="text-stone-600 leading-relaxed">
                <strong>Individual results may vary.</strong> The results depicted in before-and-after photographs or described in testimonials on this website may not be typical. Your results will depend on many factors, including your individual physiology, the specific treatment performed, and your adherence to post-treatment care instructions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">GLP-1 Weight Management Disclaimer</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                GLP-1 receptor agonists (such as Semaglutide, Tirzepatide/Mounjaro, and similar medications) are prescription medications intended for weight management. These medications:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Require a medical evaluation to determine eligibility</li>
                <li>May have serious side effects and contraindications</li>
                <li>Are not appropriate for everyone</li>
                <li>Should be used as part of a comprehensive weight management program that includes diet and exercise</li>
                <li>May interact with other medications</li>
              </ul>
              <p className="text-stone-600 leading-relaxed">
                Weight loss results vary significantly between individuals. Any weight loss claims or examples provided are not guarantees of your results.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Botox and Dysport Disclaimer</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Botulinum toxin products (Botox, Dysport, and similar products) are FDA-approved prescription medications. Important considerations include:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
                <li>Effects are temporary and typically last 3-4 months</li>
                <li>Results may vary based on individual factors</li>
                <li>Not recommended during pregnancy or breastfeeding</li>
                <li>May have specific contraindications based on your health history</li>
                <li>Rare but serious side effects can occur, including difficulty swallowing, speaking, or breathing</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Photographs and Testimonials</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Before-and-after photographs shown on this website represent the results achieved by individual patients. These results are not guaranteed and may not be typical. Your results may differ significantly based on your individual circumstances.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Testimonials reflect the personal experiences of those individuals. Your experience may differ. Testimonials are not intended to make claims that treatments can be used to diagnose, treat, cure, or prevent any disease.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Emergency Situations</h2>
              <p className="text-stone-600 leading-relaxed">
                <strong>If you think you may have a medical emergency, call your doctor, go to the emergency department, or call 911 immediately.</strong> Sol Medspa does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Consultation Requirement</h2>
              <p className="text-stone-600 leading-relaxed">
                Before receiving any treatment at Sol Medspa, you will be required to complete a thorough consultation and medical evaluation. This evaluation will help determine if you are a suitable candidate for the desired treatment and will allow us to discuss realistic expectations, potential risks, and aftercare instructions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Licensing and Credentials</h2>
              <p className="text-stone-600 leading-relaxed">
                Sol Medspa is operated under the supervision of licensed medical professionals in the State of California. All treatments are performed by qualified, trained practitioners in accordance with California state regulations governing medical spas and aesthetic procedures.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">Contact for Questions</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                If you have any questions about our treatments, risks, or this disclaimer, please contact us:
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
                <Link href="/terms" className="text-sol-brown hover:text-sol-brown-dark underline">
                  Terms of Service
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
