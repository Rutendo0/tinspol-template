import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Clock } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/313332258_546938550770565_3432125774987103058_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=6M33H-5AZggQ7kNvwFchiWR&_nc_oc=Adm7al6HQc7N6w8duqCbWFEo0GXod_20ZRABKEC6a3yMex26BrZayVg2tKE6Zx9CMzD0Kmira0CnaNImUOVsqBZ5&_nc_zt=24&_nc_ht=scontent-jnb2-1.xx&_nc_gid=FskBGDC-0G13KB-a49S09w&oh=00_AfYiSYHQroMvclIFwpl7HyoLM-1PiMWMHjrbwkKQ8ivh3Q&oe=68BFC28A"
                alt="Tinspol Motors Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <span className="font-bold text-xl text-white">Tinspol Motors</span>
                <p className="text-sm text-gray-400">Quality Vehicle Repairs</p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Zimbabwe's trusted automotive service center providing quality repairs, maintenance, and customer care since 2004.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Get Quote", href: "/quote" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Motor Mechanics",
                "Panel Beating",
                "Tyre Services",
                "Car Wash",
                "Suspension Repair",
                "Routine Servicing",
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    18608 Bishop Gaul Ave & Rotten Row<br />
                    Kopje, Harare, Zimbabwe
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    0776 556 717<br />
                    (0242) 779 099
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    tinspolent@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Mon - Sat: 8:00 AM - 5:00 PM<br />
                    Sunday: Closed<br />
                    Closed on Public Holidays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Tinspol Motors. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center space-x-1">
                <span>Designed by</span>
                <a 
                  href="https://www.niakazi.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  Niakazi Technology Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}