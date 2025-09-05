import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4 prose prose-gray max-w-3xl">
          <h1 className="text-4xl font-bold text-black mb-4">Cookie Policy</h1>
          <p className="text-gray-600">We use cookies to provide a better experience and analyze site traffic.</p>
          <h2>What are cookies?</h2>
          <p>Small text files stored on your device to remember preferences and understand usage.</p>
          <h2>Managing cookies</h2>
          <p>You can control or disable cookies in your browser settings.</p>
        </div>
      </section>
      <Footer />
      <MobileCTA />
    </div>
  )
}