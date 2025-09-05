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
}

export function FileUpload({ onUpload, accept = "image/*", className, children, disabled }: FileUploadProps) {
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

      // Convert file to base64 data URL for preview
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        console.log('FileUpload: File converted to base64')
        console.log('FileUpload: Result type:', typeof result)
        console.log('FileUpload: Result length:', result.length)
        console.log('FileUpload: Result starts with data:', result.startsWith('data:'))
        onUpload(result)
        setUploading(false)
      }
      reader.onerror = () => {
        console.error('FileUpload: Error reading file')
        alert('Error reading file')
        setUploading(false)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Error uploading file:', error)
      alert('Error uploading file')
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