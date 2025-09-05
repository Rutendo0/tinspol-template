import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText } from "lucide-react"
import Link from "next/link"

export function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 p-4 md:hidden z-50 shadow-2xl"
      role="region"
      aria-label="Quick actions"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 1rem)' }}
    >
      <div className="flex space-x-3">
        <Button 
          size="sm" 
          asChild
          className="flex-1 flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl shadow-lg hover:shadow-red-600/25 transition-all duration-300 hover:scale-105"
        >
          <a href="tel:+263776556717" aria-label="Call Tinspol Motors">
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Call</span>
          </a>
        </Button>
        <Button 
          size="sm" 
          asChild
          className="flex-1 flex items-center justify-center space-x-2 bg-black hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg hover:shadow-black/25 transition-all duration-300 hover:scale-105"
        >
          <a href="https://wa.me/263776556717" aria-label="Chat on WhatsApp">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">WhatsApp</span>
          </a>
        </Button>
        <Button
          size="sm"
          variant="outline"
          asChild
          className="flex-1 flex items-center justify-center space-x-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Link href="/quote" aria-label="Get a free quote">
            <FileText className="w-5 h-5" />
            <span className="font-semibold">Quote</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}