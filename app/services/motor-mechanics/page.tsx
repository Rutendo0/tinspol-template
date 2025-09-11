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
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100">
                  Engine Specialists
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Motor Mechanics & 
                  <span className="text-red-600">Engine Repairs</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professional engine diagnostics, repairs, and maintenance services. From minor tune-ups to major overhauls,
                  our certified mechanics deliver quality workmanship with genuine parts.
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
                  src="/vehicle.jpeg"
                  alt="Professional motor mechanics service"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Engine Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive engine care from diagnostics to complete rebuilds
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Engine Diagnostics",
                desc: "Advanced computer diagnostics to identify engine problems quickly and accurately",
              },
              {
                icon: Shield,
                title: "Engine Repairs",
                desc: "Professional repairs for all engine components using quality parts and tools",
              },
              {
                icon: CheckCircle,
                title: "Engine Overhauls",
                desc: "Complete engine rebuilds and overhauls for maximum performance and longevity",
              },
              {
                icon: Clock,
                title: "Preventive Maintenance",
                desc: "Regular servicing to prevent costly repairs and extend engine life",
              },
              {
                icon: Wrench,
                title: "Timing Belt Replacement",
                desc: "Timing belt replacement and related component servicing",
              },
              {
                icon: Shield,
                title: "Cooling System",
                desc: "Radiator, water pump, and cooling system repairs and maintenance",
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Mechanics?</h2>
              <div className="space-y-4">
                {[
                  "Certified and experienced mechanics",
                  "State-of-the-art diagnostic equipment",
                  "Genuine and OEM equivalent parts",
                  "Comprehensive warranty on all work",
                  "Transparent pricing with no hidden costs",
                  "Quick turnaround times",
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
                src="/vehicle1.jpg"
                alt="Professional mechanics at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Diagnostic Assessment",
                    desc: "Complete computer diagnostic scan and comprehensive visual inspection",
                  },
                  { 
                    step: "2", 
                    title: "Detailed Quote", 
                    desc: "Transparent pricing with no hidden costs or surprises",
                  },
                  { 
                    step: "3", 
                    title: "Quality Repairs", 
                    desc: "Using genuine or OEM equivalent parts with expert craftsmanship",
                  },
                  { 
                    step: "4", 
                    title: "Testing & Warranty", 
                    desc: "Comprehensive road test and 3-month warranty on all work",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              Get answers to common questions about our motor mechanics services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How long does a typical engine repair take?",
                a: "Most minor repairs are completed within 24-48 hours. Major overhauls may take 3-7 days depending on parts availability and complexity of the work required.",
              },
              {
                q: "Do you provide warranty on engine repairs?",
                a: "Yes, we provide a comprehensive 3-month warranty on all engine repair work and parts used. This gives you peace of mind and confidence in our quality service.",
              },
              {
                q: "Can you work on all vehicle makes?",
                a: "We service all major vehicle makes including Toyota, Honda, Ford, Mazda, Nissan, Volkswagen, BMW, Mercedes-Benz, and many more. Our technicians are trained on various vehicle systems.",
              },
              {
                q: "Do you use genuine parts?",
                a: "We prioritize genuine OEM parts when available. When not available, we use high-quality OEM equivalent parts that meet or exceed original specifications, all backed by warranty.",
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