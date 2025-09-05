import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Award, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-red-600/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                  About Tinspol Motors
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Wholly Owned
                <span className="block text-red-600">Zimbabwean Company</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Specializing in providing quality vehicle repairs with professional service, 
                genuine parts, and exceptional customer care.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                At Tinspol Motors, we take pride in being a 100% Zimbabwean-owned automotive service company. 
                Our commitment to excellence drives us to deliver superior vehicle repair services that meet 
                international standards while understanding the unique needs of Zimbabwean motorists.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                From routine maintenance to complex repairs, our experienced team uses quality equipment 
                and genuine parts to ensure your vehicle receives the best possible care. We believe in 
                building lasting relationships with our customers through honest service and reliable workmanship.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-black">Quality Service</div>
                  <div className="text-sm text-gray-600">Professional repairs</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-black">Expert Team</div>
                  <div className="text-sm text-gray-600">Skilled technicians</div>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              asChild
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-red-600/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/about" className="flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
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
                    src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/313332258_546938550770565_3432125774987103058_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=6M33H-5AZggQ7kNvwFchiWR&_nc_oc=Adm7al6HQc7N6w8duqCbWFEo0GXod_20ZRABKEC6a3yMex26BrZayVg2tKE6Zx9CMzD0Kmira0CnaNImUOVsqBZ5&_nc_zt=24&_nc_ht=scontent-jnb2-1.xx&_nc_gid=FskBGDC-0G13KB-a49S09w&oh=00_AfYiSYHQroMvclIFwpl7HyoLM-1PiMWMHjrbwkKQ8ivh3Q&oe=68BFC28A"
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

            {/* Floating Info Cards */}
            <div className="absolute -top-6 -right-6 z-10">
              <Card className="border-0 shadow-xl bg-red-600 text-white">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs uppercase tracking-wider opacity-90">Zimbabwean</div>
                  </div>
                </CardContent>
              </Card>
            </div>

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

            <div className="absolute top-1/2 -right-8 z-10">
              <Card className="border-0 shadow-xl bg-black text-white">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-red-500" />
                    <div>
                      <div className="font-semibold text-sm">Mon-Sat</div>
                      <div className="text-xs text-gray-400">Open</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none -z-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-red-500/20 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-black/10 rounded-full"></div>
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-red-500/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">Quality</div>
            <div className="text-gray-600 font-medium">Vehicle Repairs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">Professional</div>
            <div className="text-gray-600 font-medium">Service Team</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">Genuine</div>
            <div className="text-gray-600 font-medium">Parts & Equipment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">Trusted</div>
            <div className="text-gray-600 font-medium">Zimbabwean Brand</div>
          </div>
        </div>
      </div>
    </section>
  )
}