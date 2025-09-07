"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Check } from "lucide-react"
import { showToast } from "@/components/ui/toaster"

interface ShareButtonProps {
  title: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function ShareButton({ title, className, variant = "outline", size = "sm" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title, url })
        showToast("Share dialog opened", "success")
        return
      }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      showToast("Link copied to clipboard", "success")
      setTimeout(() => setCopied(false), 2000)
    } catch {
      try {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        showToast("Link copied to clipboard", "success")
        setTimeout(() => setCopied(false), 2000)
      } catch {
        showToast("Could not copy. Sharing link displayed.", "error")
        alert(`Share this link: ${url}`)
      }
    }
  }

  return (
    <Button variant={variant} size={size} onClick={handleShare} className={className}>
      {copied ? <Check className="h-4 w-4 mr-2" /> : <Share2 className="h-4 w-4 mr-2" />}
      {copied ? "Link copied" : "Share"}
    </Button>
  )
}