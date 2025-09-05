import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4 prose prose-gray max-w-3xl">
          <h1 className="text-4xl font-bold text-black mb-4">Terms of Service</h1>
          <p className="text-gray-600">By using this website and our services, you agree to these terms.</p>
          <h2>Services</h2>
          <p>Quotes are estimates; final pricing may vary after inspection. Warranties apply when specified.</p>
          <h2>Liability</h2>
          <p>We take reasonable care during all services. We are not liable for pre-existing damages or misuse post-service.</p>
          <h2>Contact</h2>
          <p>For terms enquiries, email bookings@tinspol.co.zw.</p>
        </div>
      </section>
      <Footer />
      <MobileCTA />
    </div>
  )
}