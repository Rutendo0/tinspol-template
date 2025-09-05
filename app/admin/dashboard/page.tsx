'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Image, 
  Users, 
  BarChart3, 
  Plus,
  Eye,
  Edit,
  Trash2,
  Calendar
} from 'lucide-react'
import Link from 'next/link'
import { AdminLayout } from '@/components/admin/admin-layout'

interface DashboardStats {
  totalPosts: number
  publishedPosts: number
  draftPosts: number
  totalGalleryItems: number
  recentPosts: any[]
  recentGalleryItems: any[]
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
      return
    }
    fetchDashboardStats()
  }, [session, status, router])

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch('/api/admin/dashboard')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error)
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

  if (!session) {
    return null
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back, {session.user?.name}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Posts</CardTitle>
              <FileText className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats?.totalPosts || 0}</div>
              <p className="text-xs text-gray-400">
                {stats?.publishedPosts || 0} published, {stats?.draftPosts || 0} drafts
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Gallery Items</CardTitle>
              <Image className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats?.totalGalleryItems || 0}</div>
              <p className="text-xs text-gray-400">Before/after showcases</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Quick Actions</CardTitle>
              <Plus className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button asChild size="sm" className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/admin/blog/new">New Post</Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent">
                  <Link href="/admin/gallery/new">Add Gallery</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Analytics</CardTitle>
              <BarChart3 className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Coming Soon</div>
              <p className="text-xs text-gray-400">View insights & metrics</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Blog Posts */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Recent Blog Posts</CardTitle>
                <Button asChild size="sm" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent">
                  <Link href="/admin/blog">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats?.recentPosts?.length ? (
                  stats.recentPosts.map((post: any) => (
                    <div key={post.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-white truncate">{post.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant={post.published ? "default" : "secondary"} className="text-xs">
                            {post.published ? "Published" : "Draft"}
                          </Badge>
                          <span className="text-xs text-gray-400">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Button size="sm" variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
                          <Link href={`/admin/blog/${post.id}/edit`}>
                            <Edit className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center py-4">No blog posts yet</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recent Gallery Items */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Recent Gallery Items</CardTitle>
                <Button asChild size="sm" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent">
                  <Link href="/admin/gallery">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats?.recentGalleryItems?.length ? (
                  stats.recentGalleryItems.map((item: any) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-white truncate">{item.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs border-red-500/50 text-red-400">
                            {item.category.replace('_', ' ')}
                          </Badge>
                          <span className="text-xs text-gray-400">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Button size="sm" variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
                          <Link href={`/admin/gallery/${item.id}/edit`}>
                            <Edit className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center py-4">No gallery items yet</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}