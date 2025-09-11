import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Contact } from "@/components/contact"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Contact />
      <Footer />
      <MobileCTA />
    </div>
  )
}
