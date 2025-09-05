import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  { name: "Fidelity Funeral", quote: "Reliable and professional service. Our fleet is always in good hands.", rating: 5 },
  { name: "Dendairy", quote: "Fast turnaround and quality workmanship.", rating: 5 },
  { name: "AFC Bank", quote: "Transparent quotes and excellent communication.", rating: 5 },
  { name: "Upper Manyame", quote: "Trusted partner for years — highly recommended.", rating: 5 },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-0.5 bg-red-600"></div>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Testimonials</span>
              <div className="w-12 h-0.5 bg-red-600"></div>
            </div>
            <h1 className="text-4xl font-bold text-black mb-3">What Our Clients Say</h1>
            <p className="text-gray-600">Selected feedback from organizations we serve</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <Quote className="w-6 h-6 text-red-600 mb-3" />
                  <p className="text-gray-700 mb-4">{t.quote}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-black">{t.name}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
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