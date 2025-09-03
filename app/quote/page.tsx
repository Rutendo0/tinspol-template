"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Upload, Car, Wrench, Settings, Droplets, Hammer, Package, Clock } from "lucide-react"

const services = [
  { id: "motor-mechanics", name: "Motor Mechanics", icon: Wrench },
  { id: "suspension", name: "Suspension Repairs", icon: Settings },
  { id: "tyres", name: "Tyre Services", icon: Car },
  { id: "car-wash", name: "Car Wash", icon: Droplets },
  { id: "panel-beating", name: "Panel Beating", icon: Hammer },
  { id: "spares", name: "Spares & Parts", icon: Package },
  { id: "routine", name: "Routine Service", icon: Clock },
]

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    // Personal Details
    name: "",
    email: "",
    phone: "",

    // Vehicle Details
    make: "",
    model: "",
    year: "",
    engine: "",
    mileage: "",

    // Service Specific
    description: "",
    urgency: "",
    preferredDate: "",

    // Tyre Specific
    tyreSize: "",
    tyreBrand: "",
    tyreQuantity: "",

    // Panel Beating Specific
    damageType: "",
    insuranceClaim: "",

    // Car Wash Specific
    washPackage: "",
    addOns: [] as string[],
  })

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Quote request submitted:", { service: selectedService, ...formData })
    alert("Quote request submitted! We'll contact you within 24 hours.")
  }

  const renderServiceSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Select Service</h2>
        <p className="text-gray-600">Choose the service you need a quote for</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedService === service.id ? "ring-2 ring-primary bg-primary/5" : ""
            }`}
            onClick={() => setSelectedService(service.id)}
          >
            <CardContent className="p-6 text-center">
              <service.icon className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">{service.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button onClick={() => setStep(2)} disabled={!selectedService} size="lg">
          Continue
        </Button>
      </div>
    </div>
  )

  const renderPersonalDetails = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Personal Details</h2>
        <p className="text-gray-600">We'll use this information to contact you</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
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

        <div className="space-y-2 md:col-span-2">
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
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button onClick={() => setStep(3)} disabled={!formData.name || !formData.phone || !formData.email}>
          Continue
        </Button>
      </div>
    </div>
  )

  const renderVehicleDetails = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Vehicle Details</h2>
        <p className="text-gray-600">Tell us about your vehicle</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="make">Vehicle Make *</Label>
          <Select onValueChange={(value) => handleInputChange("make", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select make" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="honda">Honda</SelectItem>
              <SelectItem value="ford">Ford</SelectItem>
              <SelectItem value="mazda">Mazda</SelectItem>
              <SelectItem value="nissan">Nissan</SelectItem>
              <SelectItem value="volkswagen">Volkswagen</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="model">Model *</Label>
          <Input
            id="model"
            value={formData.model}
            onChange={(e) => handleInputChange("model", e.target.value)}
            placeholder="e.g., Corolla, Civic, Focus"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Year *</Label>
          <Input
            id="year"
            type="number"
            value={formData.year}
            onChange={(e) => handleInputChange("year", e.target.value)}
            placeholder="e.g., 2018"
            min="1990"
            max="2025"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="engine">Engine Size</Label>
          <Input
            id="engine"
            value={formData.engine}
            onChange={(e) => handleInputChange("engine", e.target.value)}
            placeholder="e.g., 1.6L, 2.0L"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="mileage">Mileage (km)</Label>
          <Input
            id="mileage"
            type="number"
            value={formData.mileage}
            onChange={(e) => handleInputChange("mileage", e.target.value)}
            placeholder="Current mileage"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(2)}>
          Back
        </Button>
        <Button onClick={() => setStep(4)} disabled={!formData.make || !formData.model || !formData.year}>
          Continue
        </Button>
      </div>
    </div>
  )

  const renderServiceSpecific = () => {
    const serviceName = services.find((s) => s.id === selectedService)?.name || ""

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{serviceName} Details</h2>
          <p className="text-gray-600">Provide specific details about your service needs</p>
        </div>

        {/* Common fields */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="description">Describe the Issue/Service Needed *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Please describe what you need help with..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>How urgent is this? *</Label>
            <RadioGroup value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="asap" id="asap" />
                <Label htmlFor="asap">ASAP - Emergency</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="week" id="week" />
                <Label htmlFor="week">Within a week</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="month" id="month" />
                <Label htmlFor="month">Within a month</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="flexible" id="flexible" />
                <Label htmlFor="flexible">I'm flexible</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredDate">Preferred Date</Label>
            <Input
              id="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => handleInputChange("preferredDate", e.target.value)}
            />
          </div>
        </div>

        {/* Service-specific fields */}
        {selectedService === "tyres" && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold">Tyre Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tyreSize">Tyre Size</Label>
                <Input
                  id="tyreSize"
                  value={formData.tyreSize}
                  onChange={(e) => handleInputChange("tyreSize", e.target.value)}
                  placeholder="e.g., 205/55R16"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tyreQuantity">How many tyres?</Label>
                <Select onValueChange={(value) => handleInputChange("tyreQuantity", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 tyre</SelectItem>
                    <SelectItem value="2">2 tyres</SelectItem>
                    <SelectItem value="4">4 tyres (full set)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="tyreBrand">Preferred Brand (optional)</Label>
                <Input
                  id="tyreBrand"
                  value={formData.tyreBrand}
                  onChange={(e) => handleInputChange("tyreBrand", e.target.value)}
                  placeholder="e.g., Bridgestone, Michelin"
                />
              </div>
            </div>
          </div>
        )}

        {selectedService === "panel-beating" && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold">Damage Information</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Type of damage</Label>
                <RadioGroup
                  value={formData.damageType}
                  onValueChange={(value) => handleInputChange("damageType", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="accident" id="accident" />
                    <Label htmlFor="accident">Accident damage</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dent" id="dent" />
                    <Label htmlFor="dent">Dents/dings</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="scratch" id="scratch" />
                    <Label htmlFor="scratch">Scratches</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rust" id="rust" />
                    <Label htmlFor="rust">Rust damage</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Insurance claim?</Label>
                <RadioGroup
                  value={formData.insuranceClaim}
                  onValueChange={(value) => handleInputChange("insuranceClaim", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="insurance-yes" />
                    <Label htmlFor="insurance-yes">Yes, I have insurance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="insurance-no" />
                    <Label htmlFor="insurance-no">No, paying privately</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        )}

        {selectedService === "car-wash" && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold">Car Wash Package</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Select package</Label>
                <RadioGroup
                  value={formData.washPackage}
                  onValueChange={(value) => handleInputChange("washPackage", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="basic" id="basic" />
                    <Label htmlFor="basic">Basic Wash - $15</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label htmlFor="premium">Premium Wash - $25</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="valet" id="valet" />
                    <Label htmlFor="valet">Full Valet - $45</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Add-on services (optional)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Engine Wash (+$15)",
                    "Undercarriage (+$10)",
                    "Carpet Shampoo (+$20)",
                    "Headlight Restoration (+$25)",
                  ].map((addon) => (
                    <div key={addon} className="flex items-center space-x-2">
                      <Checkbox
                        id={addon}
                        checked={formData.addOns.includes(addon)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleInputChange("addOns", [...formData.addOns, addon])
                          } else {
                            handleInputChange(
                              "addOns",
                              formData.addOns.filter((item) => item !== addon),
                            )
                          }
                        }}
                      />
                      <Label htmlFor={addon} className="text-sm">
                        {addon}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* File upload for photos */}
        <div className="space-y-2">
          <Label>Upload Photos (optional)</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Upload photos of the issue or vehicle</p>
            <p className="text-sm text-gray-500">Drag and drop files here, or click to browse</p>
            <Input type="file" multiple accept="image/*" className="hidden" />
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep(3)}>
            Back
          </Button>
          <Button onClick={() => setStep(5)} disabled={!formData.description || !formData.urgency}>
            Review Quote
          </Button>
        </div>
      </div>
    )
  }

  const renderReview = () => {
    const serviceName = services.find((s) => s.id === selectedService)?.name || ""

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Review Your Quote Request</h2>
          <p className="text-gray-600">Please review your information before submitting</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Service Selected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {serviceName}
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>Name:</strong> {formData.name}
              </p>
              <p>
                <strong>Phone:</strong> {formData.phone}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vehicle Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>Vehicle:</strong> {formData.year} {formData.make} {formData.model}
              </p>
              {formData.engine && (
                <p>
                  <strong>Engine:</strong> {formData.engine}
                </p>
              )}
              {formData.mileage && (
                <p>
                  <strong>Mileage:</strong> {formData.mileage} km
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>Description:</strong> {formData.description}
              </p>
              <p>
                <strong>Urgency:</strong> {formData.urgency}
              </p>
              {formData.preferredDate && (
                <p>
                  <strong>Preferred Date:</strong> {formData.preferredDate}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep(4)}>
            Back to Edit
          </Button>
          <Button onClick={handleSubmit} size="lg" className="px-8">
            Submit Quote Request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get Your Free Quote</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your vehicle and service needs. We'll provide you with a detailed quote within 24 hours.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4, 5].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step >= stepNum ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {stepNum}
                  </div>
                  {stepNum < 5 && <div className={`w-16 h-1 mx-2 ${step > stepNum ? "bg-primary" : "bg-gray-200"}`} />}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Service</span>
              <span>Contact</span>
              <span>Vehicle</span>
              <span>Details</span>
              <span>Review</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              {step === 1 && renderServiceSelection()}
              {step === 2 && renderPersonalDetails()}
              {step === 3 && renderVehicleDetails()}
              {step === 4 && renderServiceSpecific()}
              {step === 5 && renderReview()}
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  )
}
