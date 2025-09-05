import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Shield, Wrench, Truck, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SparesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Button
                variant="outline"
                asChild
                className="border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm"
              >
                <Link href="/services" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Services</span>
                </Link>
              </Button>
            </div>

            <div className="inline-flex items-center space-x-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                Spares & Body Parts
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Genuine Spares & Parts
              <span className="block text-red-500 gradient-text">OEM-Grade Components</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We supply and fit quality parts — brakes, clutches, suspension, exhausts, electricals, glass, batteries,
              alarms and more. Professional installation by certified technicians.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Quality Assured", desc: "OEM or OEM-equivalent parts with warranty" },
              { icon: Wrench, title: "Professional Fitment", desc: "Installed by qualified technicians" },
              { icon: Truck, title: "Fast Sourcing", desc: "Rapid procurement for most makes & models" },
            ].map((item, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-red-600" />
                  <CardTitle className="text-black">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Supply */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-8">Parts Catalogue</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Suspension components",
              "Brakes (pads, discs, drums)",
              "Clutch & hydraulics",
              "Exhaust systems",
              "Auto electrics",
              "Batteries",
              "Gauges & calibrations",
              "Glass & windscreens",
              "Alarms & accessories",
            ].map((label, i) => (
              <div key={i} className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-gray-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <Badge className="mb-4 bg-red-600 text-white">Need a part?</Badge>
              <h3 className="text-2xl font-bold text-black mb-4">Request a Part/Quote</h3>
              <p className="text-gray-600 mb-6">Send us your vehicle details and photos of the part. We'll source and quote fast.</p>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/tyres-and-spares">Request Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}