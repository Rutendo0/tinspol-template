import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TyresPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Tyre Specialists</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Tyre Repairs & Fitments</h1>
              <p className="text-xl text-gray-600 mb-8">
                Complete tyre services including repairs, replacements, balancing, and alignment. We stock quality tyres
                from leading brands for all vehicle types.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Tyre Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+263123456789">Call Now</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/tyre-service.jpg"
                alt="Professional tyre fitting service"
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
          <h2 className="text-3xl font-bold text-center mb-12">Tyre Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wrench, title: "Tyre Fitting", desc: "Professional tyre installation and mounting" },
              { icon: CheckCircle, title: "Puncture Repairs", desc: "Quick and reliable puncture fixes" },
              { icon: Shield, title: "Wheel Balancing", desc: "Precision balancing for smooth driving" },
              { icon: Clock, title: "Wheel Alignment", desc: "Proper alignment for even wear" },
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

      {/* Tyre Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quality Tyre Brands</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              "Bridgestone",
              "Michelin",
              "Continental",
              "Dunlop",
              "Goodyear",
              "Pirelli",
              "Yokohama",
              "Falken",
              "Kumho",
              "Hankook",
            ].map((brand, index) => (
              <Card key={index} className="text-center p-6">
                <h3 className="font-semibold text-lg">{brand}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Tyre Service Pricing</h2>
            <Card>
              <CardHeader>
                <CardTitle>Service Costs</CardTitle>
                <CardDescription>Competitive pricing on all tyre services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Puncture Repair</span>
                  <span className="font-semibold">$15 - $25</span>
                </div>
                <div className="flex justify-between">
                  <span>Tyre Fitting (per tyre)</span>
                  <span className="font-semibold">$20 - $35</span>
                </div>
                <div className="flex justify-between">
                  <span>Wheel Balancing (per wheel)</span>
                  <span className="font-semibold">$15 - $25</span>
                </div>
                <div className="flex justify-between">
                  <span>Wheel Alignment</span>
                  <span className="font-semibold">$80 - $120</span>
                </div>
                <div className="flex justify-between">
                  <span>Budget Tyres (each)</span>
                  <span className="font-semibold">$60 - $150</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium Tyres (each)</span>
                  <span className="font-semibold">$150 - $400</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">* Tyre prices vary by size and brand. Installation included.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need New Tyres?</h2>
          <p className="text-xl mb-8 opacity-90">Get a quote on quality tyres with professional fitting service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">Get Tyre Quote</Link>
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
