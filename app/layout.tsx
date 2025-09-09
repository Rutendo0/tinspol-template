import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Providers } from "@/components/providers"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Tinspol Motors - Professional Automotive Repair Services",
  description:
    "Zimbabwe's trusted automotive repair specialists. Motor mechanics, suspension, tyres, panel beating, car wash and more.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Tinspol Motors",
    url: "https://www.tinspol.co.zw",
    telephone: ["+263776556717", "+263242779099"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "18608 Bishop Gaul Ave and Rotten Row, Kopje",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "13:00" }
    ],
    areaServed: "Zimbabwe",
    sameAs: []
  }

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body>
        <Providers>
          {children}
          {/* Vercel Analytics for traffic & engagement */}
          <Analytics />
          {/* LocalBusiness / AutoRepair structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          />
        </Providers>
      </body>
    </html>
  )
}
