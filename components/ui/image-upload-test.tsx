'use client'

import { useState } from 'react'
import { FileUpload } from './file-upload'
import { Button } from './button'
import { Input } from './input'
import { Card, CardContent, CardHeader, CardTitle } from './card'

export function ImageUploadTest() {
  const [uploadedImage, setUploadedImage] = useState('')
  const [urlImage, setUrlImage] = useState('')
  const [inputUrl, setInputUrl] = useState('')

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Image Upload Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* File Upload Test */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">Upload from Device</h3>
            <FileUpload
              onUpload={(url) => setUploadedImage(url)}
              className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
            >
              Upload Image from Device
            </FileUpload>
            {uploadedImage && (
              <div className="space-y-2">
                <p className="text-green-400 text-sm">✅ Image uploaded successfully!</p>
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-full max-w-md h-48 object-cover rounded-lg border border-white/20"
                />
              </div>
            )}
          </div>

          {/* URL Input Test */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">URL Input</h3>
            <div className="flex space-x-2">
              <Input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                placeholder="Enter image URL"
              />
              <Button
                onClick={() => {
                  if (inputUrl) {
                    setUrlImage(inputUrl)
                  }
                }}
                className="bg-red-600 hover:bg-red-700 text-white"
                disabled={!inputUrl}
              >
                Use URL
              </Button>
            </div>
            {urlImage && (
              <div className="space-y-2">
                <p className="text-green-400 text-sm">✅ URL image loaded successfully!</p>
                <img
                  src={urlImage}
                  alt="From URL"
                  className="w-full max-w-md h-48 object-cover rounded-lg border border-white/20"
                  onError={() => alert('Failed to load image from URL')}
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}