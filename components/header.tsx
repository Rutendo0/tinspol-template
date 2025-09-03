"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-sans">T</span>
            </div>
            <div>
              <h1 className="font-sans font-bold text-xl text-foreground">Tinspol Motors</h1>
              <p className="text-xs text-muted-foreground">Professional Auto Repair</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/services/motor-mechanics">Motor Mechanics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/suspension">Suspension Repairs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/tyres">Tyre Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/car-wash">Car Wash</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/panel-beating">Panel Beating</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent" asChild>
              <a href="tel:+263123456789">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700" asChild>
              <a href="https://wa.me/263123456789">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
            <Button asChild>
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2">
                <span className="text-foreground font-medium">Services</span>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/services/motor-mechanics"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Motor Mechanics
                  </Link>
                  <Link
                    href="/services/suspension"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Suspension Repairs
                  </Link>
                  <Link
                    href="/services/tyres"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tyre Services
                  </Link>
                  <Link
                    href="/services/car-wash"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Car Wash
                  </Link>
                  <Link
                    href="/services/panel-beating"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Panel Beating
                  </Link>
                </div>
              </div>

              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center space-x-2 bg-transparent"
                  asChild
                >
                  <a href="tel:+263123456789">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </Button>
                <Button
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <a href="https://wa.me/263123456789">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/quote">Get Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
