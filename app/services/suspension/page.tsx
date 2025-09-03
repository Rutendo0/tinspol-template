import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SuspensionPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Suspension Specialists</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Suspension Repairs & Fitments</h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional suspension system repairs, replacements, and upgrades. Improve your vehicle's handling,
                comfort, and safety with our expert suspension services.
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
                src="/images/suspension-repair.jpg"
                alt="Professional suspension repair service"
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
          <h2 className="text-3xl font-bold text-center mb-12">Suspension Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Settings, title: "Shock Absorber Replacement", desc: "Quality shock absorbers for smooth ride" },
              { icon: CheckCircle, title: "Strut Replacement", desc: "Complete strut assembly service" },
              { icon: Shield, title: "Spring Replacement", desc: "Coil and leaf spring repairs" },
              { icon: Clock, title: "Wheel Alignment", desc: "Precision alignment for even tire wear" },
              { icon: Settings, title: "Ball Joint Replacement", desc: "Upper and lower ball joint service" },
              { icon: CheckCircle, title: "Suspension Bushings", desc: "Rubber bushing replacement service" },
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

      {/* Warning Signs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Signs You Need Suspension Repair</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Bumpy or rough ride",
              "Vehicle pulls to one side",
              "Uneven tire wear",
              "Nose dives when braking",
              "Excessive bouncing",
              "Steering wheel vibration",
              "Difficulty steering",
              "Vehicle sits lower on one side",
            ].map((sign, index) => (
              <Card key={index} className="text-center p-6">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-medium">{sign}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Service Pricing</h2>
            <Card>
              <CardHeader>
                <CardTitle>Suspension Service Costs</CardTitle>
                <CardDescription>Professional suspension repairs with warranty</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Shock Absorber (per pair)</span>
                  <span className="font-semibold">$150 - $400</span>
                </div>
                <div className="flex justify-between">
                  <span>Strut Assembly (per pair)</span>
                  <span className="font-semibold">$300 - $800</span>
                </div>
                <div className="flex justify-between">
                  <span>Coil Springs (per pair)</span>
                  <span className="font-semibold">$200 - $500</span>
                </div>
                <div className="flex justify-between">
                  <span>Wheel Alignment</span>
                  <span className="font-semibold">$80 - $120</span>
                </div>
                <div className="flex justify-between">
                  <span>Ball Joints (per pair)</span>
                  <span className="font-semibold">$120 - $300</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    * Prices include parts and labor. Final cost depends on vehicle make and model.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Improve Your Ride Quality Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Professional suspension service with quality parts and expert installation.
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
