import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { prisma } from "@/lib/prisma"

// Ensure this page runs on the Node.js runtime and is rendered dynamically
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const categoryLabels = {
  REPAIRS: 'Repairs',
  RESPRAYS: 'Resprays', 
  SUSPENSION: 'Suspension',
  WHEEL_ALIGNMENT: 'Wheel Alignment',
  DETAILING: 'Detailing',
  OTHER: 'Other'
}

async function getGalleryItems() {
  try {
    const items = await prisma.galleryItem.findMany({
      include: {
        author: {
          select: {
            name: true,
          }
        }
      },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ]
    })
    return items
  } catch (error) {
    console.error('Error fetching gallery items:', error)
    return []
  }
}

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems()
  const featuredItems = galleryItems.filter(item => item.featured)
  const regularItems = galleryItems.filter(item => !item.featured)

  return (
    <div className="min-h-screen">
      <Header />



      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-600">Filter our work by service type</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="default" size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              All Work
            </Button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <Button key={key} variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Items */}
      {featuredItems.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Badge className="mb-4 bg-yellow-600">Featured Work</Badge>
              <h2 className="text-3xl font-bold">Showcase Projects</h2>
              <p className="text-gray-600 mt-2">Our most impressive transformations</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <Link href={`/gallery/${item.id}`} className="block">
                    <div className="relative">
                      <div className="grid grid-cols-2 h-64">
                        <div className="relative overflow-hidden">
                          <Image
                            src={item.beforeImage && item.beforeImage.trim() ? item.beforeImage : "/placeholder.jpg"}
                            alt="Before"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge variant="secondary" className="text-xs font-semibold">Before</Badge>
                          </div>
                        </div>
                        <div className="relative overflow-hidden">
                          <Image
                            src={item.afterImage && item.afterImage.trim() ? item.afterImage : "/placeholder.jpg"}
                            alt="After"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-green-600 text-xs font-semibold">After</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-yellow-600 text-xs">Featured</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                          <Badge variant="outline" className="text-xs border-red-500/50 text-red-600">
                            {categoryLabels[item.category as keyof typeof categoryLabels]}
                          </Badge>
                        </div>
                        {item.description && (
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        )}
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                          </div>
                          <span className="text-gray-400">By {item.author.name}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Gallery Items */}
      <section className={`py-16 ${featuredItems.length > 0 ? 'bg-gray-50' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center">
              {featuredItems.length > 0 ? 'More Transformations' : 'Our Work Gallery'}
            </h2>
            <p className="text-gray-600 text-center mt-2">Quality craftsmanship in every project</p>
          </div>

          {regularItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <Link href={`/gallery/${item.id}`} className="block">
                    <div className="relative">
                      <div className="grid grid-cols-2 h-48">
                        <div className="relative overflow-hidden">
                          <Image
                            src={item.beforeImage && item.beforeImage.trim() ? item.beforeImage : "/placeholder.jpg"}
                            alt="Before"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge variant="secondary" className="text-xs">Before</Badge>
                          </div>
                        </div>
                        <div className="relative overflow-hidden">
                          <Image
                            src={item.afterImage && item.afterImage.trim() ? item.afterImage : "/placeholder.jpg"}
                            alt="After"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-green-600 text-xs">After</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-sm text-gray-900 truncate">{item.title}</h3>
                          <Badge variant="outline" className="text-xs border-red-500/50 text-red-600">
                            {categoryLabels[item.category as keyof typeof categoryLabels]}
                          </Badge>
                        </div>
                        {item.description && (
                          <p className="text-gray-600 text-xs line-clamp-2">{item.description}</p>
                        )}
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Gallery Items Yet</h3>
                <p className="text-gray-600 mb-6">
                  We're working on adding more before/after showcases. Check back soon!
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Us for Your Project</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <MobileCTA />
    </div>
  )
}