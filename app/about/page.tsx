import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Award, Users, Clock, Wrench, Star, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Established 2010</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Zimbabwe's Trusted Automotive Repair Specialists
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For over 13 years, Tinspol Motors has been providing professional automotive repair services to
                thousands of satisfied customers across Zimbabwe. We combine traditional craftsmanship with modern
                technology to deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+263123456789">Call Now</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/hero-workshop.jpg"
                alt="Tinspol Motors professional workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "15,000+", label: "Happy Customers" },
              { icon: Wrench, number: "13+", label: "Years Experience" },
              { icon: CheckCircle, number: "98%", label: "Customer Satisfaction" },
              { icon: Clock, number: "24hr", label: "Average Turnaround" },
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <stat.icon className="h-12 w-12 text-primary mx-auto" />
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">
                Built on a foundation of quality, trust, and customer satisfaction
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Tinspol Motors was founded in 2010 with a simple mission: to provide honest, reliable, and
                  professional automotive repair services to the people of Zimbabwe. What started as a small workshop
                  with just two mechanics has grown into one of the most trusted automotive service centers in the
                  country.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our founder, with over 20 years of experience in the automotive industry, recognized the need for a
                  service center that combined technical expertise with genuine customer care. Today, we continue to
                  uphold those same values that built our reputation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We've invested heavily in modern diagnostic equipment, ongoing staff training, and maintaining the
                  highest standards of workmanship. Our commitment to excellence has earned us the trust of thousands of
                  customers who return to us year after year.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/motor-mechanics.jpg"
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
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality & Reliability",
                description:
                  "We use only genuine or OEM equivalent parts and follow manufacturer specifications to ensure lasting repairs.",
              },
              {
                icon: CheckCircle,
                title: "Honest Communication",
                description:
                  "We provide transparent pricing, clear explanations, and honest assessments of your vehicle's needs.",
              },
              {
                icon: Star,
                title: "Customer First",
                description:
                  "Your satisfaction is our priority. We go above and beyond to ensure you're completely happy with our service.",
              },
              {
                icon: Award,
                title: "Professional Excellence",
                description:
                  "Our certified technicians undergo continuous training to stay current with the latest automotive technologies.",
              },
              {
                icon: Target,
                title: "Timely Service",
                description:
                  "We respect your time and work efficiently to get you back on the road as quickly as possible.",
              },
              {
                icon: Users,
                title: "Community Focus",
                description:
                  "We're proud to serve our local community and contribute to keeping Zimbabwe's vehicles running safely.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
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
            <h2 className="text-3xl font-bold mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600">Recognized expertise you can trust</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "ASE Certified",
                description: "Automotive Service Excellence certification for all our technicians",
              },
              {
                title: "ISO 9001",
                description: "Quality management system certification for consistent service delivery",
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
              <Card key={index} className="text-center">
                <CardHeader>
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{cert.description}</CardDescription>
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
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600">How we ensure quality results every time</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Initial Assessment",
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
                title: "Thorough Testing",
                description: "Complete testing and quality checks before delivery",
              },
              {
                step: "5",
                title: "Follow-up Care",
                description: "Warranty support and ongoing maintenance recommendations",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Guarantees</h2>
            <p className="text-xl opacity-90">Your peace of mind is our commitment</p>
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
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardHeader className="text-center">
                  <guarantee.icon className="h-12 w-12 mx-auto mb-4" />
                  <CardTitle>{guarantee.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">{guarantee.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your vehicle's care</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "James Tinspol",
                role: "Founder & Master Technician",
                experience: "20+ years experience",
                specialties: ["Engine Diagnostics", "Transmission Repair", "Electrical Systems"],
              },
              {
                name: "Michael Chikwanha",
                role: "Senior Panel Beater",
                experience: "15+ years experience",
                specialties: ["Collision Repair", "Paint Matching", "Body Restoration"],
              },
              {
                name: "Sarah Mukamuri",
                role: "Service Manager",
                experience: "10+ years experience",
                specialties: ["Customer Relations", "Quality Control", "Service Coordination"],
              },
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  <Badge variant="secondary">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Specialties:</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
                href="https://wa.me/263123456789"
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
