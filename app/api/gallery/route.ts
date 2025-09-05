import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    const limit = searchParams.get('limit')

    const where: any = {}
    
    if (category && category !== 'ALL') {
      where.category = category
    }
    
    if (featured === 'true') {
      where.featured = true
    }

    const items = await prisma.galleryItem.findMany({
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

    return NextResponse.json(items)
  } catch (error) {
    console.error('Gallery API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}