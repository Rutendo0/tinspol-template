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
  Filter,
  Image
} from 'lucide-react'
import Link from 'next/link'
import { AdminLayout } from '@/components/admin/admin-layout'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'

interface GalleryItem {
  id: string
  title: string
  description?: string
  beforeImage: string
  afterImage: string
  category: string
  featured: boolean
  createdAt: string
  updatedAt: string
  author: {
    name: string
  }
}

const categoryLabels = {
  REPAIRS: 'Repairs',
  RESPRAYS: 'Resprays',
  SUSPENSION: 'Suspension',
  WHEEL_ALIGNMENT: 'Wheel Alignment',
  DETAILING: 'Detailing',
  OTHER: 'Other'
}

export default function AdminGalleryPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState<string>('all')

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
      return
    }
    fetchItems()
  }, [session, status, router])

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/admin/gallery')
      if (response.ok) {
        const data = await response.json()
        setItems(data)
      }
    } catch (error) {
      console.error('Error fetching gallery items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        setItems(items.filter(item => item.id !== id))
      }
    } catch (error) {
      console.error('Error deleting gallery item:', error)
    }
  }

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesFilter = filterCategory === 'all' || item.category === filterCategory
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
            <h1 className="text-3xl font-bold text-white">Gallery</h1>
            <p className="text-gray-400">Manage your before/after showcase</p>
          </div>
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/admin/gallery/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Gallery Item
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
                    placeholder="Search gallery items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={filterCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterCategory('all')}
                  className={filterCategory === 'all' ? 'bg-red-600 hover:bg-red-700 text-white' : 'border-white/20 text-white hover:bg-white hover:text-black bg-transparent'}
                >
                  All
                </Button>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <Button
                    key={key}
                    variant={filterCategory === key ? 'default' : 'outline'}
                    onClick={() => setFilterCategory(key)}
                    className={filterCategory === key ? 'bg-red-600 hover:bg-red-700 text-white' : 'border-white/20 text-white hover:bg-white hover:text-black bg-transparent'}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Card key={item.id} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                <div className="relative">
                  <div className="grid grid-cols-2 h-48">
                    <div className="relative">
                      <img
                        src={item.beforeImage}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="text-xs">Before</Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={item.afterImage}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-green-600 text-xs">After</Badge>
                      </div>
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-yellow-600">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white truncate">{item.title}</h3>
                      <Badge variant="outline" className="border-red-500/50 text-red-400 text-xs">
                        {categoryLabels[item.category as keyof typeof categoryLabels]}
                      </Badge>
                    </div>
                    {item.description && (
                      <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Button size="sm" variant="outline" asChild className="h-7 w-7 p-0 border-white/20 text-white hover:bg-white hover:text-black bg-transparent">
                          <Link href={`/gallery`}>
                            <Eye className="h-3 w-3" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="h-7 w-7 p-0 border-white/20 text-white hover:bg-white hover:text-black bg-transparent">
                          <Link href={`/admin/gallery/${item.id}/edit`}>
                            <Edit className="h-3 w-3" />
                          </Link>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="sm" variant="outline" className="h-7 w-7 p-0 border-red-500/50 text-red-400 hover:bg-red-600 hover:text-white">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-gray-900 border-white/20">
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-white">Delete Gallery Item</AlertDialogTitle>
                              <AlertDialogDescription className="text-gray-300">
                                Are you sure you want to delete "{item.title}"? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={() => handleDelete(item.id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-12 text-center">
                  <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No gallery items found</h3>
                  <p className="text-gray-400 mb-4">
                    {searchTerm || filterCategory !== 'all' 
                      ? "Try adjusting your search or filter criteria"
                      : "Get started by adding your first before/after showcase"
                    }
                  </p>
                  {!searchTerm && filterCategory === 'all' && (
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link href="/admin/gallery/new">
                        <Plus className="h-4 w-4 mr-2" />
                        Add First Item
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}