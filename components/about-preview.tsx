import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Award, MapPin, Clock, Sparkles } from "lucide-react"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-gray-50 to-red-50/30 overflow-hidden">
      {/* Section Indicator */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-600 shadow-lg shadow-red-600/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-red-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-black rounded-full animate-pulse animation-delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-black/10 to-gray-800/10 rounded-full animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-full px-6 py-3 border border-red-600/20 shadow-sm">
                <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-red-500 rounded-full animate-pulse"></div>
                <Sparkles className="w-4 h-4 text-red-600" />
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">
                  About Tinspol Motors
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                <span className="block gradient-text">Zimbabwean Company</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Tinspol Enterprises is a wholly owned Zimbabwean Company that specializes in providing quality vehicle repairs and maintenance services.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-black text-lg group-hover:text-red-600 transition-colors duration-300">Quality Service</div>
                  <div className="text-sm text-gray-600">Professional repairs</div>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-black text-lg group-hover:text-gray-800 transition-colors duration-300">Expert Team</div>
                  <div className="text-sm text-gray-600">Skilled technicians</div>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              asChild
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-red-600/30 transition-all duration-300 hover:scale-105 glow-red"
            >
              <Link href="/about" className="flex items-center space-x-3">
                <span className="font-semibold">Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Main Image Card */}
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-black to-gray-900">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/image.jpg"
                    alt="Tinspol Motors"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Tinspol Motors</h3>
                    <p className="text-gray-300">Quality Vehicle Repairs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="absolute -bottom-6 -left-6 z-10">
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="font-semibold text-black text-sm">Harare</div>
                      <div className="text-xs text-gray-600">Zimbabwe</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}