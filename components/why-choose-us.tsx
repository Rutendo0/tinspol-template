import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Clock, Award, Wrench, MapPin, Star, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All work backed by comprehensive warranty and quality assurance standards.",
    statLabel: "Guaranteed"
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Experienced technicians dedicated to providing exceptional vehicle repair services.",
    statLabel: "Technicians"
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "Efficient service delivery without compromising on quality standards.",
    statLabel: "Available"
  },
  {
    icon: Award,
    title: "Genuine Parts",
    description: "Quality OEM and aftermarket parts from trusted suppliers for lasting repairs.",
    statLabel: "Authentic"
  },
  {
    icon: Wrench,
    title: "Quality Equipment",
    description: "Professional diagnostic tools and repair equipment for accurate service.",
    statLabel: "Equipment"
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Easily accessible location in Harare with customer-friendly facilities.",
    statLabel: "Location"
  },
]

export function WhyChooseUs() {
  return (
    <>
      {/* Main Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-0.5 bg-red-600"></div>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <div className="w-12 h-0.5 bg-red-600"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6"> 
              <span className="block text-red-600">Tinspol Motors?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">{feature.stat}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{feature.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-red-600 rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Difference?</h3>
              <p className="text-white mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Tinspol Motors for all their automotive needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white hover:bg-black text-red-600 font-semibold"
                >
                  <Link href="/quote">Get Your Quote</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className="border-red-600 text-red-600 hover:bg-black hover:text-white font-semibold"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}