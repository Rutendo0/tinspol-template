import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Clock, Award, Wrench, MapPin, Star, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react"
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
      <section className="relative py-28 bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden">
        {/* Section Indicator */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white via-red-200 to-white shadow-lg shadow-white/20"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-32 w-36 h-36 border-2 border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-28 h-28 border-2 border-red-300 rounded-full animate-pulse animation-delay-600"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/30 rounded-full animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-6 mb-24">
            <div className="inline-flex items-center space-x-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-white to-red-200 rounded-full"></div>
              <span className="text-white font-bold uppercase tracking-wider text-base px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">Why Choose Us</span>
              <div className="w-16 h-1 bg-gradient-to-l from-white to-red-200 rounded-full"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8"> 
              Why Choose <span className="text-red-100">Tinspol Motors?</span>
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed font-medium">
              Experience the difference with our commitment to excellence, quality service, and customer satisfaction.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-red-200 rounded-full mx-auto"></div>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {/* Animated Connection Lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="white" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                <path d="M10,20 Q50,10 90,30 Q50,50 10,70 Q50,90 90,80" 
                      stroke="url(#lineGradient)" 
                      strokeWidth="0.5" 
                      fill="none"
                      className="animate-pulse"/>
              </svg>
            </div>
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 bg-white hover:scale-[1.02]"
              >
                <CardContent className="p-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-bold bg-gray-50 px-3 py-1 rounded-full group-hover:bg-red-50 group-hover:text-red-600 transition-all duration-300">{feature.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                  <div className="w-12 h-1 bg-red-600 rounded-full mt-4 group-hover:w-20 transition-all duration-300"></div>
                </CardContent>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                  <div className="w-full h-full bg-white rounded-lg"></div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl p-12 shadow-2xl border border-white/20 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 border border-red-600 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-black rounded-full animate-pulse animation-delay-300"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">Ready to Experience the Difference?</h3>
                <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                  Join thousands of satisfied customers who trust Tinspol Motors for all their automotive needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    size="lg" 
                    asChild
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/quote" className="flex items-center space-x-2">
                      <span>Get Your Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    asChild
                    className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/about" className="flex items-center space-x-2">
                      <span>Learn More</span>
                      <TrendingUp className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}