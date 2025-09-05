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
    image: "/images/motor-mechanics.jpg",
    href: "/services/motor-mechanics",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Settings,
    title: "Suspension Repairs",
    description: "Professional suspension system repairs and upgrades for optimal ride comfort.",
    features: ["Shock Absorbers", "Struts Replacement", "Alignment", "Springs"],
    turnaround: "1-2 days",
    image: "/images/suspension-repair.jpg",
    href: "/services/suspension",
    color: "from-black to-gray-800"
  },
  {
    icon: Disc,
    title: "Tyre Services",
    description: "Expert tyre services including repairs, balancing, and new tyre installations.",
    features: ["Puncture Repairs", "Wheel Balancing", "Tyre Fitting", "Alignment"],
    turnaround: "Same day",
    image: "/images/tyre-service.jpg",
    href: "/services/tyres",
    color: "from-red-600 to-red-700"
  },
  {
    icon: Droplets,
    title: "Car Wash & Detailing",
    description: "Professional car cleaning services from basic wash to full detailing.",
    features: ["Exterior Wash", "Interior Cleaning", "Waxing", "Engine Cleaning"],
    turnaround: "2-4 hours",
    image: "/images/car-wash.jpg",
    href: "/services/car-wash",
    color: "from-black to-gray-900"
  },
  {
    icon: Hammer,
    title: "Panel Beating",
    description: "Accident damage repairs and bodywork restoration to factory standards.",
    features: ["Dent Removal", "Paint Matching", "Rust Treatment", "Body Alignment"],
    turnaround: "3-7 days",
    image: "/images/panel-beating.jpg",
    href: "/services/panel-beating",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Package,
    title: "Spares & Parts",
    description: "Genuine and aftermarket parts supply for all vehicle makes and models.",
    features: ["OEM Parts", "Aftermarket Options", "Fast Sourcing", "Warranty"],
    turnaround: "1-2 days",
    image: "/images/spares-parts.jpg",
    href: "/services/spares",
    color: "from-black to-gray-800"
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-0.5 bg-red-600"></div>
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Our Services</span>
            <div className="w-12 h-0.5 bg-red-600"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Complete Automotive
            <span className="block text-red-600">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to complex repairs, our certified technicians deliver 
            exceptional service with genuine parts and industry-leading warranties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 [perspective:1200px]">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white will-change-transform [transform-style:preserve-3d]" 
              onMouseMove={(e) => {
                const target = e.currentTarget as HTMLElement
                const rect = target.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const rx = ((y / rect.height) - 0.5) * -6
                const ry = ((x / rect.width) - 0.5) * 6
                target.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-0.5rem)`
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement
                target.style.transform = ''
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon Header */}
              <CardHeader className="relative pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-black group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              {/* Features List */}
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  asChild
                  variant="ghost" 
                  className="w-full group-hover:bg-red-50 group-hover:text-red-600 transition-all duration-300 justify-between"
                >
                  <Link href={service.href}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? Our expert team can create a custom 
              maintenance plan tailored to your vehicle's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                asChild
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold"
              >
                <Link href="/quote">Get Custom Quote</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-red-600 font-semibold"
              >
                <Link href="/contact">Speak to Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}