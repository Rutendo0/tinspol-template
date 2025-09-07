'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState, use } from 'react'
import { AdminLayout } from '@/components/admin/admin-layout'
import { BlogEditor } from '@/components/admin/blog-editor'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string
  category: string
  featured: boolean
  published: boolean
  readTime: string
}

interface SessionResponse {
  user: { id: string; email: string; role: string }
}

export default function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [session, setSession] = useState<SessionResponse | null>(null)
  const [post, setPost] = useState<BlogPost | null>(null)
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
        await fetchPost()
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

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/admin/blog/${resolvedParams.id}`, { credentials: 'include' })
      if (response.ok) {
        const data = await response.json()
        setPost(data)
      } else if (response.status === 404) {
        router.push('/admin/blog')
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      router.push('/admin/blog')
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

  if (!session || !post) {
    return null
  }

  return (
    <AdminLayout>
      <BlogEditor post={post} isEditing={true} />
    </AdminLayout>
  )
}