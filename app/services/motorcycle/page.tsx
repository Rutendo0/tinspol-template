import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Wrench, Bike } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MotorcyclePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100">Motorcycle</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Motorcycle <span className="text-red-600">Service</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Service support for motorcycles: routine servicing, diagnostics, tyres, brakes, and
                  accessories.
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
                <Image src="/motor.jpeg" alt="Motorcycle service" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Motorcycle Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional service and quality parts.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: "Routine Service", desc: "Oil, filters, plugs, and adjustments" },
              { icon: Shield, title: "Diagnostics & Repairs", desc: "Electrical and mechanical troubleshooting" },
              { icon: Bike, title: "Tyres & Tubes", desc: "Supply and fit popular sizes" },
              { icon: CheckCircle, title: "Brakes", desc: "Pads, discs, and bleeding" },
              { icon: Shield, title: "Spares & Accessories", desc: "Chains, sprockets, guards, and more" },
              { icon: Wrench, title: "Performance Tuning", desc: "Carb/EFI tuning and setup" },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Moto Service?</h2>
              <div className="space-y-4">
                {[
                  "Experienced motorcycle technicians",
                  "Genuine and OEM-equivalent parts",
                  "Quick turnaround times",
                  "Warranty on workmanship",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/motor3.jpg" alt="Motorcycle repairs" fill className="object-cover" />
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
              { step: "1", title: "Book", desc: "Tell us your bike and concerns" },
              { step: "2", title: "Inspect", desc: "Diagnostic and visual assessment" },
              { step: "3", title: "Service/Repair", desc: "Carry out agreed work" },
              { step: "4", title: "Test & Handover", desc: "Road test and collection" },
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
            <p className="text-lg text-gray-600">Motorcycle service basics</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Which brands do you service?", a: "We service most common brands. Share your make/model for confirmation." },
              { q: "How long does a service take?", a: "Routine services are usually same-day; repairs depend on parts availability." },
              { q: "Do you provide warranty?", a: "Yes, 3-month workmanship warranty on services carried out." },
              { q: "Can you source parts?", a: "Yes, we supply and fit genuine/OE-equivalent parts." },
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