import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowRight, Star, Shield, Award } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 will-change-transform" aria-hidden>
        <div className="pointer-events-none absolute inset-0 [transform:translate3d(0,calc(var(--parallax,0)*-10%),0)] transition-transform duration-700 ease-out">
          <img
            src="https://png.pngtree.com/background/20250205/original/pngtree-3d-illustration-vibrant-red-car-against-a-sleek-black-background-picture-image_13289679.jpg"
            alt="Red Car Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        </div>
      </div>

     

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="text-4xl lg:text-6xl xl:text-7xl font-bold text-red-500 leading-tight">
                Quality Vehicle Repairs
              </div>
            </div>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
             Tinspol Motors is wholly owned Zimbabwean Company that specializes in providing
              quality vehicle repairs.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 py-8 mt-8">
              <div className="flex items-center space-x-2 text-white">
                <Shield className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Award className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium">Professional Service</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Star className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium">Trusted Expertise</span>
              </div>
            </div>

          </div>

          {/* Right Content - Enhanced Visual Elements */}
          <div className="relative lg:block hidden">
            {/* Floating Cards */}
            <div className="absolute top-10 right-10 z-20">
              <div className="bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-red-600/30 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">100%</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wider">Zimbabwean</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-900 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}