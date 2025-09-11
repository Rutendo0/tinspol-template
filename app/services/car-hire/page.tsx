import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Truck, Car } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CarHirePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100">Vehicle Rentals</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Car <span className="text-red-600">Hiring</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Affordable, reliable vehicles for daily, weekly, or monthly rental. Options for SUVs, sedans, bakkies,
                  and chauffeur services.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <Link href="/quote" className="flex items-center space-x-2">
                      <span>Get Free Quote</span>
                      <CheckCircle className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    <a href="tel:+263776556717" className="flex items-center space-x-2">
                      <span>Call Now</span>
                      <Clock className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image src="/car.png" alt="Car hire vehicles" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rental Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Flexible plans for business or personal travel.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Car, title: "Sedans & Hatchbacks", desc: "Fuel-efficient and comfortable" },
              { icon: Car, title: "SUVs & 4x4s", desc: "Spacious and capable" },
              { icon: Truck, title: "Bakkies", desc: "Reliable workhorses for cargo" },
              { icon: Shield, title: "Insurance Options", desc: "Comprehensive or basic cover" },
              { icon: Clock, title: "Flexible Terms", desc: "Daily, weekly, monthly rates" },
              { icon: CheckCircle, title: "Chauffeur Service", desc: "Professional drivers on request" },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-8 h-8 text-red-600 mb-2" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Hire From Us?</h2>
              <div className="space-y-4">
                {[
                  "Well-maintained, clean vehicles",
                  "Flexible rates and transparent pricing",
                  "Delivery and pick-up available",
                  "24/7 support",
                  "Insurance and roadside assistance options",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/car1.jpg" alt="Rental fleet" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple steps to get on the road</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Enquire", desc: "Tell us your dates and vehicle needs" },
              { step: "2", title: "Docs & Deposit", desc: "Provide ID/license and pay deposit" },
              { step: "3", title: "Pick-up/Delivery", desc: "Collect or have it delivered" },
              { step: "4", title: "Return", desc: "Return vehicle and finalize" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Rental requirements and policies</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "What do I need to rent?", a: "Valid driver’s license, national ID/passport, and a refundable deposit." },
              { q: "Is mileage limited?", a: "We offer fair mileage; long-distance plans can be arranged." },
              { q: "Do you allow cross-border?", a: "Cross-border use can be approved on request with additional insurance." },
              { q: "Is insurance included?", a: "Insurance options are available and can be added to your plan." },
            ].map((faq, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}