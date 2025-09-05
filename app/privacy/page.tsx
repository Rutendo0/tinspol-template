import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4 prose prose-gray max-w-3xl">
          <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
          <p className="text-gray-600">We respect your privacy and are committed to protecting your personal information. This page outlines how we collect, use, and safeguard data.</p>
          <h2>What We Collect</h2>
          <p>Contact details and form submission information (e.g., service requests). We do not sell your data.</p>
          <h2>How We Use It</h2>
          <p>To respond to enquiries, schedule services, and improve our website.</p>
          <h2>Cookies</h2>
          <p>We may use cookies/analytics to improve user experience. You can disable cookies in your browser settings.</p>
          <h2>Contact</h2>
          <p>For privacy enquiries, email bookings@tinspol.co.zw.</p>
        </div>
      </section>
      <Footer />
      <MobileCTA />
    </div>
  )
}