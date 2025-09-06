import { MapPin, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram, Clock, Award, Shield, Star } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/313332258_546938550770565_3432125774987103058_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=6M33H-5AZggQ7kNvwFchiWR&_nc_oc=Adm7al6HQc7N6w8duqCbWFEo0GXod_20ZRABKEC6a3yMex26BrZayVg2tKE6Zx9CMzD0Kmira0CnaNImUOVsqBZ5&_nc_zt=24&_nc_ht=scontent-jnb2-1.xx&_nc_gid=FskBGDC-0G13KB-a49S09w&oh=00_AfYiSYHQroMvclIFwpl7HyoLM-1PiMWMHjrbwkKQ8ivh3Q&oe=68BFC28A"
                  alt="Tinspol Motors Logo"
                  className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-red-600/25 transition-all duration-300 group-hover:scale-105 object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-2xl text-white group-hover:text-red-400 transition-colors duration-300">
                  Tinspol Motors
                </span>
                <p className="text-sm text-gray-400">Quality Vehicle Repairs</p>
              </div>
            </Link>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300 group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300 group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white flex items-center space-x-2">
              <div className="w-1 h-6 bg-red-600 rounded-full"></div>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: "About Us", href: "/about" },
                { name: "Get Quote", href: "/quote" },
                { name: "Book Service", href: "/booking" },
                { name: "Contact Us", href: "/contact" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Services", href: "/#services" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="hover:text-red-400 transition-colors duration-300 group flex items-center space-x-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white flex items-center space-x-2">
              <div className="w-1 h-6 bg-red-600 rounded-full"></div>
              <span>Contact Info</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">Visit Us</p>
                  <p className="text-gray-300 text-sm">18608 Bishop Gaul Ave & Rotten Row, Kopje<br />Harare, Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">Call Us</p>
                  <p className="text-gray-300 text-sm">0776 556 717 • (0242) 779 099 • 0719 757 957<br />Professional Service</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <p className="text-gray-300 text-sm">tinspolent@gmail.com • bookings@tinspol.co.zw</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Tinspol Motors. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-red-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-red-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-red-400 transition-colors duration-300">
                Cookies
              </Link>
              <div className="flex items-center space-x-1">
                <span>Designed by</span>
                <span>Niakazi Technology Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}