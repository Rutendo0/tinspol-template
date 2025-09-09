import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/session'
import { prisma } from '@/lib/prisma'

// Handle async params (Next.js 15)
export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ id: string }> } | { params: { id: string } }
) {
  try {
    const session = await getSession()
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const rawParams = (ctx as any).params
    const resolvedParams = rawParams && typeof rawParams.then === 'function' ? await rawParams : rawParams
    const id: string = resolvedParams?.id

    const item = await prisma.galleryItem.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            name: true,
          }
        }
      }
    })

    if (!item) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 })
    }

    return NextResponse.json(item)
  } catch (error) {
    console.error('Gallery GET API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  ctx: { params: Promise<{ id: string }> } | { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, description, beforeImage, afterImage, category, featured } = body

    const rawParams = (ctx as any).params
    const resolvedParams = rawParams && typeof rawParams.then === 'function' ? await rawParams : rawParams
    const id: string = resolvedParams?.id

    const item = await prisma.galleryItem.update({
      where: { id },
      data: {
        title,
        description,
        beforeImage,
        afterImage,
        category,
        featured: featured || false,
      },
      include: {
        author: {
          select: {
            name: true,
          }
        }
      }
    })

    return NextResponse.json(item)
  } catch (error) {
    console.error('Gallery PUT API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  ctx: { params: Promise<{ id: string }> } | { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const rawParams = (ctx as any).params
    const resolvedParams = rawParams && typeof rawParams.then === 'function' ? await rawParams : rawParams
    const id: string = resolvedParams?.id

    await prisma.galleryItem.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Gallery DELETE API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}