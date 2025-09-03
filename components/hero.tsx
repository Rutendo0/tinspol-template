import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Zimbabwe's Premier
                <span className="text-primary block">Automotive Repair</span>
                <span className="text-accent">Specialists</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Professional motor mechanics, suspension repairs, tyre services, panel beating, and more. Quality
                workmanship with genuine parts and certified technicians.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Get Free Quote</span>
              </Button>
              <Button size="lg" variant="outline" className="flex items-center space-x-2 bg-transparent">
                <Calendar className="w-5 h-5" />
                <span>Book Service</span>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
              <Button variant="ghost" className="flex items-center space-x-2 text-primary">
                <Phone className="w-5 h-5" />
                <span>+263 123 456 789</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-2 text-green-600">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="/images/hero-workshop.jpg"
                alt="Tinspol Motors Professional Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
