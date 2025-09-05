'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Clock,
  Filter,
  FileText
} from 'lucide-react'
import Link from 'next/link'
import { AdminLayout } from '@/components/admin/admin-layout'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  published: boolean
  featured: boolean
  createdAt: string
  updatedAt: string
  author: {
    name: string
  }
}

export default function AdminBlogPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all')

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
      return
    }
    fetchPosts()
  }, [session, status, router])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/blog')
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        setPosts(posts.filter(post => post.id !== id))
      }
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'published' && post.published) ||
                         (filterStatus === 'draft' && !post.published)
    return matchesSearch && matchesFilter
  })

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
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
            <p className="text-gray-400">Manage your blog content</p>
          </div>
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/admin/blog/new">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('all')}
                  className={filterStatus === 'all' ? 'bg-red-600 hover:bg-red-700 text-white' : 'border-white/20 text-white hover:bg-white hover:text-black bg-transparent'}
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === 'published' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('published')}
                  className={filterStatus === 'published' ? 'bg-red-600 hover:bg-red-700 text-white' : 'border-white/20 text-white hover:bg-white hover:text-black bg-transparent'}
                >
                  Published
                </Button>
                <Button
                  variant={filterStatus === 'draft' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('draft')}
                  className={filterStatus === 'draft' ? 'bg-red-600 hover:bg-red-700 text-white' : 'border-white/20 text-white hover:bg-white hover:text-black bg-transparent'}
                >
                  Drafts
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts List */}
        <div className="space-y-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                        {post.featured && (
                          <Badge className="bg-yellow-600 text-white">Featured</Badge>
                        )}
                        <Badge variant={post.published ? "default" : "secondary"}>
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                      </div>
                      <p className="text-gray-300 mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Updated {new Date(post.updatedAt).toLocaleDateString()}</span>
                        </div>
                        <Badge variant="outline" className="border-red-500/50 text-red-400">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Button size="sm" variant="outline" asChild className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent">
                        <Link href={`/blog/${post.slug}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent">
                        <Link href={`/admin/blog/${post.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-600 hover:text-white">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-gray-900 border-white/20">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-white">Delete Post</AlertDialogTitle>
                            <AlertDialogDescription className="text-gray-300">
                              Are you sure you want to delete "{post.title}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => handleDelete(post.id)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No posts found</h3>
                <p className="text-gray-400 mb-4">
                  {searchTerm || filterStatus !== 'all' 
                    ? "Try adjusting your search or filter criteria"
                    : "Get started by creating your first blog post"
                  }
                </p>
                {!searchTerm && filterStatus === 'all' && (
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link href="/admin/blog/new">
                      <Plus className="h-4 w-4 mr-2" />
                      Create First Post
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}