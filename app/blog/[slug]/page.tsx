import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

async function getBlogPost(slug: string) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { 
        slug,
        published: true 
      },
      include: {
        author: {
          select: {
            name: true,
          }
        }
      }
    })
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

async function getRelatedPosts(currentSlug: string, category: string) {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
        slug: { not: currentSlug },
        category
      },
      include: {
        author: {
          select: {
            name: true,
          }
        }
      },
      take: 3,
      orderBy: { createdAt: 'desc' }
    })
    return posts
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.slug, post.category)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button 
                variant="outline" 
                asChild
                className="border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm"
              >
                <Link href="/blog" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </Link>
              </Button>
            </div>

            {/* Article Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Badge className="bg-red-600">{post.category}</Badge>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">{post.author.name}</span>
                </div>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-black">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src={post.image || "/images/routine-service.jpg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {post.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image 
                        src={relatedPost.image || "/images/routine-service.jpg"} 
                        alt={relatedPost.title} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {relatedPost.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          {new Date(relatedPost.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 leading-tight">{relatedPost.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-600">{relatedPost.author.name}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${relatedPost.slug}`}>
                            Read More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Car Service?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our expert mechanics are ready to help with all your vehicle maintenance and repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}