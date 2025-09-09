import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

// GET /api/media/:id -> returns the binary image stored in DB
export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ id: string }> } | { params: { id: string } }
) {
  try {
    const rawParams = (ctx as any).params
    const resolvedParams = rawParams && typeof rawParams.then === 'function' ? await rawParams : rawParams
    const id: string = resolvedParams?.id

    const media = await prisma.media.findUnique({
      where: { id },
      select: { data: true, mimeType: true }
    })

    if (!media) {
      return new NextResponse('Not Found', { status: 404 })
    }

    return new NextResponse(media.data as any, {
      status: 200,
      headers: {
        'Content-Type': media.mimeType,
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    })
  } catch (err) {
    console.error('Media GET error:', err)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}