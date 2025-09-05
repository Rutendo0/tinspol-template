"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle, ChevronDown, Calendar, FileText, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)

    // Lock body scroll when mobile menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const pathname = usePathname()

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-red-100/50' 
        : 'bg-white/70 backdrop-blur-md'
    }`}>
      {/* subtle red top border accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-80" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/placeholder-logo.png"
                alt="Tinspol Motors Logo"
                className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-red-600/25 transition-all duration-300 group-hover:scale-105 object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl text-black group-hover:text-red-600 transition-colors duration-300">
                Tinspol Motors
              </h1>
              <p className="text-sm text-gray-600 font-medium">Quality Vehicle Repairs</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-black transition-colors duration-300 font-medium relative group ${pathname === '/' ? 'text-red-600' : 'hover:text-red-600'}`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 text-black transition-colors duration-300 font-medium group relative ${pathname.startsWith('/services') ? 'text-red-600' : 'hover:text-red-600'}`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${pathname.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-xl">
                <DropdownMenuItem asChild className="hover:bg-red-50 hover:text-red-600">
                  <Link href="/services/motor-mechanics" className="flex items-center space-x-2">
                    <span>🔧</span>
                    <span>Motor Mechanics</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-red-50 hover:text-red-600">
                  <Link href="/services/suspension" className="flex items-center space-x-2">
                    <span>⚙️</span>
                    <span>Suspension Repairs</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-red-50 hover:text-red-600">
                  <Link href="/services/tyres" className="flex items-center space-x-2">
                    <span>🛞</span>
                    <span>Tyre Services</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-red-50 hover:text-red-600">
                  <Link href="/services/car-wash" className="flex items-center space-x-2">
                    <span>🚿</span>
                    <span>Car Wash & Detailing</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-red-50 hover:text-red-600">
                  <Link href="/services/panel-beating" className="flex items-center space-x-2">
                    <span>🔨</span>
                    <span>Panel Beating</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/gallery" 
              className={`text-black transition-colors duration-300 font-medium relative group ${pathname === '/gallery' ? 'text-red-600' : 'hover:text-red-600'}`}
            >
              Gallery
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${pathname === '/gallery' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              href="/blog" 
              className={`text-black transition-colors duration-300 font-medium relative group ${pathname === '/blog' ? 'text-red-600' : 'hover:text-red-600'}`}
            >
              Blog
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${pathname === '/blog' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              href="/about" 
              className={`text-black transition-colors duration-300 font-medium relative group ${pathname === '/about' ? 'text-red-600' : 'hover:text-red-600'}`}
            >
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              href="/contact" 
              className={`text-black transition-colors duration-300 font-medium relative group ${pathname === '/contact' ? 'text-red-600' : 'hover:text-red-600'}`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="text-black hover:text-red-600 hover:bg-red-50 transition-all duration-300"
            >
              <a href="tel:+263776556717" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Now</span>
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="text-black hover:text-red-600 hover:bg-red-50 transition-all duration-300"
              title="Admin Login"
            >
              <Link href="/admin/login">
                <Settings className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              size="sm" 
              asChild
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-600/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/quote" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span className="font-medium">Get Quote</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-black hover:text-red-600 hover:bg-red-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-xl">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-black hover:text-red-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-black font-medium py-2">Services</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/services/motor-mechanics" 
                    className="block text-gray-600 hover:text-red-600 transition-colors duration-300 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Motor Mechanics
                  </Link>
                  <Link 
                    href="/services/suspension" 
                    className="block text-gray-600 hover:text-red-600 transition-colors duration-300 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Suspension Repairs
                  </Link>
                  <Link 
                    href="/services/tyres" 
                    className="block text-gray-600 hover:text-red-600 transition-colors duration-300 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tyre Services
                  </Link>
                  <Link 
                    href="/services/car-wash" 
                    className="block text-gray-600 hover:text-red-600 transition-colors duration-300 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Car Wash & Detailing
                  </Link>
                  <Link 
                    href="/services/panel-beating" 
                    className="block text-gray-600 hover:text-red-600 transition-colors duration-300 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Panel Beating
                  </Link>
                </div>
              </div>

              <Link 
                href="/gallery" 
                className="block text-black hover:text-red-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/blog" 
                className="block text-black hover:text-red-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="block text-black hover:text-red-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block text-black hover:text-red-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  asChild
                >
                  <a href="tel:+263776556717" className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
                  asChild
                >
                  <Link href="/admin/login" className="flex items-center justify-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Admin</span>
                  </Link>
                </Button>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  asChild
                >
                  <Link href="/quote" className="flex items-center justify-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Get Free Quote</span>
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}