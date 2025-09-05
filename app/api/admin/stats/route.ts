import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const [totalPosts, publishedPosts, totalGalleryItems, totalUsers] = await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { published: true } }),
      prisma.galleryItem.count(),
      prisma.user.count()
    ])

    return NextResponse.json({
      totalPosts,
      publishedPosts,
      totalGalleryItems,
      totalUsers
    })
  } catch (error) {
    console.error('Stats API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}