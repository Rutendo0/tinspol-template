"use client"

import { useEffect, useRef, useState } from "react"
import clsx from "clsx"

interface BeforeAfterProps {
  before: string
  after: string
  alt?: string
  className?: string
}

// Draggable before/after image comparison
export function BeforeAfter({ before, after, alt = "", className }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [, setPos] = useState(0.5) // 0..1, how much of 'after' is visible
  const [dragging, setDragging] = useState(false)

  // Update position from event (mouse/touch)
  const updateFromEvent = (clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    const next = rect.width > 0 ? x / rect.width : 0.5
    setPos(next)
  }

  useEffect(() => {
    const up = () => setDragging(false)
    window.addEventListener("mouseup", up)
    window.addEventListener("touchend", up)
    return () => {
      window.removeEventListener("mouseup", up)
      window.removeEventListener("touchend", up)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative w-full h-full select-none overflow-hidden rounded-xl will-change-transform bg-black",
        className
      )}
      onMouseMove={(e) => dragging && updateFromEvent(e.clientX)}
      onTouchMove={(e) => dragging && updateFromEvent(e.touches[0].clientX)}
      onMouseDown={(e) => { setDragging(true); updateFromEvent(e.clientX) }}
      onTouchStart={(e) => { setDragging(true); updateFromEvent(e.touches[0].clientX) }}
      role="region"
      aria-label="Before and after comparison"
    >
      {/* Split layout: left (before) and right (after) halves */}
      <div className="absolute inset-0 flex">
        {/* Left half (before) */}
        <div className="relative w-1/2 h-full bg-black flex items-center justify-center">
          <img
            src={before}
            alt={alt ? `${alt} (before)` : "Before"}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* Right half (after) */}
        <div className="relative w-1/2 h-full bg-black flex items-center justify-center">
          <img
            src={after}
            alt={alt ? `${alt} (after)` : "After"}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Gradients for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Labels */}
      <div className="absolute top-3 left-3">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black text-white">Before</span>
      </div>
      <div className="absolute top-3 right-3">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white">After</span>
      </div>

      {/* Center divider (static 50/50 split) */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/60 shadow [transform:translateX(-50%)]"
        style={{ left: "50%" }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-black border border-white/60 shadow flex items-center justify-center [transform:translateX(-50%)]"
        style={{ left: "50%" }}
      >
        <span className="sr-only">Center marker"</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
    </div>
  )
}