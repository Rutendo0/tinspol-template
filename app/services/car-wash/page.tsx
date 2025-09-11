import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Droplets, ArrowLeft, Clock, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CarWashPage() {
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
                  Premium Car Care
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Professional Car Wash 
                  <span className="text-red-600">Services</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Complete car cleaning services from basic wash to premium detailing. Keep your vehicle looking its best
                  with our professional car care services and eco-friendly products.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <Link href="/quote" className="flex items-center space-x-2">
                      <span>Book Car Wash</span>
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
                  src="/carwash.jpg"
                  alt="Professional car wash service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Car Wash Packages</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect package for your vehicle
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Wash",

                features: [
                  "Exterior wash & rinse",
                  "Wheel cleaning",
                  "Basic interior vacuum",
                  "Window cleaning"
                ],
                popular: false
              },
              {
                title: "Premium Wash",
                features: [
                  "Everything in Basic",
                  "Tire shine application",
                  "Dashboard cleaning",
                  "Interior wipe down",
                  "Air freshener"
                ],
                popular: true
              },
              {
                title: "Full Valet",
                features: [
                  "Everything in Premium",
                  "Wax application",
                  "Deep interior cleaning",
                  "Leather conditioning",
                  "Engine bay cleaning"
                ],
                popular: false
              }
            ].map((pkg, index) => (
              <Card key={index} className={`relative shadow-lg ${pkg.popular ? 'border-red-500 border-2' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-red-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${pkg.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`}
                    asChild
                  >
                    <Link href="/quote">Choose Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">
              Extra services to keep your car in perfect condition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Paint Protection",
                desc: "Ceramic coating and paint protection services",
              },
              {
                icon: Droplets,
                title: "Interior Detailing",
                desc: "Deep cleaning and conditioning of all interior surfaces",
              },
              {
                icon: Wrench,
                title: "Engine Cleaning",
                desc: "Professional engine bay cleaning and degreasing",
              },
              {
                icon: CheckCircle,
                title: "Headlight Restoration",
                desc: "Restore cloudy headlights to like-new condition",
              }
            ].map((service, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Car Wash?</h2>
              <div className="space-y-4">
                {[
                  "Eco-friendly cleaning products",
                  "Professional trained staff",
                  "State-of-the-art equipment",
                  "Quick and efficient service",
                  "Competitive pricing",
                  "Customer satisfaction guarantee",
                  "Convenient location and hours",
                  "Loyalty program available"
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
                src="/carwash2.jpg"
                alt="Professional car washing"
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
              Common questions about our car wash services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How long does a full valet take?",
                a: "A full valet typically takes up to 3 days depending on vehicle size and condition.",
              },

              {
                q: "Are your cleaning products safe for my car?",
                a: "Absolutely! We use only high-quality, car-safe cleaning products that won't damage your vehicle's paint, interior, or other surfaces.",
              },
              {
                q: "Do you offer membership or loyalty programs?",
                a: "Yes, we offer a loyalty program with discounts for regular customers. Ask about our monthly unlimited wash packages for the best value.",
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