export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image?: string
  featured: boolean
  published: boolean
}

// In-memory storage for demo - in production, use a database
let blogPosts: BlogPost[] = [
  {
    id: "winter-car-maintenance-tips",
    title: "Essential Winter Car Maintenance Tips for Zimbabwe",
    excerpt: "Prepare your vehicle for the cooler months with these essential maintenance tips from our expert mechanics.",
    content: `
# Essential Winter Car Maintenance Tips for Zimbabwe

As the cooler months approach in Zimbabwe, it's crucial to prepare your vehicle for the changing weather conditions. Here are our expert recommendations:

## 1. Check Your Battery
Cold weather can reduce battery performance by up to 50%. Have your battery tested and replace it if it's more than 3 years old.

## 2. Inspect Your Tyres
- Check tyre pressure regularly as it drops in cooler weather
- Ensure adequate tread depth for better grip
- Consider rotating tyres for even wear

## 3. Service Your Cooling System
- Check coolant levels and condition
- Inspect hoses and belts for cracks
- Ensure proper antifreeze mixture

## 4. Maintain Your Brakes
Winter driving requires reliable brakes. Have them inspected for:
- Brake pad thickness
- Brake fluid levels
- Rotor condition

## 5. Prepare an Emergency Kit
Include items like:
- Jumper cables
- Emergency blanket
- First aid kit
- Flashlight and batteries

Contact Tinspol Motors for professional winter maintenance services.
    `,
    author: "James Tinspol",
    date: "2024-05-15",
    readTime: "5 min read",
    category: "Maintenance Tips",
    image: "/images/routine-service.jpg",
    featured: true,
    published: true
  },
  {
    id: "tyre-safety-guide",
    title: "Complete Guide to Tyre Safety and Maintenance",
    excerpt: "Learn how to check your tyres, when to replace them, and how to extend their lifespan with proper care.",
    content: `
# Complete Guide to Tyre Safety and Maintenance

Your tyres are the only contact point between your vehicle and the road. Proper maintenance is essential for safety and performance.

## Regular Inspections
Check your tyres weekly for:
- Proper inflation pressure
- Uneven wear patterns
- Cuts, cracks, or bulges
- Foreign objects

## When to Replace Tyres
Replace tyres when:
- Tread depth is below 1.6mm
- Sidewall damage is visible
- Age exceeds 6 years regardless of wear

## Extending Tyre Life
- Rotate tyres every 10,000km
- Maintain proper alignment
- Avoid aggressive driving
- Keep tyres properly inflated

Visit Tinspol Motors for professional tyre services and expert advice.
    `,
    author: "Michael Chikwanha",
    date: "2024-05-10",
    readTime: "7 min read",
    category: "Safety",
    image: "/images/tyre-service.jpg",
    featured: false,
    published: true
  }
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.filter(post => post.published)
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function createPost(post: Omit<BlogPost, 'id' | 'date'>): BlogPost {
  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
    date: new Date().toISOString().split('T')[0]
  }
  blogPosts.push(newPost)
  return newPost
}

export function updatePost(id: string, updates: Partial<BlogPost>): BlogPost | null {
  const index = blogPosts.findIndex(post => post.id === id)
  if (index === -1) return null
  
  blogPosts[index] = { ...blogPosts[index], ...updates }
  return blogPosts[index]
}

export function deletePost(id: string): boolean {
  const index = blogPosts.findIndex(post => post.id === id)
  if (index === -1) return false
  
  blogPosts.splice(index, 1)
  return true
}

export function getAllPostsAdmin(): BlogPost[] {
  return blogPosts
}