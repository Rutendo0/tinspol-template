import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Settings, Disc, Droplets, Hammer, Package, Circle, Clock } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Motor Mechanics",
    description: "Complete engine diagnostics, repairs, and maintenance by certified technicians.",
    features: ["Engine Diagnostics", "Oil Changes", "Brake Repairs", "Transmission Service"],
    turnaround: "1-3 days",
    image: "/images/motor-mechanics.jpg",
  },
  {
    icon: Settings,
    title: "Suspension Repairs & Fitments",
    description: "Professional suspension system repairs and upgrades for optimal ride comfort.",
    features: ["Shock Absorbers", "Struts Replacement", "Alignment", "Springs"],
    turnaround: "1-2 days",
    image: "/images/suspension-repair.jpg",
  },
  {
    icon: Disc,
    title: "Tyre Repairs & Fitments",
    description: "Expert tyre services including repairs, balancing, and new tyre installations.",
    features: ["Puncture Repairs", "Wheel Balancing", "Tyre Fitting", "Alignment"],
    turnaround: "Same day",
    image: "/images/tyre-service.jpg",
  },
  {
    icon: Droplets,
    title: "Car Wash",
    description: "Professional car cleaning services from basic wash to full detailing.",
    features: ["Exterior Wash", "Interior Cleaning", "Waxing", "Engine Cleaning"],
    turnaround: "2-4 hours",
    image: "/images/car-wash.jpg",
  },
  {
    icon: Hammer,
    title: "Panel Beating",
    description: "Accident damage repairs and bodywork restoration to factory standards.",
    features: ["Dent Removal", "Paint Matching", "Rust Treatment", "Body Alignment"],
    turnaround: "3-7 days",
    image: "/images/panel-beating.jpg",
  },
  {
    icon: Package,
    title: "Spares & Body Parts",
    description: "Genuine and aftermarket parts supply for all vehicle makes and models.",
    features: ["OEM Parts", "Aftermarket Options", "Fast Sourcing", "Warranty"],
    turnaround: "1-3 days",
    image: "/images/auto-parts.jpg",
  },
  {
    icon: Circle,
    title: "Tyres Supply",
    description: "Wide selection of quality tyres from leading brands at competitive prices.",
    features: ["All Brands", "Size Matching", "Installation", "Disposal"],
    turnaround: "Same day",
    image: "/images/tyre-service.jpg",
  },
  {
    icon: Clock,
    title: "Routine Services",
    description: "Regular maintenance services to keep your vehicle running smoothly.",
    features: ["Service Intervals", "Preventive Care", "Multi-point Inspection", "Records"],
    turnaround: "1 day",
    image: "/images/routine-service.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine maintenance to major repairs, we provide comprehensive automotive services with quality parts
            and expert technicians.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.turnaround}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Request Service Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
