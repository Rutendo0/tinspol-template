'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Save, Eye, Upload, X, Link, Image } from 'lucide-react'
import { FileUpload } from '@/components/ui/file-upload'
import { showToast } from '@/components/ui/toaster'
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog'

interface BlogPost {
  id?: string
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

interface BlogEditorProps {
  post?: BlogPost
  isEditing?: boolean
}

const categories = [
  'Maintenance Tips',
  'Safety',
  'Engine Care',
  'Promotions',
  'Services',
  'Car Care',
  'News',
  'Tutorials'
]

export function BlogEditor({ post, isEditing = false }: BlogEditorProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<BlogPost>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '',
    category: 'Maintenance Tips',
    featured: false,
    published: false,
    readTime: '5 min read',
    ...post
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [postCreatedDialogOpen, setPostCreatedDialogOpen] = useState(false)
  const [createdPost, setCreatedPost] = useState<{ id: string; slug: string } | null>(null)
  const [imageInputMethod, setImageInputMethod] = useState<'upload' | 'url'>('upload')
  const [imageUrl, setImageUrl] = useState('')
  const [contentImageMethod, setContentImageMethod] = useState<'upload' | 'url'>('upload')
  const [contentBody, setContentBody] = useState('')
  const [contentImages, setContentImages] = useState<string[]>([])

  // Initialize content fields from existing post (migrate old posts)
  useEffect(() => {
    const raw = (post?.content || formData.content || '').trim()
    if (!raw) {
      setContentBody('')
      setContentImages([])
      return
    }
    // Extract images in markdown ![alt](url)
    const matches = Array.from(raw.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g))
    const urls = matches.map((m) => m[1]).filter(Boolean)
    setContentImages(urls)

    // Remove image markdown from body
    const bodyOnly = raw.replace(/!\[[^\]]*\]\(([^)]+)\)/g, '').trim()
    setContentBody(bodyOnly)
  // only run once on mount or when post changes
  }, [post])

  // Auto-generate slug from title
  useEffect(() => {
    if (!isEditing && formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }, [formData.title, isEditing])

  async function submitPost(isPublished: boolean) {
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const url = isEditing ? `/api/admin/blog/${post?.id}` : '/api/admin/blog'
      const method = isEditing ? 'PUT' : 'POST'

      // Build payload directly to avoid stale state
      const combinedContent = [
        contentBody.trim(),
        ...contentImages.map((url) => `![Image](${url})`),
      ]
        .filter(Boolean)
        .join('\n\n')

      const payload = {
        ...formData,
        content: combinedContent,
        published: isPublished,
      }

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSuccess(isEditing ? 'Post updated successfully!' : 'Post created successfully!')
        showToast(isEditing ? 'Post updated' : 'Post created', 'success')
        const data = await response.json().catch(() => null)
        if (!isEditing && data) {
          setCreatedPost({ id: data.id, slug: data.slug })
          setPostCreatedDialogOpen(true)
          return
        }
        router.push('/admin/blog')
        router.refresh()
        return
      } else {
        const data = await response.json().catch(() => ({}))
        setError(data.error || 'An error occurred')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitPost(formData.published)
  }

  const handleSaveDraft = async () => {
    await submitPost(false)
  }

  const handlePublish = async () => {
    await submitPost(true)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            {isEditing ? 'Edit Post' : 'Create New Post'}
          </h1>
          <p className="text-gray-400">
            {isEditing ? 'Update your blog post' : 'Write and publish a new blog post'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {formData.published && (
            <Badge className="bg-green-600">Published</Badge>
          )}
          {formData.featured && (
            <Badge className="bg-yellow-600">Featured</Badge>
          )}
        </div>
      </div>

      {/* Alerts */}
      {error && (
        <Alert className="border-red-500/50 bg-red-500/10">
          <AlertDescription className="text-red-400">{error}</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert className="border-green-500/50 bg-green-500/10">
          <AlertDescription className="text-green-400">{success}</AlertDescription>
        </Alert>
      )}

      <form id="blog-form" onSubmit={handleSubmit}>
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="bg-white/10 border-white/20">
            <TabsTrigger value="content" className="data-[state=active]:bg-red-600">Content</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-red-600">Settings</TabsTrigger>
            <TabsTrigger value="preview" className="data-[state=active]:bg-red-600">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            {/* Basic Info */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Post Content</CardTitle>
                <CardDescription className="text-gray-300">
                  The main content of your blog post
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Enter post title..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug" className="text-white">Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="post-url-slug"
                    required
                  />
                  <p className="text-xs text-gray-400">
                    URL: /blog/{formData.slug}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt" className="text-white">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Brief description of the post..."
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="content" className="text-white">Content</Label>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 p-1 bg-white/5 rounded-lg">
                        <Button
                          type="button"
                          variant={contentImageMethod === 'upload' ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => setContentImageMethod('upload')}
                          className={contentImageMethod === 'upload' ? 'bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1' : 'text-white hover:bg-white/10 hover:text-white text-xs px-2 py-1'}
                        >
                          <Upload className="h-3 w-3 mr-1" />
                          Upload
                        </Button>
                        <Button
                          type="button"
                          variant={contentImageMethod === 'url' ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => setContentImageMethod('url')}
                          className={contentImageMethod === 'url' ? 'bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1' : 'text-white hover:bg-white/10 hover:text-white text-xs px-2 py-1'}
                        >
                          <Link className="h-3 w-3 mr-1" />
                          URL
                        </Button>
                      </div>
                      
                      {contentImageMethod === 'upload' ? (
                        <FileUpload
                          mode="api"
                          onUpload={(url) => {
                            setContentImages((prev) => [...prev, url])
                            setSuccess('Image added to content successfully!')
                            setTimeout(() => setSuccess(''), 3000)
                          }}
                          className="text-white hover:text-white hover:bg-white/10 bg-transparent border-white/20 text-xs px-2 py-1"
                        >
                          <Image className="h-4 w-4 mr-1" />
                          Add Image
                        </FileUpload>
                      ) : (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const imageUrl = prompt('Enter image URL:')
                            if (imageUrl) {
                              setContentImages((prev) => [...prev, imageUrl])
                              setSuccess('Image URL added to content successfully!')
                              setTimeout(() => setSuccess(''), 3000)
                            }
                          }}
                          className="text-white hover:text-white hover:bg-white/10 bg-transparent border-white/20 text-xs px-2 py-1"
                        >
                          <Image className="h-4 w-4 mr-1" />
                          Add Image
                        </Button>
                      )}
                    </div>
                  </div>
                  <Textarea
                    id="content"
                    value={contentBody}
                    onChange={(e) => setContentBody(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[400px]"
                    placeholder="Write your blog post content here..."
                    required
                  />
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Supports Markdown formatting</span>
                    <span>Use "Add Image" buttons above to insert images</span>
                  </div>

                  {/* Visual preview of content images (separate from textarea) */}
                  {!!contentImages.length && (
                    <div className="mt-4 space-y-2">
                      <Label className="text-white">Content Images</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {contentImages.map((url, idx) => (
                          <div key={idx} className="relative rounded-lg overflow-hidden border border-white/10">
                            <img src={url} alt={`Image ${idx + 1}`} className="w-full h-32 object-cover" />
                            <Button
                              type="button"
                              size="sm"
                              variant="destructive"
                              className="absolute top-2 right-2"
                              onClick={() => setContentImages((prev) => prev.filter((_, i) => i !== idx))}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            {/* Settings */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Post Settings</CardTitle>
                <CardDescription className="text-gray-300">
                  Configure post metadata and visibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-white">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-white/20">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="text-white hover:bg-white/10">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="readTime" className="text-white">Read Time</Label>
                    <Input
                      id="readTime"
                      value={formData.readTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="5 min read"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Featured Image</Label>
                  <div className="space-y-4">
                    {formData.image && (
                      <div className="relative">
                        <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
                          <img
                            src={formData.image}
                            alt="Featured image"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.error('Error loading blog image:', e)
                              console.log('Image src length:', formData.image.length)
                              console.log('Image src start:', formData.image.substring(0, 100))
                              // Show error state
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                              const parent = target.parentElement
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="flex items-center justify-center h-full text-red-400">
                                    <div class="text-center">
                                      <p>Failed to load image</p>
                                      <p class="text-xs mt-1">Check console for details</p>
                                    </div>
                                  </div>
                                `
                              }
                            }}
                            onLoad={() => console.log('Blog image loaded successfully')}
                          />
                        </div>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, image: '' }))
                            setImageUrl('')
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    
                    {/* Image Input Method Toggle */}
                    <div className="flex items-center space-x-2 p-1 bg-white/5 rounded-lg">
                      <Button
                        type="button"
                        variant={imageInputMethod === 'upload' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setImageInputMethod('upload')}
                        className={imageInputMethod === 'upload' ? 'bg-red-600 hover:bg-red-700 text-white' : 'text-white hover:bg-white/10 hover:text-white'}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </Button>
                      <Button
                        type="button"
                        variant={imageInputMethod === 'url' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setImageInputMethod('url')}
                        className={imageInputMethod === 'url' ? 'bg-red-600 hover:bg-red-700 text-white' : 'text-white hover:bg-white/10 hover:text-white'}
                      >
                        <Link className="h-4 w-4 mr-2" />
                        URL
                      </Button>
                    </div>

                    {/* Upload Method */}
                    {imageInputMethod === 'upload' && (
                      <FileUpload
                        onUpload={(url) => {
                          setFormData(prev => ({ ...prev, image: url }))
                          console.log('Blog image uploaded:', url.substring(0, 50) + '...')
                        }}
                        className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                      >
                        {formData.image ? 'Change Image' : 'Upload Image'}
                      </FileUpload>
                    )}

                    {/* URL Method */}
                    {imageInputMethod === 'url' && (
                      <div className="space-y-2">
                        <Input
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="Enter image URL (https://example.com/image.jpg)"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            if (imageUrl) {
                              setFormData(prev => ({ ...prev, image: imageUrl }))
                              setImageUrl('')
                            }
                          }}
                          className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                          disabled={!imageUrl}
                        >
                          <Image className="h-4 w-4 mr-2" />
                          Use Image URL
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-white">Featured Post</Label>
                      <p className="text-sm text-gray-400">Show this post prominently on the blog page</p>
                    </div>
                    <Switch
                      checked={formData.featured}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-white">Published</Label>
                      <p className="text-sm text-gray-400">Make this post visible to the public</p>
                    </div>
                    <Switch
                      checked={formData.published}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, published: checked }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            {/* Preview */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Preview</CardTitle>
                <CardDescription className="text-gray-300">
                  How your post will appear on the blog
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt={formData.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  )}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="border-red-500/50 text-red-400">
                        {formData.category}
                      </Badge>
                      <span className="text-sm text-gray-400">{formData.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">{formData.title || 'Post Title'}</h2>
                    <p className="text-gray-300">{formData.excerpt || 'Post excerpt will appear here...'}</p>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <div
                      className="text-gray-300 whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{
                        __html: ([
                          contentBody,
                          ...contentImages.map((url) => `![Image](${url})`),
                        ]
                          .filter(Boolean)
                          .join('\n\n') || 'Post content will appear here...')
                          .split('\n\n')
                          .map((p) => p.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" class="my-4 rounded-lg" />'))
                          .map((p) => `<p>${p}</p>`) 
                          .join(''),
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-white/20">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/blog')}
            className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
          >
            Cancel
          </Button>
          <div className="flex items-center space-x-3">
            {!formData.published && (
              <Button
                type="button"
                variant="outline"
                onClick={handleSaveDraft}
                disabled={loading}
                className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
            )}
            <Button
              type="button"
              onClick={handlePublish}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700"
            >
              {loading ? 'Saving...' : (formData.published ? 'Update' : 'Publish')}
            </Button>
          </div>
        </div>
      </form>

      {/* Post Created Dialog */}
      {!isEditing && (
        <AlertDialog open={postCreatedDialogOpen} onOpenChange={setPostCreatedDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Post created</AlertDialogTitle>
              <AlertDialogDescription>
                Your post has been created successfully. What would you like to do next?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                // Ensure button doesn't submit the form
                onClick={(e) => {
                  e.preventDefault()
                  // Close dialog first, then navigate a tick later
                  setPostCreatedDialogOpen(false)
                  setTimeout(() => {
                    router.replace('/admin/blog/new')
                    router.refresh()
                  }, 0)
                }}
              >
                Create another
              </AlertDialogCancel>
              <AlertDialogAction
                // Ensure button doesn't submit the form
                onClick={(e) => {
                  e.preventDefault()
                  // Close dialog first, then navigate a tick later
                  setPostCreatedDialogOpen(false)
                  const target = createdPost ? `/admin/blog/${createdPost.id}/edit` : '/admin/blog'
                  setTimeout(() => {
                    router.push(target)
                    router.refresh()
                  }, 0)
                }}
              >
                Go to post in dashboard
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  )
}