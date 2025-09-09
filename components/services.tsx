'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Settings, Disc, Droplets, Hammer, Package, ArrowRight, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    title: "Motor Mechanics",
    description: "Complete engine diagnostics, repairs, and maintenance by certified technicians.",
    features: ["Engine Diagnostics", "Oil Changes", "Brake Repairs", "Transmission Service"],
    turnaround: "1-3 days",
    image: "/image1.jpg",
    href: "/services/motor-mechanics",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Settings,
    title: "Suspension Repairs",
    description: "Professional suspension system repairs and upgrades for optimal ride comfort.",
    features: ["Shock Absorbers", "Control Arm", "Wheel Alignment"],
    turnaround: "1-2 days",
    image: "/image2.jpg",
    href: "/services/suspension",
    color: "from-black to-gray-800"
  },
  {
    icon: Disc,
    title: "Tyre Services",
    description: "Expert tyre services including repairs, balancing, and new tyre installations.",
    features: ["Puncture Repairs", "Wheel Balancing", "Tyre Fitting", "Alignment"],
    turnaround: "Same day",
    image: "/image3.jpg",
    href: "/services/tyres",
    color: "from-red-600 to-red-700"
  },
  {
    icon: Droplets,
    title: "Car Wash & Detailing",
    description: "Professional car cleaning services from basic wash to full detailing.",
    features: ["Exterior Wash", "Interior Cleaning", "Waxing", "Engine Cleaning"],
    turnaround: "2-4 hours",
    image: "/image4.jpg",
    href: "/services/car-wash",
    color: "from-black to-gray-900"
  },
  {
    icon: Hammer,
    title: "Panel Beating",
    description: "Accident damage repairs and bodywork restoration to factory standards.",
    features: ["Dent Removal", "Paint Matching", "Rust Treatment", "Body Alignment"],
    turnaround: "3-7 days",
    image: "/placeholder.jpg",
    href: "/services/panel-beating",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Package,
    title: "Spares & Parts",
    description: "Genuine and aftermarket parts supply for all vehicle makes and models.",
    features: ["OEM Parts", "Aftermarket Options", "Fast Sourcing", "Warranty"],
    turnaround: "1-2 days",
    image: "/placeholder-user.jpg",
    href: "/services/spares",
    color: "from-black to-gray-800"
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Section Indicator */}
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-600 shadow-lg shadow-red-600/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-20 w-40 h-40 border-2 border-red-600 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 border-2 border-white rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-red-400 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
            <span className="text-red-600 font-bold uppercase tracking-wider text-base px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-red-600/30">Our Services</span>
            <div className="w-16 h-1 bg-gradient-to-l from-red-600 to-red-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Complete Automotive
            <span className="block gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            From routine maintenance to complex repairs, our certified technicians deliver 
            exceptional service with genuine parts and industry-leading warranties.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 [perspective:1200px]">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-3 gap-4 h-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="border border-white/20 rounded-lg animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
              ))}
            </div>
          </div>
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 bg-white will-change-transform [transform-style:preserve-3d] hover:scale-[1.02]" 
              onMouseMove={(e) => {
                const target = e.currentTarget as HTMLElement
                const rect = target.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const rx = ((y / rect.height) - 0.5) * -8
                const ry = ((x / rect.width) - 0.5) * 8
                target.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-0.75rem) scale(1.02)`
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement
                target.style.transform = ''
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                <div className="w-full h-full bg-white rounded-lg"></div>
              </div>
              
              {/* Icon Header */}
              <CardHeader className="relative pb-6 z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-full group-hover:bg-red-50 group-hover:text-red-600 transition-all duration-300">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">{service.turnaround}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-black group-hover:text-red-600 transition-colors duration-300 mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              {/* Features List */}
              <CardContent className="pt-0 relative z-10">
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-4 group/feature">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover/feature:text-black transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  asChild
                  variant="ghost" 
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-red-50 group-hover:to-red-100 group-hover:text-red-600 transition-all duration-500 justify-between py-6 rounded-2xl border border-transparent group-hover:border-red-200 group-hover:shadow-lg"
                >
                  <Link href={service.href} className="flex items-center justify-between w-full">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}