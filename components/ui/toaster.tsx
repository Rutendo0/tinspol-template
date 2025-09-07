"use client"

import { useEffect, useState } from "react"

export type ToastType = "success" | "error" | "info"

interface ToastItem {
  id: number
  message: string
  type: ToastType
}

export function showToast(message: string, type: ToastType = "info") {
  if (typeof window === "undefined") return
  const event = new CustomEvent("app:toast", { detail: { message, type } })
  window.dispatchEvent(event)
}

export function Toaster() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ message: string; type: ToastType }>
      const id = Date.now() + Math.random()
      const toast: ToastItem = { id, message: custom.detail.message, type: custom.detail.type }
      setToasts((prev) => [...prev, toast])
      // auto-remove after 2.5s
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 2500)
    }

    window.addEventListener("app:toast", handler as EventListener)
    return () => window.removeEventListener("app:toast", handler as EventListener)
  }, [])

  const base = "rounded-md shadow-lg px-4 py-3 text-sm border"
  const byType: Record<ToastType, string> = {
    success: "bg-green-50 text-green-800 border-green-200",
    error: "bg-red-50 text-red-800 border-red-200",
    info: "bg-gray-50 text-gray-800 border-gray-200",
  }

  return (
    <div className="fixed top-4 right-4 z-[70] flex flex-col gap-2">
      {toasts.map((t) => (
        <div key={t.id} className={`${base} ${byType[t.type]} transition-all`}>{t.message}</div>
      ))}
    </div>
  )
}