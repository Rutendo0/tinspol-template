import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

async function getGalleryItem(id: string) {
  try {
    const item = await prisma.galleryItem.findUnique({
      where: { id },
      include: {
        author: { select: { name: true } }
      }
    })
    return item
  } catch (e) {
    console.error("Error fetching gallery item", e)
    return null
  }
}

export default async function GalleryItemPage({ params }: { params: { id: string } }) {
  const item = await getGalleryItem(params.id)
  if (!item) notFound()

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-10 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white hover:text-black">
                <Link href="/gallery" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Gallery</span>
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Badge>{item.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="h-4 w-4" />
                {new Date(item.createdAt).toLocaleDateString()}
              </div>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-2">{item.title}</h1>
            {item.description && (
              <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">{item.description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Images before/after side-by-side */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
              <Image src={item.beforeImage} alt="Before" fill className="object-cover" />
              <div className="absolute top-3 left-3">
                <Badge variant="secondary">Before</Badge>
              </div>
            </div>
            <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
              <Image src={item.afterImage} alt="After" fill className="object-cover" />
              <div className="absolute top-3 right-3">
                <Badge className="bg-green-600">After</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want results like this?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Let our team transform your vehicle with expert workmanship.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg"><Link href="/quote">Get Free Quote</Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600"><Link href="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}