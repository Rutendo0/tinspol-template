import { NextResponse } from 'next/server'
import cloudinary from '@/lib/cloudinary'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Only image files are allowed' }, { status: 400 })
    }

    // 5MB limit
    const maxSize = 5 * 1024 * 1024
    if ((file as any).size > maxSize) {
      return NextResponse.json({ error: 'File too large (max 5MB)' }, { status: 400 })
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Upload to Cloudinary using upload_stream to avoid temp files
    const uploadResult: { secure_url: string } = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'tinspol/uploads', resource_type: 'image' },
        (error, result) => {
          if (error || !result) return reject(error || new Error('Upload failed'))
          resolve(result as any)
        }
      )
      stream.end(buffer)
    })

    return NextResponse.json({ url: uploadResult.secure_url })
  } catch (err) {
    console.error('Upload error:', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}