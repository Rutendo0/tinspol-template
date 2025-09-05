import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowRight, Star, Award, Shield } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-red-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-red-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-red-500/5 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Ready to Get Started?
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Experience the
              <span className="block text-red-500 gradient-text">Tinspol Difference</span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join satisfied customers who trust Tinspol Motors for their vehicle repair needs. 
              Quality service, professional expertise, and genuine care for your vehicle.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Quality Guaranteed</h3>
              <p className="text-gray-400 text-center">All work backed by our quality assurance</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-black border-2 border-red-500 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Professional Team</h3>
              <p className="text-gray-400 text-center">Experienced technicians you can trust</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">100% Zimbabwean</h3>
              <p className="text-gray-400 text-center">Proudly serving our local community</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              asChild
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-red-600/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/quote" className="flex items-center space-x-3">
                <span>Get Your Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-bold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a 
              href="tel:+263776556717"
              className="flex items-center space-x-4 text-white hover:text-red-400 transition-colors duration-300 group"
            >
              <div className="w-16 h-16 bg-red-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-red-600/30 transition-all duration-300 group-hover:scale-110">
                <Phone className="w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400 font-medium">Call Now</div>
                <div className="font-bold text-2xl">077 655 6717</div>
              </div>
            </a>
            
            <div className="hidden sm:block w-px h-16 bg-gray-600"></div>
            
            <a 
              href="https://wa.me/263776556717"
              className="flex items-center space-x-4 text-white hover:text-green-400 transition-colors duration-300 group"
            >
              <div className="w-16 h-16 bg-green-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-green-600/30 transition-all duration-300 group-hover:scale-110">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400 font-medium">WhatsApp</div>
                <div className="font-bold text-2xl">Quick Support</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}