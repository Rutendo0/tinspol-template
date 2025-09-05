import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden section-divider-parallax">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back Button */}
            <div className="mb-8">
              <Button 
                variant="outline" 
                asChild
                className="border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm"
              >
                <Link href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              </Button>
            </div>

            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center space-x-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Get In Touch
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Contact
                <span className="block text-red-500 gradient-text">Tinspol Motors</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Ready to get your vehicle serviced? Contact Zimbabwe's trusted automotive specialists. 
                We're here to help with all your vehicle repair needs.
              </p>

              {/* Quick Contact Options */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="tel:+263776556717"
                  className="flex items-center space-x-3 text-white hover:text-red-400 transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 bg-red-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-red-600/30 transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-400 font-medium">Call Now</div>
                    <div className="font-bold text-lg">077 655 6717</div>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/263776556717"
                  className="flex items-center space-x-3 text-white hover:text-green-400 transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 bg-green-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-green-600/30 transition-all duration-300 group-hover:scale-110">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-400 font-medium">WhatsApp</div>
                    <div className="font-bold text-lg">+263 776 556 717</div>
                  </div>
                </a>

                <a 
                  href="mailto:bookings@tinspol.co.zw"
                  className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 bg-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-400 font-medium">Email Us</div>
                    <div className="font-bold text-lg">Get Quote</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Hours */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
          <div className="w-full h-[360px] rounded-xl overflow-hidden shadow-md border">
            <iframe
              title="Tinspol Motors Map"
              src="https://www.google.com/maps?q=18608%20Bishop%20Gaul%20Ave%20%26%20Rotten%20Row%2C%20Kopje%2C%20Harare%2C%20Zimbabwe&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-xl border shadow-md p-6">
            <h2 className="text-2xl font-bold text-black mb-4">Business Hours</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Monday – Friday: 08:00 – 17:00</li>
              <li>Saturday: 08:00 – 13:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <MobileCTA />
    </div>
  )
}
