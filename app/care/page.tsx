import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Info, Clock, ShieldAlert } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function CarePage() {
  return (
    <div className="min-h-screen bg-sol-cream-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden mt-20">
        <Image
          src="/images/image.png"
          alt="Elegance & Care"
          fill
          className="object-cover object-[center_35%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-stone-900/60" />

        {/* Back Button */}
        <Link href="/" className="absolute top-8 left-8 z-10">
          <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 backdrop-blur-sm">
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

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Patient Care Guide</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We hope you enjoy our innovative approach to self-care as we bring our spa to the comfort of your home.
              Please review the guidelines below to ensure the best possible experience and results.
            </p>
          </div>

          {/* Preparation Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-sol-brown/20 pb-4">
              <div className="h-12 w-12 rounded-full bg-sol-brown/10 flex items-center justify-center text-sol-brown">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-serif text-sol-brown">Preparing for Your Appointment</h3>
            </div>

            <div className="grid gap-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center gap-2">
                    <Info className="h-5 w-5 text-sol-orange" />
                    Setting the Stage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Cosmetic injections are best done in open spaces, like a living room, with the client sitting on a
                    couch or recliner. Our professionals will help you find the best areas and can bring a medical chair
                    upon request at no extra charge to you.
                  </p>
                  <p>
                    For an optimal experience, please ensure that pets that may be unsettled by our visiting health care
                    professional are removed from the area where the care will be delivered.
                  </p>
                  <p>
                    Please let us know of any special parking needs - gate codes, building entry instructions, or
                    elevator access.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sol-orange" />
                    Medical & Personal Prep
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-sol-brown mt-2 shrink-0" />
                      <span>
                        For facial injections, please remove any make-up, toner, or face creams prior to our visit.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-sol-brown mt-2 shrink-0" />
                      <span>
                        Some clients may be apprehensive about injections; taking Acetaminophen 500mg prior to the
                        appointment (provided you do not have liver disease) can help ease discomfort.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-sol-brown mt-2 shrink-0" />
                      <span>
                        Please inform our medical professionals if you are taking any medication classified as a blood
                        thinning drug.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-sol-brown mt-2 shrink-0" />
                      <span>
                        Please inform our medical professionals if you have any known allergic reactions to medications
                        or injectables.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-sol-brown/5 rounded-lg text-sm">
                    <p>
                      <strong>Note on Services:</strong> Our services for now are limited to cosmetic injections, but we
                      can also provide IV infusions, vitamins, supplements, lip fillers, and GLP-1 inhibitors upon
                      request and after a free consultation with our medical professionals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Aftercare Section */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center gap-4 border-b border-sol-brown/20 pb-4">
              <div className="h-12 w-12 rounded-full bg-sol-brown/10 flex items-center justify-center text-sol-brown">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-serif text-sol-brown">Aftercare Instructions</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Immediate Care</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>Keep the treated area clean and avoid touching it unnecessarily.</p>
                  <p>
                    Avoid lying down, excessively leaning forward, or applying pressure to treated areas. Doing so can
                    result in undesirable outcomes.
                  </p>
                  <p>Avoid strenuous exercise, sweating, and saunas for 24 hours after injectables.</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    Mild redness, pain, and swelling at injection sites is common and expected. It will resolve 4 - 6
                    hours after the injection.
                  </p>
                  <p>If you do not have liver disease, you can take Tylenol for comfort.</p>
                  <p>
                    While rare, bruising at injection sites can occur. This is due to inadvertent puncture of small
                    blood vessels and is self-limited.
                  </p>
                  <p className="font-medium text-sol-brown">
                    Full results following injectables will be evident 1 week from the original injection.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-red-100 bg-red-50/50">
              <CardContent className="p-6">
                <h4 className="flex items-center gap-2 text-lg font-bold text-red-700 mb-4">
                  <AlertCircle className="h-5 w-5" />
                  When to Seek Help
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-red-900/80">
                  <div>
                    <strong className="block text-red-800 mb-1">Contact Us Immediately If:</strong>
                    <p>
                      You experience redness and purulent discharge from injection sites one day after the injection.
                      This is not an expected outcome. You will receive a medical consultation at no additional charge.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-red-800 mb-1">Go to Emergency Room If:</strong>
                    <p>
                      You experience eruption of hives, swelling of the throat, and wheezing or difficulty breathing.
                      These are not expected outcomes and could represent a serious life-threatening allergic reaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <h3 className="text-2xl font-serif text-foreground mb-4">Have More Questions?</h3>
            <Link href="/contact">
              <Button className="bg-sol-brown hover:bg-sol-orange text-white px-8 py-6 text-lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
