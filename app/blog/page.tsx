import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: "winter-car-maintenance-tips",
    title: "Essential Winter Car Maintenance Tips for Zimbabwe",
    excerpt:
      "Prepare your vehicle for the cooler months with these essential maintenance tips from our expert mechanics.",
    author: "James Tinspol",
    date: "2024-05-15",
    readTime: "5 min read",
    category: "Maintenance Tips",
    image: "/images/routine-service.jpg",
    featured: true,
  },
  {
    id: "tyre-safety-guide",
    title: "Complete Guide to Tyre Safety and Maintenance",
    excerpt: "Learn how to check your tyres, when to replace them, and how to extend their lifespan with proper care.",
    author: "Michael Chikwanha",
    date: "2024-05-10",
    readTime: "7 min read",
    category: "Safety",
    image: "/images/tyre-service.jpg",
    featured: false,
  },
  {
    id: "engine-warning-signs",
    title: "5 Warning Signs Your Engine Needs Immediate Attention",
    excerpt: "Don't ignore these critical warning signs that could save you from expensive engine repairs.",
    author: "James Tinspol",
    date: "2024-05-05",
    readTime: "4 min read",
    category: "Engine Care",
    image: "/images/motor-mechanics.jpg",
    featured: false,
  },
  {
    id: "may-promotion-announcement",
    title: "May Special: 20% Off All Suspension Services",
    excerpt: "This month only - get professional suspension repairs and replacements at discounted rates.",
    author: "Sarah Mukamuri",
    date: "2024-05-01",
    readTime: "2 min read",
    category: "Promotions",
    image: "/images/suspension-repair.jpg",
    featured: false,
  },
  {
    id: "panel-beating-process",
    title: "Understanding the Panel Beating Process: From Damage to Restoration",
    excerpt: "Take a behind-the-scenes look at how we restore damaged vehicles to their original condition.",
    author: "Michael Chikwanha",
    date: "2024-04-25",
    readTime: "6 min read",
    category: "Services",
    image: "/images/panel-beating.jpg",
    featured: false,
  },
  {
    id: "car-wash-benefits",
    title: "Why Regular Car Washing is More Than Just Aesthetics",
    excerpt: "Discover the hidden benefits of regular car washing for your vehicle's longevity and value.",
    author: "Sarah Mukamuri",
    date: "2024-04-20",
    readTime: "3 min read",
    category: "Car Care",
    image: "/images/car-wash.jpg",
    featured: false,
  },
]

const categories = ["All", "Maintenance Tips", "Safety", "Engine Care", "Promotions", "Services", "Car Care"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Tinspol Motors Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert automotive advice, maintenance tips, and the latest news from Zimbabwe's trusted car care
              specialists.
            </p>
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
                    src={featuredPost.image || "/placeholder.svg"}
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
                      {new Date(featuredPost.date).toLocaleDateString()}
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
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${featuredPost.id}`}>
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
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
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
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-600">{post.author}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.id}`}>
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
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Car Care Tips</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest automotive maintenance tips, seasonal advice, and exclusive
            promotions.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg text-gray-900" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}
