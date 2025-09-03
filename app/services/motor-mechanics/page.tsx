import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MotorMechanicsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Professional Service</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Motor Mechanics & Engine Repair</h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert engine diagnostics, repairs, and maintenance services. Our certified mechanics use the latest
                diagnostic equipment to keep your vehicle running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+263123456789">Call Now</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/motor-mechanics.jpg"
                alt="Professional motor mechanics at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Fix</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: "Engine Diagnostics", desc: "Computer diagnostics and fault finding" },
              { icon: CheckCircle, title: "Engine Repairs", desc: "Complete engine overhauls and repairs" },
              { icon: Shield, title: "Preventive Maintenance", desc: "Regular servicing to prevent breakdowns" },
              { icon: Clock, title: "Quick Turnaround", desc: "Most repairs completed within 24-48 hours" },
              { icon: Wrench, title: "Transmission Service", desc: "Automatic and manual transmission repairs" },
              { icon: CheckCircle, title: "Cooling System", desc: "Radiator, water pump, and thermostat repairs" },
            ].map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Diagnostic Assessment",
                    desc: "Complete computer diagnostic scan and visual inspection",
                  },
                  { step: "2", title: "Detailed Quote", desc: "Transparent pricing with no hidden costs" },
                  { step: "3", title: "Quality Repairs", desc: "Using genuine or OEM equivalent parts" },
                  { step: "4", title: "Testing & Warranty", desc: "Road test and 6-month warranty on all work" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Pricing Guide</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Typical Service Costs</CardTitle>
                  <CardDescription>Prices may vary based on vehicle make and complexity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Diagnostic Scan</span>
                    <span className="font-semibold">$25 - $50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minor Engine Repairs</span>
                    <span className="font-semibold">$100 - $500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Major Engine Overhaul</span>
                    <span className="font-semibold">$1,500 - $4,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transmission Service</span>
                    <span className="font-semibold">$200 - $800</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      * Final pricing depends on vehicle condition and parts required
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How long does a typical engine repair take?",
                a: "Most minor repairs are completed within 24-48 hours. Major overhauls may take 3-7 days depending on parts availability.",
              },
              {
                q: "Do you provide warranty on engine repairs?",
                a: "Yes, we provide a 6-month warranty on all engine repair work and parts used.",
              },
              {
                q: "Can you work on all vehicle makes?",
                a: "We service all major vehicle makes including Toyota, Honda, Ford, Mazda, Nissan, and more.",
              },
              {
                q: "Do you use genuine parts?",
                a: "We use genuine OEM parts when available, or high-quality OEM equivalent parts with warranty.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Fix Your Engine?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free diagnostic and quote today. Our expert mechanics are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="https://wa.me/263123456789" className="bg-green-600 hover:bg-green-700 border-green-600">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}
