"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Camera, ArrowRight } from "lucide-react"

// Simple image showcase for homepage
// This replaces the before/after sliders and filters with a clean image grid
const workImages = [
  { src: "/images/hero-workshop.jpg", title: "Our Workshop" },
  { src: "/images/motor-mechanics.jpg", title: "Motor Mechanics" },
  { src: "/images/panel-beating.jpg", title: "Panel Beating" },
  { src: "/images/suspension-repair.jpg", title: "Suspension Repairs" },
  { src: "/images/tyre-service.jpg", title: "Tyre Services" },
  { src: "/images/car-wash.jpg", title: "Car Wash & Detailing" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-0.5 bg-red-600"></div>
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Our Work</span>
            <div className="w-12 h-0.5 bg-red-600"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            A Glimpse Into
            <span className="block text-red-600">Tinspol Motors</span>
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {workImages.map((item, idx) => (
            <Card key={idx} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent"></div>
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

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Work With Us?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg hover:shadow-red-600/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="/quote" className="flex items-center space-x-2">
                  <Camera className="w-5 h-5" />
                  <span>Start Your Project</span>
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="bg-red-600 text-white hover:bg-white hover:text-black font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link href="/gallery" className="flex items-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>View More Work</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
