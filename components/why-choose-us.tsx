import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Clock, Award, Wrench, MapPin } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All work backed by comprehensive warranty and quality assurance.",
  },
  {
    icon: Users,
    title: "Certified Technicians",
    description: "Experienced professionals with industry certifications and training.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient service delivery without compromising on quality.",
  },
  {
    icon: Award,
    title: "Genuine Parts",
    description: "OEM and high-quality aftermarket parts from trusted suppliers.",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "State-of-the-art diagnostic tools and repair equipment.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Easily accessible location with ample parking space.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Why Choose Tinspol Motors?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 15 years of experience serving Zimbabwe's automotive needs, we've built our reputation on trust,
            quality, and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Track Record</h3>
            <p className="text-muted-foreground">Numbers that speak for our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Vehicles Serviced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
