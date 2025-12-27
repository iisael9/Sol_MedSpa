import type { Metadata } from "next"
import PricingClient from "./pricing-client"

export const metadata: Metadata = {
  title: "Pricing & Founders' Special | Mobile Medspa Treatments",
  description:
    "View Sol Medspa's founders' pricing for Botox ($10/unit), Dysport ($6/unit), GLP-1 treatments, and IV therapy. Limited time introductory rates in Los Angeles & Riverside County.",
  alternates: {
    canonical: "/pricing",
  },
}

export default function PricingPage() {
  return <PricingClient />
}
