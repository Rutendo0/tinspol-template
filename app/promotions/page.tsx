import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const promos = [
  { title: "Tyre Special — Ends Friday", desc: "Up to 10% off selected tyre brands.", badge: "Ends Friday" },
  { title: "Battery Replacement", desc: "Free installation with every new battery.", badge: "New" },
  { title: "Full Valet", desc: "Save $5 on Full Valet this week.", badge: "Limited" },
]

export default function PromotionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-red-600"></div>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Promotions</span>
              <div className="w-12 h-0.5 bg-red-600"></div>
            </div>
            <h1 className="text-4xl font-bold text-black">Current Specials</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos.map((p, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-black flex items-center gap-2">
                    {p.title}
                    <Badge className="bg-red-600 text-white">{p.badge}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <MobileCTA />
    </div>
  )
}