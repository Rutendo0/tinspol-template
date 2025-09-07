'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'

interface FileUploadProps {
  onUpload: (url: string) => void
  accept?: string
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  mode?: 'api' | 'base64' // default 'api'
}

export function FileUpload({ onUpload, accept = 'image/*', className, children, disabled, mode = 'api' }: FileUploadProps) {
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)

    try {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        setUploading(false)
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB')
        setUploading(false)
        return
      }

      if (mode === 'base64') {
        // Convert file to base64 data URL
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          onUpload(result)
          setUploading(false)
        }
        reader.onerror = () => {
          alert('Error reading file')
          setUploading(false)
        }
        reader.readAsDataURL(file)
      } else {
        // Upload via API route, get back a URL
        const formData = new FormData()
        formData.append('file', file)

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error || 'Upload failed')
        }
        const data = await res.json()
        onUpload(data.url as string)
        setUploading(false)
      }
    } catch (error: any) {
      console.error('Error uploading file:', error)
      alert(error?.message || 'Error uploading file')
      setUploading(false)
    }

    // Reset input
    event.target.value = ''
  }

  const handleClick = () => {
    if (!disabled && !uploading) {
      fileInputRef.current?.click()
    }
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
        multiple={false}
      />
      <Button
        type="button"
        variant="outline"
        onClick={handleClick}
        disabled={disabled || uploading}
        className={className}
      >
        <Upload className="h-4 w-4 mr-2" />
        {uploading ? 'Uploading...' : (children || 'Upload File')}
      </Button>
    </>
  )
}