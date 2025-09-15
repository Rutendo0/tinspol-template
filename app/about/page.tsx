import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Award, Users, Clock, Wrench, Star, Target, ArrowLeft, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/vehicle1.jpg"
            alt="Tinspol Motors professional workshop"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
             
              <div className="space-y-6">
                <Badge className="bg-red-600/20 text-red-400 border-red-500/30 backdrop-blur-sm">
                  100% Zimbabwean Owned
                </Badge>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Zimbabwe's Trusted 
                  <span className="block text-red-500">Vehicle Repair Specialists</span>
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <Link href="/quote" className="flex items-center space-x-2">
                      <span>Get Free Quote</span>
                      <CheckCircle className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="bg-red-600 text-white hover:bg-white hover:text-black backdrop-blur-sm">
                    <a href="tel:+263776556717" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "20+", label: "Years Experience" },
              { icon: Wrench, number: "1000+", label: "Vehicles Serviced" },
              { icon: CheckCircle, number: "100%", label: "Customer Satisfaction" },
              { icon: Clock, number: "6 Days", label: "Weekly Service" },
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <stat.icon className="h-12 w-12 text-red-600 mx-auto" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600">
                Built on a foundation of quality, trust, and customer satisfaction
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Tinspol Motors is a full-service automotive repairing company offering a broad range of services that the Zimbabwean market relies on daily. We specialize in motor mechanics, suspension repairs and fitments, tyre repairs and fitments, car wash, panel beating, spares and body parts supplies, tyres supply, and routine services.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our experienced team recognizes the need for a service center that combines technical expertise with 
                  genuine customer care. We are committed to providing quality workmanship that meets international standards
                  while understanding the unique needs of Zimbabwean motorists.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We use quality diagnostic equipment, maintain high standards of workmanship, and focus on building lasting
                  relationships with our customers. Our commitment to excellence has earned us the trust of customers who
                  return to us for all their vehicle repair needs.
                </p>
              </div>
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image1.jpg"
                  alt="Tinspol Motors team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-red-600"></div>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Our Values</span>
              <div className="w-12 h-0.5 bg-red-600"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-black">Our Core Values</h2>
            <p className="text-xl text-gray-600">Accountability • Trust • Teamwork • Innovation • Professionalism • Honesty • Integrity</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Accountability",
                description:
                  "We take ownership of our work and stand by the quality of every repair and service we deliver.",
              },
              {
                icon: CheckCircle,
                title: "Trust",
                description:
                  "Transparent processes and honest communication that earn lifelong customer loyalty.",
              },
              {
                icon: Users,
                title: "Teamwork",
                description:
                  "A collaborative culture that empowers our technicians to deliver reliable results.",
              },
              {
                icon: Target,
                title: "Innovation",
                description:
                  "We continuously improve our tools and methods to provide efficient, safe, and modern services.",
              },
              {
                icon: Award,
                title: "Professionalism",
                description:
                  "Certified technicians, quality standards, and respect for our customers’ time and vehicles.",
              },
              {
                icon: Star,
                title: "Honesty & Integrity",
                description:
                  "We do the right thing—clear explanations, fair pricing, and ethical conduct at all times.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-black">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-red-600"></div>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Certifications</span>
              <div className="w-12 h-0.5 bg-red-600"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-black">Certifications & Standards</h2>
            <p className="text-xl text-gray-600">Recognized expertise you can trust</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "ASE Certified",
                description: "Automotive Service Excellence certification for all our technicians",
              },

              {
                title: "OEM Approved",
                description: "Authorized service center for major automotive manufacturers",
              },
              {
                title: "Safety Certified",
                description: "Workplace safety and environmental compliance certifications",
              },
            ].map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                <CardHeader>
                  <Award className="h-10 w-10 text-red-600 mx-auto mb-3" />
                  <CardTitle className="text-lg text-black">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{cert.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-red-600"></div>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Process</span>
              <div className="w-12 h-0.5 bg-red-600"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-black">Service Process</h2>
            <p className="text-xl text-gray-600">How we ensure quality results every time</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Diagnostic",
                description: "Comprehensive diagnostic evaluation using advanced equipment",
              },
              {
                step: "2",
                title: "Transparent Quote",
                description: "Detailed explanation of required work with upfront pricing",
              },
              {
                step: "3",
                title: "Quality Repairs",
                description: "Expert workmanship using genuine parts and proven techniques",
              },
              {
                step: "4",
                title: "Quality Control",
                description: "Complete testing and quality checks before delivery",
              },
              {
                step: "5",
                title: "After Services",
                description: "Warranty support and ongoing maintenance recommendations",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-black">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-red-500"></div>
              <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">Our Guarantees</span>
              <div className="w-12 h-0.5 bg-red-500"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Our Guarantees</h2>
            <p className="text-xl text-gray-300">Your peace of mind is our commitment</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "6-Month Warranty",
                description: "All repairs come with a comprehensive 6-month warranty on parts and labor",
              },
              {
                icon: CheckCircle,
                title: "Quality Guarantee",
                description: "If you're not satisfied with our work, we'll make it right at no extra cost",
              },
              {
                icon: Clock,
                title: "On-Time Promise",
                description: "We'll complete your service when promised or provide compensation for delays",
              },
            ].map((guarantee, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <guarantee.icon className="h-12 w-12 mx-auto mb-4 text-red-500" />
                  <CardTitle className="text-white">{guarantee.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{guarantee.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Tinspol Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust Tinspol Motors for all their automotive needs. Get your free
            quote today and discover why we're Zimbabwe's preferred automotive service center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://wa.me/263776556717"
                className="bg-green-600 hover:bg-green-700 text-white border-green-600"
              >
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
