'use client'

import { useSession } from 'next-auth/react'
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

export default function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const resolvedParams = use(params)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
      return
    }
    fetchPost()
  }, [session, status, router, resolvedParams.id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/admin/blog/${resolvedParams.id}`)
      if (response.ok) {
        const data = await response.json()
        setPost(data)
      } else if (response.status === 404) {
        router.push('/admin/blog')
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      router.push('/admin/blog')
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

  if (!session || !post) {
    return null
  }

  return (
    <AdminLayout>
      <BlogEditor post={post} isEditing={true} />
    </AdminLayout>
  )
}