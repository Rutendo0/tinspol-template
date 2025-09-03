import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText } from "lucide-react"

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 md:hidden z-50">
      <div className="flex space-x-2">
        <Button size="sm" className="flex-1 flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90">
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </Button>
        <Button size="sm" className="flex-1 flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700">
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1 flex items-center justify-center space-x-2 bg-transparent"
        >
          <FileText className="w-4 h-4" />
          <span>Quote</span>
        </Button>
      </div>
    </div>
  )
}
