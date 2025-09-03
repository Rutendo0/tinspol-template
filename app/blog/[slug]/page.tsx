import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  "winter-car-maintenance-tips": {
    title: "Essential Winter Car Maintenance Tips for Zimbabwe",
    author: "James Tinspol",
    date: "2024-05-15",
    readTime: "5 min read",
    category: "Maintenance Tips",
    image: "/images/routine-service.jpg",
    content: `
      <p>As Zimbabwe's cooler months approach, it's crucial to prepare your vehicle for the changing weather conditions. While our winters may not be as harsh as other countries, the temperature drops and occasional frost can still affect your vehicle's performance.</p>

      <h2>1. Check Your Battery</h2>
      <p>Cold weather can reduce your battery's capacity by up to 30%. Have your battery tested and ensure the terminals are clean and tight. If your battery is over 3 years old, consider replacing it before winter arrives.</p>

      <h2>2. Inspect Your Tyres</h2>
      <p>Check tyre pressure regularly as it drops with temperature. Ensure your tyres have adequate tread depth (minimum 1.6mm) for better grip on wet roads. Consider switching to tyres with better wet weather performance if needed.</p>

      <h2>3. Test Your Heating System</h2>
      <p>Make sure your heater and defroster are working properly. Clean or replace the cabin air filter to ensure good air circulation and prevent fogging.</p>

      <h2>4. Check Fluid Levels</h2>
      <p>Ensure all fluids are at proper levels, including engine oil, coolant, brake fluid, and windshield washer fluid. Consider using winter-grade oil if recommended by your manufacturer.</p>

      <h2>5. Inspect Lights and Visibility</h2>
      <p>With shorter days, ensure all lights are working properly. Clean headlights and replace any burnt-out bulbs. Check that windshield wipers are in good condition.</p>

      <p>At Tinspol Motors, we offer comprehensive winter preparation services to ensure your vehicle is ready for the cooler months. Contact us today to schedule your winter maintenance check.</p>
    `,
  },
  "tyre-safety-guide": {
    title: "Complete Guide to Tyre Safety and Maintenance",
    author: "Michael Chikwanha",
    date: "2024-05-10",
    readTime: "7 min read",
    category: "Safety",
    image: "/images/tyre-service.jpg",
    content: `
      <p>Your tyres are the only contact point between your vehicle and the road. Proper tyre maintenance is crucial for safety, fuel efficiency, and extending tyre life. Here's everything you need to know about keeping your tyres in optimal condition.</p>

      <h2>Understanding Tyre Pressure</h2>
      <p>Maintaining correct tyre pressure is one of the most important aspects of tyre care. Under-inflated tyres can lead to increased fuel consumption, poor handling, and premature wear. Over-inflated tyres can cause a harsh ride and uneven wear patterns.</p>

      <h2>How to Check Tyre Pressure</h2>
      <p>Check your tyre pressure at least once a month when tyres are cold (before driving or at least 3 hours after driving). Use a reliable pressure gauge and inflate to the manufacturer's recommended pressure, found in your owner's manual or on a sticker inside the driver's door frame.</p>

      <h2>Tread Depth and the Coin Test</h2>
      <p>Adequate tread depth is essential for grip, especially in wet conditions. The legal minimum in most countries is 1.6mm, but we recommend replacing tyres when tread depth reaches 3mm for optimal safety.</p>

      <h2>Signs You Need New Tyres</h2>
      <ul>
        <li>Tread depth below 3mm</li>
        <li>Uneven wear patterns</li>
        <li>Cracks in the sidewall</li>
        <li>Bulges or blisters</li>
        <li>Frequent loss of pressure</li>
        <li>Vibration while driving</li>
      </ul>

      <h2>Extending Tyre Life</h2>
      <p>Regular rotation every 10,000-12,000km helps ensure even wear. Proper wheel alignment and balancing also contribute to longer tyre life. Avoid aggressive driving, sudden braking, and hitting curbs or potholes.</p>

      <p>For professional tyre services, including fitting, balancing, and alignment, visit Tinspol Motors. Our experienced technicians will help you choose the right tyres for your vehicle and driving needs.</p>
    `,
  },
  // Add more blog posts as needed...
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Article Header */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-gray-600">Senior Technician</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="space-y-6 text-gray-700 leading-relaxed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(blogPosts)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, relatedPost]) => (
                  <Card key={slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-3">{relatedPost.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <User className="h-4 w-4" />
                        {relatedPost.author}
                        <span>•</span>
                        {relatedPost.readTime}
                      </div>
                      <Button variant="ghost" asChild>
                        <Link href={`/blog/${slug}`}>
                          Read More <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Service?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our expert technicians are ready to help with all your automotive needs. Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="https://wa.me/263123456789" className="bg-green-600 hover:bg-green-700 border-green-600">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}
