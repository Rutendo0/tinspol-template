"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Eye } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    category: "Panel Beating",
    title: "Accident Damage Repair",
    before: "/images/gallery-before-1.jpg",
    after: "/images/gallery-after-1.jpg",
    description: "Complete front-end collision repair and paint matching",
  },
  {
    id: 2,
    category: "Suspension",
    title: "Suspension Overhaul",
    before: "/images/gallery-before-2.jpg",
    after: "/images/gallery-after-2.jpg",
    description: "Full suspension system replacement and alignment",
  },
  {
    id: 3,
    category: "Engine",
    title: "Engine Rebuild",
    before: "/images/gallery-before-3.jpg",
    after: "/images/gallery-after-3.jpg",
    description: "Complete engine overhaul and performance optimization",
  },
  {
    id: 4,
    category: "Car Wash",
    title: "Full Detailing Service",
    before: "/images/gallery-before-1.jpg",
    after: "/images/gallery-after-1.jpg",
    description: "Interior and exterior deep cleaning and protection",
  },
]

const categories = ["All", "Panel Beating", "Suspension", "Engine", "Car Wash"]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showBefore, setShowBefore] = useState<{ [key: number]: boolean }>({})

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const toggleImage = (id: number) => {
    setShowBefore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section id="gallery" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Our Work Gallery</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">See Our Quality Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the quality of our workmanship through before and after photos of recent projects. Click on any image to
            toggle between before and after views.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden cursor-pointer" onClick={() => toggleImage(item.id)}>
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={showBefore[item.id] ? item.before : item.after}
                    alt={`${item.title} - ${showBefore[item.id] ? "Before" : "After"}`}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold text-white ${
                        showBefore[item.id] ? "bg-red-500" : "bg-green-500"
                      }`}
                    >
                      {showBefore[item.id] ? "BEFORE" : "AFTER"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-background rounded-lg p-8 max-w-md mx-auto">
            <Eye className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Want to See More?</h3>
            <p className="text-muted-foreground mb-6">Browse our complete portfolio</p>
            <Button variant="outline">View Full Gallery</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
