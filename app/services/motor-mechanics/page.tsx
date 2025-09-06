import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Wrench, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MotorMechanicsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Back Button */}
              <div className="mb-6">
                <Button 
                  variant="outline" 
                  asChild
                  className="border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm"
                >
                  <Link href="/services" className="flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Services</span>
                  </Link>
                </Button>
              </div>

              <Badge className="mb-4 bg-red-600 text-white hover:bg-red-700">Professional Service</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Motor Mechanics & 
                <span className="block text-red-500 gradient-text">Engine Repair</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Expert engine diagnostics, repairs, and maintenance services. Our certified mechanics use quality
                diagnostic equipment to keep your vehicle running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-black">
                  <a href="tel:+263776556717">Call Now</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/image1.jpg"
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

      {/* Routine Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Routine Service Packages</h2>
            <p className="text-lg text-gray-600">Professional maintenance schedules to keep your vehicle running perfectly</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "A SERVICE",
                interval: "Every 5,000 km",
                duration: "2 Hours",
                color: "from-blue-500 to-blue-600",
                items: [
                  "Drive belts - Inspect and adjust as required",
                  "Engine oil - Replace",
                  "Engine oil filter - Replace", 
                  "Cooling system - Check level and top up if required",
                  "Idle speed - Check and adjust as required",
                  "Air filter - Clean and inspect",
                  "Fuel filter, fuel lines and hoses - Check for leaks",
                  "Battery electrolyte - Check level and top up if required",
                  "Brake fluid - Check level and top up if required",
                  "Clutch fluid - Check and top if required",
                  "Power steering fluid - Check level and top up if required"
                ]
              },
              {
                name: "B SERVICE", 
                interval: "Every 10,000 km",
                duration: "3 Hours",
                color: "from-green-500 to-green-600",
                items: [
                  "All A Service items included",
                  "Fuel filter/Spark plugs - Replace",
                  "Heater plugs - Inspect and adjust as required",
                  "Brake and clutch pedals - Check for free play and adjust",
                  "Parking brake - Inspect and adjust as required",
                  "Disc brakes - Inspect",
                  "Drum brakes - Inspect", 
                  "Power steering lines and fluid - Check condition",
                  "Gearbox oil level - Check level and top up if required"
                ]
              },
              {
                name: "C SERVICE",
                interval: "Every 20,000 km", 
                duration: "4 Hours",
                color: "from-red-500 to-red-600",
                items: [
                  "All B Service items included",
                  "Air filter - Replace",
                  "Fuel filter/Spark plugs - Replace",
                  "Ignition timing - Check and adjust as required",
                  "Idle mixture (leaded fuel) - Check and adjust",
                  "Evaporated system (if fitted) - Inspect",
                  "Brake lines, hoses and connectors - Inspect for leaks",
                  "Power brake unit and hoses - Inspect condition",
                  "Steering operations and gear housing - Inspect", 
                  "Steering linkages, racking guides and tie rod ends - Inspect",
                  "Bolts and nuts on chassis and body - Tighten"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader className={`bg-gradient-to-r ${service.color} text-white rounded-t-lg`}>
                  <CardTitle className="text-2xl font-bold">{service.name}</CardTitle>
                  <CardDescription className="text-white/90 text-lg">{service.interval}</CardDescription>
                  <Badge className="bg-white/20 text-white w-fit">Labour: {service.duration}</Badge>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-sm">
                    {service.items.slice(0, 6).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                    {service.items.length > 6 && (
                      <li className="text-gray-500 font-medium">+ {service.items.length - 6} more items</li>
                    )}
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <Link href="/quote">Book {service.name}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-16">
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
