"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Camera, ArrowRight } from "lucide-react"
import { BeforeAfter } from "@/components/ui/before-after"

// Homepage gallery using before/after comparisons
const workPairs = [
  { before: "/panel4.jpg", after: "/panel3.jpg", title: "Panel Beating" },
  { before: "/carwash2.jpg", after: "/carwash.jpg", title: "Car Wash & Detailing" },
  { before: "/motor1.png", after: "/motor.jpeg", title: "Motor Mechanics" },
  { before: "/suspension.jpg", after: "/suspension2.jpg", title: "Suspension Repairs" },
  { before: "/paint.jpg", after: "/vehicle1.jpg", title: "Body & Paint" },
  { before: "/tyre.png", after: "/tyres.jpg", title: "Tyre Services" },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
      {/* Section Indicator */}
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-600 shadow-lg shadow-red-600/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-16 w-32 h-32 border-2 border-red-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 border-2 border-black rounded-full animate-pulse animation-delay-600"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-red-400 rounded-full animate-float"></div>
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border border-black/30 rounded-full animate-float animation-delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
            <span className="text-red-600 font-bold uppercase tracking-wider text-base px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-red-200 shadow-lg">Our Work</span>
            <div className="w-16 h-1 bg-gradient-to-l from-red-600 to-red-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
            A Glimpse Into
            <span className="block gradient-text">Tinspol Motors</span>
          </h2>
        </div>

        {/* Before/After Grid */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Grid Animation Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-3 gap-8 h-full">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border-2 border-dashed border-red-600/30 rounded-2xl animate-pulse" style={{ animationDelay: `${i * 300}ms` }}></div>
              ))}
            </div>
          </div>

          {workPairs.map((item, idx) => (
            <Card key={idx} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="relative aspect-[4/3]">
                {/* Before/After comparison fills the card area */}
                <BeforeAfter
                  before={item.before}
                  after={item.after}
                  alt={item.title}
                  className="absolute inset-0"
                />
                {/* Caption */}
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-white/90 text-black text-xs font-semibold px-2 py-1 rounded">
                    {item.title}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Captured at Tinspol Motors</span>
                  <Link href="/gallery" className="text-sm font-semibold text-red-600 hover:text-red-700 inline-flex items-center">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
