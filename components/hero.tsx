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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3">
              <img
                src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/313332258_546938550770565_3432125774987103058_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=6M33H-5AZggQ7kNvwFchiWR&_nc_oc=Adm7al6HQc7N6w8duqCbWFEo0GXod_20ZRABKEC6a3yMex26BrZayVg2tKE6Zx9CMzD0Kmira0CnaNImUOVsqBZ5&_nc_zt=24&_nc_ht=scontent-jnb2-1.xx&_nc_gid=FskBGDC-0G13KB-a49S09w&oh=00_AfYiSYHQroMvclIFwpl7HyoLM-1PiMWMHjrbwkKQ8ivh3Q&oe=68BFC28A"
                alt="Tinspol Motors Logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                100% Zimbabwean Owned
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-white block">TINSPOL</span>
                <span className="text-red-500 block gradient-text">MOTORS</span>
              </h1>
              <div className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-300">
                Quality Vehicle Repairs
              </div>
            </div>

            {/* Subheading */}
            <p className="text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Zimbabwe's trusted automotive specialists delivering professional service, 
              genuine parts, and exceptional customer care since day one.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 py-4">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                asChild
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base font-semibold rounded-xl shadow-2xl hover:shadow-red-600/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="/quote" className="flex items-center space-x-2">
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 text-base font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Link href="/services">
                  Our Services
                </Link>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a 
                href="tel:+263776556717"
                className="flex items-center space-x-3 text-white hover:text-red-400 transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-red-600/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Call Now</div>
                  <div className="font-bold text-base">077 655 6717</div>
                </div>
              </a>
              <a 
                href="https://wa.me/263776556717"
                className="flex items-center space-x-3 text-white hover:text-green-400 transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-green-600/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-green-600/30 transition-all duration-300 group-hover:scale-110">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">WhatsApp</div>
                  <div className="font-bold text-base">Quick Support</div>
                </div>
              </a>
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

            <div className="absolute bottom-20 left-10 z-20">
              <div className="bg-red-600/90 backdrop-blur-md rounded-2xl p-6 border border-red-500/30 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">Quality</div>
                  <div className="text-xs uppercase tracking-wider opacity-90">Repairs</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 right-0 z-20">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <div className="text-lg font-bold">Professional</div>
                  <div className="text-xs uppercase tracking-wider opacity-90">Service</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-20 w-32 h-32 border-2 border-red-500/20 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/10 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-red-500/10 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-black/80 backdrop-blur-md rounded-2xl px-8 py-4 border border-red-600/30 shadow-2xl will-change-transform [transform:translate3d(0,calc(var(--parallax,0)*-6%),0)] transition-transform duration-700">
            <div className="flex items-center space-x-8 text-center">
              <div>
                <div className="text-red-500 font-bold text-lg">Mon-Fri</div>
                <div className="text-gray-300 text-xs uppercase tracking-wider">8AM-5PM</div>
              </div>
              <div className="w-px h-8 bg-red-600/30"></div>
              <div>
                <div className="text-red-500 font-bold text-lg">Saturday</div>
                <div className="text-gray-300 text-xs uppercase tracking-wider">8AM-1PM</div>
              </div>
              <div className="w-px h-8 bg-red-600/30"></div>
              <div>
                <div className="text-red-500 font-bold text-lg">Harare</div>
                <div className="text-gray-300 text-xs uppercase tracking-wider">Zimbabwe</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}