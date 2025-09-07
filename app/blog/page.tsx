import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { prisma } from "@/lib/prisma"

// Ensure this page runs on the Node.js runtime and is rendered dynamically
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const categories = ["All", "Maintenance Tips", "Safety", "Engine Care", "Promotions", "Services", "Car Care"]

async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      include: {
        author: {
          select: {
            name: true,
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

function extractFirstImage(markdown: string | null | undefined): string | null {
  if (!markdown) return null
  const match = markdown.match(/!\[[^\]]*\]\(([^)]+)\)/)
  return match ? match[1] : null
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/image2.jpg"
            alt="Automotive workshop background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back Button */}
            <div className="mb-8">
              <Button 
                variant="outline" 
                asChild
                className="border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
              >
                <Link href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              </Button>
            </div>

            {/* Header */}
            <div className="mb-12">
              <Badge className="mb-6 bg-red-600/20 text-red-400 border-red-500/30 backdrop-blur-sm">
                Expert Advice
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Automotive <span className="text-red-500">Blog</span>
              </h1>
              
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Expert automotive advice, maintenance tips, and the latest news from Zimbabwe's trusted 
                vehicle repair specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Badge className="mb-4">Featured Article</Badge>
              <h2 className="text-2xl font-bold">Latest from Our Experts</h2>
            </div>

            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={
                      featuredPost.image && featuredPost.image.trim()
                        ? featuredPost.image
                        : extractFirstImage(featuredPost.content) || "/placeholder.jpg"
                    }
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{featuredPost.author.name}</span>
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read More <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-600">Find articles on topics that interest you</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All" ? "default" : "outline"} 
                size="sm"
                className={category === "All" ? "bg-red-600 hover:bg-red-700 text-white" : "border-gray-300 text-gray-700 hover:bg-gray-50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={
                      post.image && post.image.trim()
                        ? post.image
                        : extractFirstImage(post.content) || "/placeholder.jpg"
                    }
                    alt={post.title}
                    fill 
                    className="object-cover" 
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-600">{post.author.name}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Car Care Tips</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest automotive maintenance tips, seasonal advice, and exclusive
            promotions.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white" 
            />
            <Button variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}
