'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/admin/admin-layout'
import { GalleryEditor } from '@/components/admin/gallery-editor'

interface SessionResponse {
  user: { id: string; email: string; role: string }
}

export default function NewGalleryItemPage() {
  const router = useRouter()
  const [session, setSession] = useState<SessionResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      try {
        const res = await fetch('/api/session', { credentials: 'include' })
        if (!res.ok) {
          router.push('/admin/login')
          return
        }
        const data: SessionResponse = await res.json()
        setSession(data)
      } catch (e) {
        router.push('/admin/login')
        return
      } finally {
        setLoading(false)
      }
    }
    getSession()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
      </AdminLayout>
    )
  }

  if (!session) {
    return null
  }

  return (
    <AdminLayout>
      <GalleryEditor />
    </AdminLayout>
  )
}