import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const limit = searchParams.get('limit')

    const where: any = { published: true }
    
    if (category && category !== 'All') {
      where.category = category
    }
    
    if (featured === 'true') {
      where.featured = true
    }

    const posts = await prisma.blogPost.findMany({
      where,
      include: {
        author: {
          select: {
            name: true,
          }
        }
      },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ],
      take: limit ? parseInt(limit) : undefined
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Blog API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}