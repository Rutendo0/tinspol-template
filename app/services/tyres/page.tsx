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
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              
              <div className="space-y-4">
                <Badge className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100">
                  Tyre Specialists
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Tyre Repairs & 
                  <span className="text-red-600">Fitments</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Complete tyre services including repairs, replacements, balancing, and alignment. We stock quality tyres
                  from leading brands for all vehicle types and budgets.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <Link href="/quote" className="flex items-center space-x-2">
                      <span>Get Tyre Quote</span>
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
                  src="/tyres.jpg"
                  alt="Professional tyre fitting service"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tyre Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional tyre services for all vehicle types
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Tyre Fitting",
                desc: "Professional tyre fitting with proper balancing and alignment",
              },
              {
                icon: Shield,
                title: "Tyre Repairs",
                desc: "Puncture repairs to extend tyre life",
              },
              {
                icon: CheckCircle,
                title: "Precision Wheel Balancing",
                desc: "Precision wheel balancing for smooth driving and stability",
              },
              {
                icon: Clock,
                title: "Professional Wheel Alignment",
                desc: "Professional wheel alignment to improve smooth driving and ensure tyre longevity",
              },
              {
                icon: Wrench,
                title: "Tyre Rotation",
                desc: "Regular tyre rotation service to ensure even wear patterns",
              },
              {
                icon: Shield,
                title: "Pressure Checks",
                desc: "Regular tyre pressure monitoring and adjustment service",
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

      {/* Tyre Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Tyre Brands</h2>
            <p className="text-lg text-gray-600">
              We stock tyres from leading manufacturers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Bridgestone",
              "Michelin", 
              "Continental",
              "Pirelli",
              "Goodyear",
              "Dunlop",
              "Yokohama",
              "Hankook"
            ].map((brand, index) => (
              <Card key={index} className="text-center p-6 shadow-md">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-gray-900">{brand}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about our tyre services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How often should I replace my tyres?",
                a: "Tyres should typically be replaced every 40,000-60,000 km or when tread depth reaches 1.6mm. However, this varies based on driving conditions and tyre quality.",
              },
              {
                q: "What's included in wheel alignment?",
                a: "Our wheel alignment service includes checking and adjusting camber, caster, and toe angles to manufacturer specifications, plus a test drive.",
              },
              {
                q: "Can you repair run-flat tyres?",
                a: "Run-flat tyres can sometimes be repaired depending on the damage location and severity. We'll assess each case individually and advise accordingly.",
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