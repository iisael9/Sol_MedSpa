import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: "Sol Medspa | Mobile Medical Spa in Los Angeles & Riverside County",
    template: "%s | Sol Medspa",
  },
  description:
    "Premier mobile medical spa serving Los Angeles, Riverside County & surrounding areas. We bring Botox, Dysport, GLP-1 treatments, and aesthetic services to your home. Book your concierge appointment today.",
  keywords: [
    "mobile medspa",
    "concierge spa",
    "botox at home",
    "dysport",
    "Los Angeles medspa",
    "Riverside County",
    "in-home beauty treatments",
    "GLP-1 inhibitors",
    "mobile aesthetic treatments",
    "botox party",
  ],
  authors: [{ name: "Sol Medspa" }],
  creator: "Sol Medspa",
  metadataBase: new URL("https://sol-medspa.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sol-medspa.com",
    siteName: "Sol Medspa",
    title: "Sol Medspa | Mobile Medical Spa in Los Angeles & Riverside County",
    description:
      "Premier mobile medical spa bringing Botox, Dysport, and aesthetic treatments to your home in Los Angeles & Riverside County.",
    images: [
      {
        url: "/elegant-woman-beauty-portrait-close-up-face.jpg",
        width: 1200,
        height: 630,
        alt: "Sol Medspa - Radiant Skin Reimagined",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sol Medspa | Mobile Medical Spa",
    description:
      "Premier mobile medical spa serving Los Angeles & Riverside County. We bring luxury aesthetic treatments to your home.",
    images: ["/elegant-woman-beauty-portrait-close-up-face.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  generator: "v0.app",
}

import { CookieConsent } from "@/components/cookie-consent"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Consent Mode - Initialize BEFORE GA loads */}
        <Script id="google-consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent to denied
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>
        
        {/* Google Analytics - Loads after consent initialization */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y36PQB34HY" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y36PQB34HY', {
              'anonymize_ip': true
            });
          `}
        </Script>
        
        {/* Fallback for environment variable-based GA if configured */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "G-Y36PQB34HY" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-env" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  'anonymize_ip': true
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
