import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { ShareButton } from "@/components/ui/share-button"
import Image from "next/image"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function getBlogPost(slug: string) {
  try {
    // Use findFirst because we filter by a non-unique field (published)
    const post = await prisma.blogPost.findFirst({
      where: {
        slug,
        published: true,
      },
      include: {
        author: {
          select: { name: true },
        },
      },
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.slug, post.category)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Simple Header + Cover */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto py-10">
            <div className="mb-6">
              <Button variant="outline" asChild className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap mb-6">
              <Badge className="bg-red-600 text-white">{post.category}</Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-400" />
                <span>{post.author.name}</span>
              </div>
            </div>
            {post.image && post.image.trim() && (
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow ring-1 ring-black/5 mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            {post.excerpt && (
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-gray prose-lg max-w-none">
              <div
                className="text-gray-800 leading-8 [&_img]:rounded-lg [&_img]:shadow [&_img]:ring-1 [&_img]:ring-black/5"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split('\n\n')
                    .map((p) => p.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" class="my-6" />'))
                    .map((p) => `<p>${p}</p>`) 
                    .join(''),
                }}
              />
            </article>

            {/* Meta footer */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <User className="h-4 w-4 text-gray-400" />
                    <span>By {post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <ShareButton title={post.title} className="border-gray-300 text-gray-700 hover:bg-gray-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}