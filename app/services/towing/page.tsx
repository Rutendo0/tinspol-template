import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Wrench, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TowingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100">Roadside Assistance</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Towing & <span className="text-red-600">Breakdown</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fast and reliable towing for breakdowns, accidents, and non-runners. Roadside help for jump starts,
                  tyre changes, and fuel drop-offs.
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
                <Image src="/tower.jpg" alt="Towing and roadside assistance" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Towing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">24/7 towing and roadside assistance with professional operators.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Emergency Towing", desc: "Breakdowns and immobile vehicles" },
              { icon: Shield, title: "Accident Recovery", desc: "Safe recovery and transport after incidents" },
              { icon: Clock, title: "Roadside Help", desc: "Jump starts, tyre change, and fuel delivery" },
              { icon: Wrench, title: "Workshop Delivery", desc: "Direct to Tinspol or your preferred garage" },
              { icon: CheckCircle, title: "Long Distance", desc: "City and intercity towing available" },
              { icon: Shield, title: "Secure Storage", desc: "Short-term vehicle holding on request" },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Towing?</h2>
              <div className="space-y-4">
                {[
                  "24/7 availability and quick dispatch",
                  "Professional and courteous operators",
                  "Safe handling for all vehicle types",
                  "Transparent pricing with no hidden fees",
                  "Wide coverage area",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/tower1.jpg" alt="Towing truck" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple 4-step process</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Call Us", desc: "Share your location and vehicle details" },
              { step: "2", title: "Dispatch", desc: "We send a truck to your location" },
              { step: "3", title: "Transport", desc: "Safe loading and transport" },
              { step: "4", title: "Drop-off", desc: "Delivered to your chosen destination" },
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
            <p className="text-lg text-gray-600">Answers to common questions about our towing services</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Are you available 24/7?", a: "Yes, towing and roadside assistance are available 24/7." },
              { q: "How is pricing calculated?", a: "We base pricing on distance, vehicle type, and service needed. We’ll confirm before dispatch." },
              { q: "Do you tow long distances?", a: "Yes, we offer both local and intercity tows." },
              { q: "Which vehicles can you tow?", a: "We tow most passenger cars and light commercial vehicles." },
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