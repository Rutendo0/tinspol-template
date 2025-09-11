import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Shield, Wrench, Truck, CheckCircle, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SparesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100">
                  Spares & Parts
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Genuine Spares & 
                  <span className="text-red-600"> OEM Parts</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Quality OEM and OEM-equivalent parts for most makes and models. Professional fitment by qualified
                  technicians, fast sourcing, and reliable after-service support.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <Link href="/tyres-and-spares" className="flex items-center space-x-2">
                      <span>Request Part / Quote</span>
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
                <Image
                  src="/spares.jpeg"
                  alt="Spares and parts service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Supply & Fit</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              OEM and high-quality aftermarket parts with professional installation and a 3-month workmanship warranty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Brakes",
                desc: "Pads, discs, drums, shoes, sensors, and hydraulics",
              },
              {
                icon: Wrench,
                title: "Clutch & Hydraulics",
                desc: "Clutch kits, master & slave cylinders, and related parts",
              },
              {
                icon: Package,
                title: "Suspension Parts",
                desc: "Shocks, control arms, tie rods, ball joints, and bushings",
              },
              {
                icon: Shield,
                title: "Glass & Windscreens",
                desc: "Windscreens, side glass, and professional installation",
              },
              {
                icon: Wrench,
                title: "Auto Electrics",
                desc: "Starters, alternators, sensors, lighting, and wiring",
              },
              {
                icon: Package,
                title: "Batteries",
                desc: "Supply and fit popular brands with warranty",
              },
              {
                icon: Package,
                title: "Exhaust Systems",
                desc: "Exhausts, silencers, and fittings",
              },
              {
                icon: Shield,
                title: "Service Kits",
                desc: "Filters, plugs, belts, and fluids",
              },
              {
                icon: Package,
                title: "Engine Oils",
                desc: "Includes Veedol oils and other major brands",
              },
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Buy From Us?</h2>
              <div className="space-y-4">
                {[
                  "Quality OEM and OEM-equivalent parts",
                  "Professional fitment by qualified technicians",
                  "Fast sourcing for most makes & models",
                  "3-month workmanship warranty on fitment",
                  "Transparent pricing and reliable support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/spare.png"
                alt="Parts installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple 4-step process to get you back on the road</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Send Details", desc: "Share vehicle details and part info/photos" },
              { step: "2", title: "Sourcing", desc: "We source OEM/OE-equivalent parts quickly" },
              { step: "3", title: "Fitment / Pick-Up", desc: "Professional fitment or collection available" },
              { step: "4", title: "Warranty", desc: "3-month workmanship warranty on fitment" },
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

      {/* Accessories & Add-ons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Accessories & Add-ons</h2>
            <p className="text-gray-600">Bull bars, tonneau covers, batteries (Exide, Taurus), Veedol oils and more. Placeholders for images will be added later.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Bull bars", image: "/bars.jpeg" },
              { label: "Tonneau covers", image: "/covers.jpg" },
              { label: "Batteries (Exide, Taurus)", image: "/battery.png" },
              { label: "Veedol engine oils", image: "/oil.png" },
              { label: "Car mats", image: "/mats.png" },
              { label: "Rubberising", image: "/rubber.jpeg" },
            ].map((item, i) => (
              <Card key={i} className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-black">{item.label}</CardTitle>
                  <CardDescription>Supply and fit on request.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-40 w-full rounded-md overflow-hidden bg-gray-100">
                    <Image src={item.image} alt={item.label} fill className="object-cover" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href="https://wa.me/263776556717?text=Hi%20Tinspol%2C%20I%27m%20interested%20in%20accessories%20(Batteries%2C%20Car%20mats%2C%20Bull%20bars%2C%20Rubberising%2C%20Tonneau%20covers)." target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our spares & parts service</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Do you provide a warranty?",
                a: "Yes, parts carry manufacturer warranty and we provide a 3-month workmanship warranty on all fitments.",
              },
              {
                q: "How long does sourcing take?",
                a: "Most parts are sourced within 24-72 hours depending on availability and vehicle make.",
              },
              {
                q: "Do you supply OEM parts only?",
                a: "We supply both genuine OEM and high-quality OEM-equivalent parts. We’ll recommend the best option for your budget and needs.",
              },
              {
                q: "Can you fit parts I already bought?",
                a: "We recommend sourcing through us to guarantee compatibility and warranty. If you already have parts, we can assess and advise.",
              },
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

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <Badge className="mb-4 bg-red-600 text-white">Need a part?</Badge>
              <h3 className="text-2xl font-bold text-black mb-4">Request a Part/Quote</h3>
              <p className="text-gray-600 mb-6">Send us your vehicle details and photos of the part. We'll source and quote fast.</p>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/tyres-and-spares">Request Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}