'use client'

import { useSession } from 'next-auth/react'
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

export default function EditGalleryItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [item, setItem] = useState<GalleryItem | null>(null)
  const [loading, setLoading] = useState(true)
  const resolvedParams = use(params)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
      return
    }
    fetchItem()
  }, [session, status, router, resolvedParams.id])

  const fetchItem = async () => {
    try {
      const response = await fetch(`/api/admin/gallery/${resolvedParams.id}`)
      if (response.ok) {
        const data = await response.json()
        setItem(data)
      } else if (response.status === 404) {
        router.push('/admin/gallery')
      }
    } catch (error) {
      console.error('Error fetching gallery item:', error)
      router.push('/admin/gallery')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
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