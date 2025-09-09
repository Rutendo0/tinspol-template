export interface GalleryItem {
  id: string
  title: string
  description: string
  category: 'before-after' | 'respray' | 'suspension' | 'alignment' | 'detailing'
  beforeImage?: string
  afterImage?: string
  image?: string
  date: string
  featured: boolean
  published: boolean
}

// In-memory storage for demo - in production, use a database
let galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Complete Engine Overhaul",
    description: "Full engine rebuild on Toyota Camry - before and after comparison showing the transformation.",
    category: "before-after",
    beforeImage: "/images/engine-before.jpg",
    afterImage: "/images/engine-after.jpg",
    date: "2024-05-20",
    featured: true,
    published: true
  },
  {
    id: "2",
    title: "Professional Car Respray",
    description: "Complete respray job on Honda Civic - from faded paint to showroom finish.",
    category: "respray",
    beforeImage: "/images/respray-before.jpg",
    afterImage: "/images/respray-after.jpg",
    date: "2024-05-18",
    featured: false,
    published: true
  },
  {
    id: "3",
    title: "Suspension System Upgrade",
    description: "Complete suspension overhaul including shocks, struts, and springs replacement.",
    category: "suspension",
    image: "/images/suspension-work.jpg",
    date: "2024-05-15",
    featured: false,
    published: true
  },
  {
    id: "4",
    title: "Precision Wheel Alignment",
    description: "Professional wheel alignment service ensuring optimal tyre wear and vehicle handling.",
    category: "alignment",
    image: "/images/wheel-alignment.jpg",
    date: "2024-05-12",
    featured: false,
    published: true
  },
  {
    id: "5",
    title: "Premium Car Detailing",
    description: "Full interior and exterior detailing service - bringing back that new car shine.",
    category: "detailing",
    beforeImage: "/images/detail-before.jpg",
    afterImage: "/images/detail-after.jpg",
    date: "2024-05-10",
    featured: true,
    published: true
  }
]

export function getAllGalleryItems(): GalleryItem[] {
  return galleryItems.filter(item => item.published)
}

export function getGalleryItemById(id: string): GalleryItem | undefined {
  return galleryItems.find(item => item.id === id)
}

export function createGalleryItem(item: Omit<GalleryItem, 'id' | 'date'>): GalleryItem {
  const newItem: GalleryItem = {
    ...item,
    id: Date.now().toString(),
    date: new Date().toISOString().split('T')[0]
  }
  galleryItems.push(newItem)
  return newItem
}

export function updateGalleryItem(id: string, updates: Partial<GalleryItem>): GalleryItem | null {
  const index = galleryItems.findIndex(item => item.id === id)
  if (index === -1) return null
  
  galleryItems[index] = { ...galleryItems[index], ...updates }
  return galleryItems[index]
}

export function deleteGalleryItem(id: string): boolean {
  const index = galleryItems.findIndex(item => item.id === id)
  if (index === -1) return false
  
  galleryItems.splice(index, 1)
  return true
}

export function getAllGalleryItemsAdmin(): GalleryItem[] {
  return galleryItems
}

export const categoryLabels = {
  'before-after': 'Before/After Repairs',
  'respray': 'Resprays',
  'suspension': 'Suspension Jobs',
  'alignment': 'Wheel Alignment',
  'detailing': 'Detailing'
}