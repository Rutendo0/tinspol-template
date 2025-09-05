"use client"

import { useEffect, useRef } from "react"
import clsx from "clsx"

// Reveal: fades and slides elements into view using IntersectionObserver
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
}: {
  as?: any
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.setProperty("--reveal-delay", `${delay}ms`)
            el.classList.add("reveal-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag
      ref={ref as any}
      className={clsx(
        "reveal-init will-change-transform will-change-opacity", // start state
        className
      )}
    >
      {children}
    </Tag>
  )
}