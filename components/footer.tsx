import { MapPin, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold font-sans">T</span>
              </div>
              <span className="font-sans font-bold text-xl">Tinspol Motors</span>
            </Link>
            <p className="text-muted-foreground text-pretty">
              Zimbabwe's trusted automotive repair specialists. Quality workmanship, genuine parts, and exceptional
              service since 2010.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/services/motor-mechanics" className="hover:text-primary transition-colors">
                  Motor Mechanics
                </Link>
              </li>
              <li>
                <Link href="/services/suspension" className="hover:text-primary transition-colors">
                  Suspension Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/tyres" className="hover:text-primary transition-colors">
                  Tyre Services
                </Link>
              </li>
              <li>
                <Link href="/services/panel-beating" className="hover:text-primary transition-colors">
                  Panel Beating
                </Link>
              </li>
              <li>
                <Link href="/services/car-wash" className="hover:text-primary transition-colors">
                  Car Wash
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-primary transition-colors">
                  Spares & Parts Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-primary transition-colors">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-primary transition-colors">
                  Book Car Wash
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">123 Industrial Road, Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+263123456789" className="text-sm hover:text-primary transition-colors">
                  +263 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://wa.me/263123456789" className="text-sm hover:text-primary transition-colors">
                  WhatsApp: +263 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@tinspolmotors.co.zw" className="text-sm hover:text-primary transition-colors">
                  info@tinspolmotors.co.zw
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">© 2025 Tinspol Motors. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
