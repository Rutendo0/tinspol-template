import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Settings, ArrowLeft, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SuspensionPage() {
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
                  Suspension Specialists
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Suspension Repairs & 
                  <span className="text-red-600">Fitments</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professional suspension system repairs, replacements, and upgrades. Improve your vehicle's handling,
                  comfort, and safety with our expert suspension services and quality parts.
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
                <Image
                  src="/suspension.png"
                  alt="Professional suspension repair service"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Suspension Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete suspension system care for optimal ride comfort and handling. Backed by a 3-month warranty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Shock Absorber Replacement",
                desc: "Professional installation of quality shock absorbers for improved ride comfort",
              },
              {
                icon: Wrench,
                title: "Control Arm",
                desc: "Control arm inspection and replacement for precise steering and stable handling",
              },
              {
                icon: Shield,
                title: "Wheel Alignment",
                desc: "Professional wheel alignment to restore proper handling and tyre life",
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

      {/* Suspension Components */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Suspension Components</h2>
            <p className="text-lg text-gray-600">These are some common components of a vehicle suspension system</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Shock Absorbers",
              "Coil Springs (depending on model)",
              "Control Arms",
              "Stabilizer Links",
              "Stabilizer Bar Bushes",
              "Steering Knuckle",
              "Wheel Hub & Bearings",
              "Tie Rod Ends",
              "Leaf Springs",
              "D-Bushes",
              "Shackle Bushes",
              "Bump Stops",
            ].map((component, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{component}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need Suspension Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs You Need Suspension Work</h2>
              <div className="space-y-4">
                {[
                  "Vehicle bounces excessively after hitting bumps",
                  "Uneven tyre wear patterns",
                  "Vehicle pulls to one side while driving",
                  "Nose dives when braking",
                  "Excessive body roll when cornering",
                  "Visible fluid leaks from shock absorbers",
                  "Clunking or rattling noises over bumps",
                  "Vehicle sits lower on one side",
                ].map((sign, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/suspension2.jpg"
                alt="Suspension system components"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about suspension services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How often should suspension components be replaced?",
                a: "Shock absorbers typically last 50,000-100,000 km depending on driving conditions. Springs can last longer, but should be inspected regularly for wear and damage.",
              },
              {
                q: "Can I drive with worn suspension?",
                a: "While possible, worn suspension affects safety, handling, and tyre wear. It's recommended to address suspension issues promptly to maintain vehicle safety and performance.",
              },
              {
                q: "Do you offer performance suspension upgrades?",
                a: "Yes, we offer performance suspension upgrades including sport shocks, lowering springs, and complete coilover systems for improved handling and appearance.",
              },
              {
                q: "How long does suspension work take?",
                a: "Simple shock replacement can take 2-4 hours, while complete suspension overhauls may require 1-2 days depending on the complexity and parts availability.",
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

      <Footer />
      <MobileCTA />
    </div>
  )
}