import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CarWashPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Premium Car Care</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Professional Car Wash Services</h1>
              <p className="text-xl text-gray-600 mb-8">
                Complete car cleaning services from basic wash to premium detailing. Keep your vehicle looking its best
                with our professional car care services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/booking">Book Car Wash</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+263776556717">Call Now</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/car-wash.jpg" alt="Professional car wash service" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Car Wash Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Wash",
                price: "$15",
                icon: Droplets,
                features: ["Exterior wash & rinse", "Wheel cleaning", "Basic interior vacuum", "Dashboard wipe down"],
              },
              {
                title: "Premium Wash",
                price: "$25",
                icon: Shield,
                features: [
                  "Everything in Basic",
                  "Interior deep clean",
                  "Seat cleaning",
                  "Window cleaning (inside & out)",
                  "Tire shine",
                ],
              },
              {
                title: "Full Valet",
                price: "$45",
                icon: CheckCircle,
                features: [
                  "Everything in Premium",
                  "Engine bay cleaning",
                  "Wax application",
                  "Leather conditioning",
                  "Air freshener",
                ],
              },
            ].map((pkg, index) => (
              <Card key={index} className="text-center relative">
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader>
                  <pkg.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">{pkg.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Add-On Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { service: "Engine Wash", price: "$15" },
              { service: "Undercarriage Wash", price: "$10" },
              { service: "Carpet Shampooing", price: "$20" },
              { service: "Headlight Restoration", price: "$25" },
              { service: "Paint Protection", price: "$30" },
              { service: "Odor Elimination", price: "$15" },
              { service: "Leather Treatment", price: "$20" },
              { service: "Chrome Polishing", price: "$15" },
            ].map((addon, index) => (
              <Card key={index} className="text-center p-4">
                <h3 className="font-semibold mb-2">{addon.service}</h3>
                <p className="text-primary font-bold text-lg">{addon.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book Online", desc: "Choose your package and preferred time slot" },
              { step: "2", title: "Drop Off", desc: "Bring your vehicle to our facility" },
              { step: "3", title: "Professional Clean", desc: "Our team performs the selected service" },
              { step: "4", title: "Quality Check", desc: "Final inspection and pickup notification" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Clean Car?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your car wash service today and drive away with a spotless vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Book Car Wash</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="https://wa.me/263776556717" className="bg-green-600 hover:bg-green-700 border-green-600">
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
