import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  try {
    // Check if admin user already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: process.env.ADMIN_EMAIL || 'admin@tinspol.com' }
    })

    if (existingAdmin) {
      console.log('Admin user already exists')
      return
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD || 'admin123',
      12
    )

    const admin = await prisma.user.create({
      data: {
        email: process.env.ADMIN_EMAIL || 'admin@tinspol.com',
        password: hashedPassword,
        name: 'Admin User',
        role: 'ADMIN'
      }
    })

    console.log('Admin user created:', admin.email)

    // Create sample blog post
    const samplePost = await prisma.blogPost.create({
      data: {
        title: 'Welcome to Tinspol Motors Blog',
        slug: 'welcome-to-tinspol-motors-blog',
        excerpt: 'Welcome to our new blog where we share automotive tips, maintenance advice, and company updates.',
        content: `Welcome to the official Tinspol Motors blog!

We're excited to launch this platform where we'll be sharing:

• Expert automotive maintenance tips
• Seasonal car care advice
• Industry news and updates
• Behind-the-scenes looks at our work
• Special promotions and offers

Our team of experienced mechanics and automotive specialists will be contributing regular content to help you keep your vehicle in top condition.

Stay tuned for more valuable content, and don't hesitate to reach out if you have any questions or topics you'd like us to cover!

Contact us:
📞 +263 123 456 789
📧 info@tinspol.com
📍 Harare, Zimbabwe`,
        category: 'News',
        featured: true,
        published: true,
        readTime: '3 min read',
        authorId: admin.id
      }
    })

    console.log('Sample blog post created:', samplePost.title)

    // Create sample gallery item
    const sampleGallery = await prisma.galleryItem.create({
      data: {
        title: 'BMW 3 Series Paint Restoration',
        description: 'Complete paint restoration and detailing service for a BMW 3 Series. The vehicle had significant paint damage and oxidation.',
        beforeImage: '/images/panel-beating.jpg',
        afterImage: '/images/car-wash.jpg',
        category: 'RESPRAYS',
        featured: true,
        authorId: admin.id
      }
    })

    console.log('Sample gallery item created:', sampleGallery.title)

  } catch (error) {
    console.error('Error initializing database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()