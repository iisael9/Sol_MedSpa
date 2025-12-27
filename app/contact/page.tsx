import type { Metadata } from "next"
import ContactClient from "./contactClient"

export const metadata: Metadata = {
  title: "Contact Us | Book Your Mobile Medspa Appointment",
  description:
    "Contact Sol Medspa to schedule your in-home aesthetic treatment in Los Angeles or Riverside County. Call (310) 876-2788 or book online today.",
  openGraph: {
    title: "Contact Sol Medspa | Mobile Medical Spa",
    description: "Schedule your mobile medspa appointment in Los Angeles & Riverside County. Available by appointment.",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return <ContactClient />
}
