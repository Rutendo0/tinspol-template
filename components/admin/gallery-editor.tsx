'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Save, Upload, X, Image as ImageIcon, Link } from 'lucide-react'
import { CldUploadWidget } from 'next-cloudinary'
import { FileUpload } from '@/components/ui/file-upload'
import { showToast } from '@/components/ui/toaster'
import { BeforeAfterPreview } from '@/components/admin/before-after-preview'

interface GalleryItem {
  id?: string
  title: string
  description?: string
  beforeImage: string
  afterImage: string
  category: string
  featured: boolean
}

interface GalleryEditorProps {
  item?: GalleryItem
  isEditing?: boolean
}

const categories = [
  { value: 'REPAIRS', label: 'Repairs' },
  { value: 'RESPRAYS', label: 'Resprays' },
  { value: 'SUSPENSION', label: 'Suspension' },
  { value: 'WHEEL_ALIGNMENT', label: 'Wheel Alignment' },
  { value: 'DETAILING', label: 'Detailing' },
  { value: 'OTHER', label: 'Other' }
]

export function GalleryEditor({ item, isEditing = false }: GalleryEditorProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<GalleryItem>({
    title: '',
    description: '',
    beforeImage: '',
    afterImage: '',
    category: 'REPAIRS',
    featured: false,
    ...item
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [beforeImageMethod, setBeforeImageMethod] = useState<'upload' | 'url'>('upload')
  const [afterImageMethod, setAfterImageMethod] = useState<'upload' | 'url'>('upload')
  const [beforeImageUrl, setBeforeImageUrl] = useState('')
  const [afterImageUrl, setAfterImageUrl] = useState('')
  const hasCloudinary = false // Disabled for now - using local file upload instead

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    // Validation
    if (!formData.beforeImage || !formData.afterImage) {
      setError('Both before and after images are required')
      setLoading(false)
      return
    }

    try {
      const url = isEditing ? `/api/admin/gallery/${item?.id}` : '/api/admin/gallery'
      const method = isEditing ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(isEditing ? 'Gallery item updated successfully!' : 'Gallery item created successfully!')
        showToast(isEditing ? 'Gallery updated' : 'Gallery created', 'success')
        router.push('/admin/gallery')
        router.refresh()
        return
      } else {
        const data = await response.json()
        setError(data.error || 'An error occurred')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            {isEditing ? 'Edit Gallery Item' : 'Add Gallery Item'}
          </h1>
          <p className="text-gray-400">
            {isEditing ? 'Update your before/after showcase' : 'Create a new before/after showcase'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
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

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Gallery Item Details</CardTitle>
            <CardDescription className="text-gray-300">
              Basic information about your before/after showcase
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
                placeholder="e.g., BMW 3 Series Paint Restoration"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">Description (Optional)</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                placeholder="Brief description of the work done..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="text-white">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/20">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value} className="text-white hover:bg-white/10">
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Images */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Before & After Images</CardTitle>
            <CardDescription className="text-gray-300">
              Upload the before and after images for your showcase
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Before Image */}
            <div className="space-y-4">
              <Label className="text-white">Before Image</Label>
              {formData.beforeImage ? (
                <div className="relative">
                  <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={formData.beforeImage}
                      alt="Before"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Error loading before image:', e)
                        console.log('Image src length:', formData.beforeImage.length)
                        console.log('Image src start:', formData.beforeImage.substring(0, 100))
                        // Show error state
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `
                            <div class="flex items-center justify-center h-full text-red-400">
                              <div class="text-center">
                                <p>Failed to load before image</p>
                                <p class="text-xs mt-1">Check console for details</p>
                              </div>
                            </div>
                          `
                        }
                      }}
                      onLoad={() => console.log('Before image loaded successfully')}
                    />
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary">Before</Badge>
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, beforeImage: '' }))
                      setBeforeImageUrl('')
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-white/20 rounded-lg p-6">
                  <div className="text-center mb-4">
                    <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400">Add the "before" image</p>
                  </div>
                  
                  {/* Image Input Method Toggle */}
                  <div className="flex items-center justify-center space-x-2 p-1 bg-white/5 rounded-lg mb-4">
                    <Button
                      type="button"
                      variant={beforeImageMethod === 'upload' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setBeforeImageMethod('upload')}
                      className={beforeImageMethod === 'upload' ? 'bg-red-600 hover:bg-red-700 text-white' : 'text-white hover:bg-white/10 hover:text-white'}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                    <Button
                      type="button"
                      variant={beforeImageMethod === 'url' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setBeforeImageMethod('url')}
                      className={beforeImageMethod === 'url' ? 'bg-red-600 hover:bg-red-700 text-white' : 'text-white hover:bg-white/10 hover:text-white'}
                    >
                      <Link className="h-4 w-4 mr-2" />
                      URL
                    </Button>
                  </div>

                  {/* Upload Method */}
                  {beforeImageMethod === 'upload' && (
                    hasCloudinary ? (
                      <CldUploadWidget
                        uploadPreset="tinspol_gallery"
                        onSuccess={(result: any) => {
                          setFormData(prev => ({ ...prev, beforeImage: result.info.secure_url }))
                        }}
                      >
                        {({ open }) => (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => open()}
                            className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Before Image
                          </Button>
                        )}
                      </CldUploadWidget>
                    ) : (
                      <FileUpload
                        onUpload={(url) => {
                          setFormData(prev => ({ ...prev, beforeImage: url }))
                          console.log('Before image uploaded:', url.substring(0, 50) + '...')
                        }}
                        className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                      >
                        Upload Before Image
                      </FileUpload>
                    )
                  )}

                  {/* URL Method */}
                  {beforeImageMethod === 'url' && (
                    <div className="space-y-2">
                      <Input
                        value={beforeImageUrl}
                        onChange={(e) => setBeforeImageUrl(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Enter before image URL"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          if (beforeImageUrl) {
                            setFormData(prev => ({ ...prev, beforeImage: beforeImageUrl }))
                            setBeforeImageUrl('')
                          }
                        }}
                        className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                        disabled={!beforeImageUrl}
                      >
                        <ImageIcon className="h-4 w-4 mr-2" />
                        Use Before Image URL
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* After Image */}
            <div className="space-y-4">
              <Label className="text-white">After Image</Label>
              {formData.afterImage ? (
                <div className="relative">
                  <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={formData.afterImage}
                      alt="After"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Error loading after image:', e)
                        console.log('Image src length:', formData.afterImage.length)
                        console.log('Image src start:', formData.afterImage.substring(0, 100))
                        // Show error state
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `
                            <div class="flex items-center justify-center h-full text-red-400">
                              <div class="text-center">
                                <p>Failed to load after image</p>
                                <p class="text-xs mt-1">Check console for details</p>
                              </div>
                            </div>
                          `
                        }
                      }}
                      onLoad={() => console.log('After image loaded successfully')}
                    />
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-green-600">After</Badge>
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, afterImage: '' }))
                      setAfterImageUrl('')
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-white/20 rounded-lg p-6">
                  <div className="text-center mb-4">
                    <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400">Add the "after" image</p>
                  </div>
                  
                  {/* Image Input Method Toggle */}
                  <div className="flex items-center justify-center space-x-2 p-1 bg-white/5 rounded-lg mb-4">
                    <Button
                      type="button"
                      variant={afterImageMethod === 'upload' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setAfterImageMethod('upload')}
                      className={afterImageMethod === 'upload' ? 'bg-red-600 hover:bg-red-700 text-white' : 'text-white hover:bg-white/10 hover:text-white'}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                    <Button
                      type="button"
                      variant={afterImageMethod === 'url' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setAfterImageMethod('url')}
                      className={afterImageMethod === 'url' ? 'bg-red-600 hover:bg-red-700 text-white' : 'text-white hover:bg-white/10 hover:text-white'}
                    >
                      <Link className="h-4 w-4 mr-2" />
                      URL
                    </Button>
                  </div>

                  {/* Upload Method */}
                  {afterImageMethod === 'upload' && (
                    hasCloudinary ? (
                      <CldUploadWidget
                        uploadPreset="tinspol_gallery"
                        onSuccess={(result: any) => {
                          setFormData(prev => ({ ...prev, afterImage: result.info.secure_url }))
                        }}
                      >
                        {({ open }) => (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => open()}
                            className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload After Image
                          </Button>
                        )}
                      </CldUploadWidget>
                    ) : (
                      <FileUpload
                        onUpload={(url) => {
                          setFormData(prev => ({ ...prev, afterImage: url }))
                          console.log('After image uploaded:', url.substring(0, 50) + '...')
                        }}
                        className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                      >
                        Upload After Image
                      </FileUpload>
                    )
                  )}

                  {/* URL Method */}
                  {afterImageMethod === 'url' && (
                    <div className="space-y-2">
                      <Input
                        value={afterImageUrl}
                        onChange={(e) => setAfterImageUrl(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Enter after image URL"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          if (afterImageUrl) {
                            setFormData(prev => ({ ...prev, afterImage: afterImageUrl }))
                            setAfterImageUrl('')
                          }
                        }}
                        className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                        disabled={!afterImageUrl}
                      >
                        <ImageIcon className="h-4 w-4 mr-2" />
                        Use After Image URL
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Preview */}
            {formData.beforeImage && formData.afterImage && (
              <div className="space-y-4">
                <Label className="text-white">Preview</Label>
                <div className="relative h-64 rounded-lg overflow-hidden bg-gray-800">
                  {/* Draggable before/after preview for admin posting */}
                  <BeforeAfterPreview
                    before={formData.beforeImage}
                    after={formData.afterImage}
                    alt={formData.title}
                    className="h-full"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Settings</CardTitle>
            <CardDescription className="text-gray-300">
              Configure visibility and display options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-white">Featured Item</Label>
                <p className="text-sm text-gray-400">Show this item prominently in the gallery</p>
              </div>
              <Switch
                checked={formData.featured}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked }))}
              />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-white/20">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/gallery')}
            className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading || !formData.beforeImage || !formData.afterImage}
            className="bg-red-600 hover:bg-red-700"
          >
            <Save className="h-4 w-4 mr-2" />
            {loading ? 'Saving...' : (isEditing ? 'Update Item' : 'Create Item')}
          </Button>
        </div>
      </form>
    </div>
  )
}