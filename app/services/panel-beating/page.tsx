import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Hammer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PanelBeatingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Collision Repair Experts</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Panel Beating & Body Repairs</h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional collision repair and panel beating services. We restore your vehicle to its original
                condition with quality workmanship and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Repair Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+263123456789">Call Now</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/panel-beating.jpg"
                alt="Professional panel beating service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Body Repair Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Hammer, title: "Dent Removal", desc: "Professional dent repair and panel straightening" },
              { icon: CheckCircle, title: "Scratch Repair", desc: "Paint scratch removal and touch-up work" },
              { icon: Shield, title: "Collision Repair", desc: "Complete accident damage restoration" },
              { icon: Clock, title: "Rust Treatment", desc: "Rust removal and prevention treatment" },
              { icon: Hammer, title: "Panel Replacement", desc: "New panel fitting and alignment" },
              { icon: CheckCircle, title: "Paint Matching", desc: "Color matching and professional spray work" },
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

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Repair Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Assessment", desc: "Detailed damage evaluation and quote" },
              { step: "2", title: "Insurance", desc: "Insurance claim assistance if needed" },
              { step: "3", title: "Repair Work", desc: "Professional panel beating and bodywork" },
              { step: "4", title: "Paint & Finish", desc: "Color matching and spray painting" },
              { step: "5", title: "Quality Check", desc: "Final inspection and delivery" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Repair Pricing Guide</h2>
            <Card>
              <CardHeader>
                <CardTitle>Body Repair Costs</CardTitle>
                <CardDescription>Professional collision repair with warranty</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Minor Dent Repair</span>
                  <span className="font-semibold">$100 - $300</span>
                </div>
                <div className="flex justify-between">
                  <span>Scratch Repair & Touch-up</span>
                  <span className="font-semibold">$150 - $500</span>
                </div>
                <div className="flex justify-between">
                  <span>Panel Replacement</span>
                  <span className="font-semibold">$500 - $1,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Full Panel Respray</span>
                  <span className="font-semibold">$400 - $800</span>
                </div>
                <div className="flex justify-between">
                  <span>Major Collision Repair</span>
                  <span className="font-semibold">$2,000 - $8,000</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    * Final pricing depends on damage extent and vehicle type. Insurance claims welcome.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Insurance Claims Welcome</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We work directly with all major insurance companies to make your claim process smooth and hassle-free. Our
            team will handle the paperwork and communicate directly with your insurer.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Free damage assessment",
              "Insurance paperwork assistance",
              "Direct billing available",
              "Approved repair facility",
            ].map((benefit, index) => (
              <Card key={index} className="p-6">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-medium">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Body Repair Work?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free assessment and quote for your vehicle's body repair needs.
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
