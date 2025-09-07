'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState, use } from 'react'
import { AdminLayout } from '@/components/admin/admin-layout'
import { GalleryEditor } from '@/components/admin/gallery-editor'

interface GalleryItem {
  id: string
  title: string
  description?: string
  beforeImage: string
  afterImage: string
  category: string
  featured: boolean
}

interface SessionResponse {
  user: { id: string; email: string; role: string }
}

export default function EditGalleryItemPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [session, setSession] = useState<SessionResponse | null>(null)
  const [item, setItem] = useState<GalleryItem | null>(null)
  const [loading, setLoading] = useState(true)
  const resolvedParams = use(params)

  useEffect(() => {
    const getSessionAndData = async () => {
      try {
        const res = await fetch('/api/session', { credentials: 'include' })
        if (!res.ok) {
          router.push('/admin/login')
          return
        }
        const data: SessionResponse = await res.json()
        setSession(data)
        await fetchItem()
      } catch (e) {
        router.push('/admin/login')
        return
      } finally {
        setLoading(false)
      }
    }
    getSessionAndData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedParams.id])

  const fetchItem = async () => {
    try {
      const response = await fetch(`/api/admin/gallery/${resolvedParams.id}`, { credentials: 'include' })
      if (response.ok) {
        const data = await response.json()
        setItem(data)
      } else if (response.status === 404) {
        router.push('/admin/gallery')
      }
    } catch (error) {
      console.error('Error fetching gallery item:', error)
      router.push('/admin/gallery')
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
      </AdminLayout>
    )
  }

  if (!session || !item) {
    return null
  }

  return (
    <AdminLayout>
      <GalleryEditor item={item} isEditing={true} />
    </AdminLayout>
  )
}