import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Hammer, ArrowLeft, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PanelBeatingPage() {
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
                  Collision Repair Experts
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Panel Beating & 
                  <span className="text-red-600">Body Repairs</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professional collision repair and panel beating services. We restore your vehicle to its original
                  condition with quality workmanship, attention to detail, and modern equipment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <Link href="/quote" className="flex items-center space-x-2">
                      <span>Get Repair Quote</span>
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
                  src="/panel.jpg"
                  alt="Professional panel beating service"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Panel Beating Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete collision repair and body work services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "Dent Repair",
                desc: "Professional dent removal using modern techniques and equipment",
              },
              {
                icon: Wrench,
                title: "Panel Replacement",
                desc: "Complete panel replacement with genuine or OEM equivalent parts",
              },
              {
                icon: Shield,
                title: "Spray Painting",
                desc: "Professional spray painting with high-quality finishes",
              },

              {
                icon: Hammer,
                title: "Chassis Straightening",
                desc: "Professional chassis alignment and straightening services",
              },
              {
                icon: Wrench,
                title: "Bumper Repair",
                desc: "Plastic bumper repair and replacement services",
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

      {/* Repair Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Repair Process</h2>
            <p className="text-lg text-gray-600">
              Professional approach to collision repair
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                desc: "Thorough damage assessment and repair estimate"
              },
              {
                step: "2", 
                title: "Planning",
                desc: "Detailed repair plan and parts ordering"
              },
              {
                step: "3",
                title: "Repair Work",
                desc: "Professional panel beating and bodywork"
              },
              {
                step: "4",
                title: "Finishing",
                desc: "Spray painting and buffing, with quality check"
              }
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

      {/* Insurance Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance Work Welcome</h2>
              <p className="text-lg text-gray-600 mb-6">
                We work with all major insurance companies to make your claim process as smooth as possible.
              </p>
              <div className="space-y-4">
                {[
                  "Direct billing to insurance companies",
                  "Assistance with claim paperwork",
                  "Approved by major insurers",
                  "Quality repairs that meet insurance standards",
                  "Warranty on all insurance work",
                  "Free estimates for insurance claims"
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
                src="/panel2.jpg"
                alt="Insurance claim work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about panel beating services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How long does panel beating work take?",
                a: "Minor repairs can take 1-3 days, while major collision repairs may take 1-2 weeks depending on the extent of damage and parts availability.",
              },
              {
                q: "Will the repair be noticeable?",
                a: "Our skilled technicians use professional techniques and color matching to ensure repairs blend seamlessly with your vehicle's original finish.",
              },
              {
                q: "Do you provide warranties on repairs?",
                a: "Yes, we provide a comprehensive 3-month warranty on all panel beating work, including paint and workmanship.",
              },
              {
                q: "Can you work with my insurance company?",
                a: "Absolutely! We work with all major insurance companies and can handle the paperwork and direct billing to make the process easier for you.",
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