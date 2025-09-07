'use client'

import { SessionProvider } from 'next-auth/react'
import { useEffect, useState } from 'react'

// Global scroll progress bar and parallax setter
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)

      // set CSS variable for hero parallax
      const parallax = Math.min(1, scrollTop / (window.innerHeight || 1))
      document.documentElement.style.setProperty('--parallax', String(parallax))
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-red-600 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

import { usePathname } from 'next/navigation'

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Basic route transition: apply enter class on route change
  useEffect(() => {
    const root = document.getElementById('route-root')
    if (!root) return
    root.classList.remove('route-exit', 'route-exit-active')
    root.classList.add('route-enter')
    // next frame to trigger transition
    const id = requestAnimationFrame(() => {
      root.classList.add('route-enter-active')
    })
    const t = setTimeout(() => {
      root.classList.remove('route-enter', 'route-enter-active')
    }, 360)
    return () => { cancelAnimationFrame(id); clearTimeout(t) }
  }, [pathname])

  // Auto-apply reveal to internal pages' sections (About/Services/Contact)
  useEffect(() => {
    if (pathname === '/') return
    const root = document.getElementById('route-root')
    if (!root) return
    const sections: HTMLElement[] = Array.from(root.querySelectorAll('section'))
    if (sections.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement
        if (entry.isIntersecting) {
          el.classList.add('reveal-in')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.12 })

    sections.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${Math.min(i * 60, 240)}ms`)
      el.classList.add('reveal-init')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <SessionProvider>
      <ScrollProgressBar />
      <div id="route-root" className="route-container">
        {children}
      </div>
      {/* App Toaster */}
      {require('@/components/ui/toaster').Toaster ? require('@/components/ui/toaster').Toaster() : null}
    </SessionProvider>
  )
}