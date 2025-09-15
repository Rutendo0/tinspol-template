"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Camera, ArrowRight } from "lucide-react"
import Image from "next/image"


// Homepage gallery using single images
const galleryItems = [
  { src: "/panel4.jpg", title: "Panel Beating" },
  { src: "/carwash.jpg", title: "Car Wash & Detailing" },
  { src: "/motor1.png", title: "Motor Mechanics" },
  { src: "/suspension.jpg", title: "Suspension Repairs" },
  { src: "/paint.jpg", title: "Body & Paint" },
  { src: "/tyre.png", title: "Tyre Services" },
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
            <span className="block mt-1 gradient-text">Tinspol Motors</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Grid Animation Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-3 gap-8 h-full">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border-2 border-dashed border-red-600/30 rounded-2xl animate-pulse" style={{ animationDelay: `${i * 300}ms` }}></div>
              ))}
            </div>
          </div>

          {galleryItems.map((item, idx) => (
            <Card key={idx} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="relative aspect-[4/3]">
                {/* Single image */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={idx < 3}
                />
                {/* Caption */}
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-white/90 text-black text-xs font-semibold px-2 py-1 rounded">
                    {item.title}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
