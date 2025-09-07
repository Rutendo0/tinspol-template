'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Settings, 
  LogOut, 
  Menu,
  X,
  Home
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AdminLayoutProps {
  children: React.ReactNode
}

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Blog Posts', href: '/admin/blog', icon: FileText },
  { name: 'Gallery', href: '/admin/gallery', icon: Image },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
    }
  }, [session, status, router])

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-black/90 backdrop-blur-md border-r border-white/10 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/313332258_546938550770565_3432125774987103058_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=6M33H-5AZggQ7kNvwFchiWR&_nc_oc=Adm7al6HQc7N6w8duqCbWFEo0GXod_20ZRABKEC6a3yMex26BrZayVg2tKE6Zx9CMzD0Kmira0CnaNImUOVsqBZ5&_nc_zt=24&_nc_ht=scontent-jnb2-1.xx&_nc_gid=FskBGDC-0G13KB-a49S09w&oh=00_AfYiSYHQroMvclIFwpl7HyoLM-1PiMWMHjrbwkKQ8ivh3Q&oe=68BFC28A"
                alt="Tinspol Motors"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-bold text-white group-hover:text-red-400 transition-colors">
                Admin Panel
              </span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                      isActive
                        ? "bg-red-600 text-white"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  View Website
                </Link>
              </Button>
              <Button
                onClick={handleSignOut}
                variant="ghost"
                className="w-full text-gray-300 hover:bg-red-600 hover:text-white"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-gray-400">
                Signed in as<br />
                <span className="text-white">{session.user?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-black/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-white hover:bg-white/10"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-4">
              {/* Avoid hydration mismatch by rendering date only on client */}
              {mounted && (
                <span className="text-sm text-gray-400">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6 relative z-10">
          {children}
        </main>
      </div>
    </div>
  )
}