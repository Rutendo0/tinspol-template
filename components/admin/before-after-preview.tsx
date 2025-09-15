"use client"

import { useRef, useState, useEffect } from "react"
import clsx from "clsx"

interface BeforeAfterPreviewProps {
  before: string
  after: string
  alt?: string
  className?: string
}

// Lightweight draggable before/after preview for admin posting flow
export function BeforeAfterPreview({ before, after, alt = "", className }: BeforeAfterPreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(0.5) // 0..1 slider position
  const [dragging, setDragging] = useState(false)

  const updateFromX = (clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    const next = rect.width > 0 ? x / rect.width : 0.5
    setPos(next)
  }

  useEffect(() => {
    const stop = () => setDragging(false)
    window.addEventListener("mouseup", stop)
    window.addEventListener("touchend", stop)
    return () => {
      window.removeEventListener("mouseup", stop)
      window.removeEventListener("touchend", stop)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={clsx("relative w-full h-full select-none", className)}
      onMouseMove={(e) => dragging && updateFromX(e.clientX)}
      onTouchMove={(e) => dragging && updateFromX(e.touches[0].clientX)}
      onMouseDown={(e) => { setDragging(true); updateFromX(e.clientX) }}
      onTouchStart={(e) => { setDragging(true); updateFromX(e.touches[0].clientX) }}
      role="region"
      aria-label="Before and after preview"
   >
      {/* Base image (before) */}
      <img
        src={before}
        alt={alt ? `${alt} (before)` : "Before"}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After overlay, clipped by width */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos * 100}%` }}
      >
        <img
          src={after}
          alt={alt ? `${alt} (after)` : "After"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-2 left-2">
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white">Before</span>
      </div>
      <div className="absolute top-2 right-2">
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white">After</span>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/70 shadow [transform:translateX(-50%)]"
        style={{ left: `${pos * 100}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-black border border-white/70 shadow flex items-center justify-center cursor-col-resize [transform:translateX(-50%)]"
        style={{ left: `${pos * 100}%` }}
      >
        <span className="sr-only">Drag to compare</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
    </div>
  )
}