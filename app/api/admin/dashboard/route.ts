import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/session'

export async function GET(request: NextRequest) {
  try {
    const session = getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get blog post stats
    const totalPosts = await prisma.blogPost.count()
    const publishedPosts = await prisma.blogPost.count({ where: { published: true } })
    const draftPosts = totalPosts - publishedPosts

    // Get gallery stats
    const totalGalleryItems = await prisma.galleryItem.count()

    // Get recent blog posts
    const recentPosts = await prisma.blogPost.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: { id: true, title: true, image: true, slug: true, published: true, createdAt: true }
    })

    // Get recent gallery items
    const recentGalleryItems = await prisma.galleryItem.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: { id: true, title: true, category: true, createdAt: true }
    })

    return NextResponse.json({
      totalPosts,
      publishedPosts,
      draftPosts,
      totalGalleryItems,
      recentPosts,
      recentGalleryItems,
    })
  } catch (error) {
    console.error('Dashboard API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}