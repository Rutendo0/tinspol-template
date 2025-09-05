"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar, Droplets, CheckCircle } from "lucide-react"

const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
]

const washPackages = [
  {
    id: "basic",
    name: "Basic Wash",
    price: 15,
    features: ["Exterior wash & rinse", "Wheel cleaning", "Basic interior vacuum", "Dashboard wipe down"],
  },
  {
    id: "premium",
    name: "Premium Wash",
    price: 25,
    features: ["Everything in Basic", "Interior deep clean", "Seat cleaning", "Window cleaning", "Tire shine"],
  },
  {
    id: "valet",
    name: "Full Valet",
    price: 45,
    features: [
      "Everything in Premium",
      "Engine bay cleaning",
      "Wax application",
      "Leather conditioning",
      "Air freshener",
    ],
  },
]

const addOns = [
  { id: "engine", name: "Engine Wash", price: 15 },
  { id: "undercarriage", name: "Undercarriage Wash", price: 10 },
  { id: "carpet", name: "Carpet Shampooing", price: 20 },
  { id: "headlight", name: "Headlight Restoration", price: 25 },
  { id: "protection", name: "Paint Protection", price: 30 },
  { id: "odor", name: "Odor Elimination", price: 15 },
]

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    package: "",
    addOns: [] as string[],
    date: "",
    time: "",
    notes: "",
  })

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/lead/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (!res.ok) {
      alert('Failed to submit. Please try again.')
      return
    }
    alert("Booking request submitted! We'll confirm your appointment via WhatsApp/SMS.")
  }

  const calculateTotal = () => {
    const packagePrice = washPackages.find((pkg) => pkg.id === formData.package)?.price || 0
    const addOnPrice = formData.addOns.reduce((total, addonId) => {
      const addon = addOns.find((a) => a.id === addonId)
      return total + (addon?.price || 0)
    }, 0)
    return packagePrice + addOnPrice
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Book Your Car Wash</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your car wash service at your convenience. Choose your package and preferred time slot.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+263 xxx xxx xxx"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Vehicle Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Vehicle Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicleMake">Make *</Label>
                      <Select onValueChange={(value) => handleInputChange("vehicleMake", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select make" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="toyota">Toyota</SelectItem>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="ford">Ford</SelectItem>
                          <SelectItem value="mazda">Mazda</SelectItem>
                          <SelectItem value="nissan">Nissan</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicleModel">Model *</Label>
                      <Input
                        id="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                        placeholder="e.g., Corolla"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicleYear">Year *</Label>
                      <Input
                        id="vehicleYear"
                        type="number"
                        value={formData.vehicleYear}
                        onChange={(e) => handleInputChange("vehicleYear", e.target.value)}
                        placeholder="e.g., 2018"
                        min="1990"
                        max="2025"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Package */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-primary" />
                    Choose Your Package
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={formData.package} onValueChange={(value) => handleInputChange("package", value)}>
                    {washPackages.map((pkg) => (
                      <div key={pkg.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                        <RadioGroupItem value={pkg.id} id={pkg.id} className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor={pkg.id} className="text-lg font-semibold cursor-pointer">
                            {pkg.name} - ${pkg.price}
                          </Label>
                          <ul className="mt-2 space-y-1">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Add-On Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Add-On Services (Optional)</CardTitle>
                  <CardDescription>Enhance your car wash with these additional services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {addOns.map((addon) => (
                      <div key={addon.id} className="flex items-center space-x-3 p-3 border rounded">
                        <Checkbox
                          id={addon.id}
                          checked={formData.addOns.includes(addon.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleInputChange("addOns", [...formData.addOns, addon.id])
                            } else {
                              handleInputChange(
                                "addOns",
                                formData.addOns.filter((id) => id !== addon.id),
                              )
                            }
                          }}
                        />
                        <Label htmlFor={addon.id} className="flex-1 cursor-pointer">
                          <span className="font-medium">{addon.name}</span>
                          <span className="text-primary font-semibold ml-2">+${addon.price}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Select Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any special requests or notes about your vehicle..."
                    rows={3}
                  />
                </CardContent>
              </Card>

              {/* Total & Submit */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold">Total Cost:</span>
                    <span className="text-3xl font-bold text-primary">${calculateTotal()}</span>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={
                      !formData.name ||
                      !formData.phone ||
                      !formData.email ||
                      !formData.package ||
                      !formData.date ||
                      !formData.time
                    }
                  >
                    Book Car Wash Service
                  </Button>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    We'll confirm your booking within 2 hours and send you a reminder before your appointment.
                  </p>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}
