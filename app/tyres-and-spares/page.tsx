"use client"

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
import { FileUpload } from "@/components/ui/file-upload"
import { Wrench, Image as ImageIcon, Car, Package, Clock } from "lucide-react"

export default function TyresAndSparesPage() {
  const [photos, setPhotos] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    make: "",
    model: "",
    year: "",
    engine: "",
    partNumber: "",
    tyreSize: "",
    preferredBrand: "",
    quantity: "",
    urgency: "",
    pickupOrDelivery: "pickup",
    notes: "",
    honeypot: "", // spam trap
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.honeypot) return // ignore bots

    const payload = { ...formData, photos }
    const res = await fetch("/api/lead/tyres-spares", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      alert("Failed to submit. Please try again.")
      return
    }

    alert("Request submitted! We'll get back to you shortly.")
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Tyres & Spares Request</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Provide your vehicle details and upload photos of the required part/tyre. We'll source the best options for you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Wrench className="h-5 w-5 text-primary"/> Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} required/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required/>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Car className="h-5 w-5 text-primary"/> Vehicle Details</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Make *</Label>
                    <Select onValueChange={(v) => handleChange("make", v)}>
                      <SelectTrigger><SelectValue placeholder="Select make"/></SelectTrigger>
                      <SelectContent>
                        {['Toyota','Honda','Ford','Mazda','Nissan','Volkswagen','BMW','Mercedes-Benz','Other'].map(m => (
                          <SelectItem key={m} value={m.toLowerCase()}>{m}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Model *</Label>
                    <Input value={formData.model} onChange={(e) => handleChange("model", e.target.value)} required/>
                  </div>
                  <div className="space-y-2">
                    <Label>Year *</Label>
                    <Input type="number" value={formData.year} onChange={(e) => handleChange("year", e.target.value)} min={1990} max={2026} required/>
                  </div>
                  <div className="space-y-2">
                    <Label>Engine</Label>
                    <Input value={formData.engine} onChange={(e) => handleChange("engine", e.target.value)}/>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Package className="h-5 w-5 text-primary"/> Part/Tyre Details</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Part Number (if known)</Label>
                    <Input value={formData.partNumber} onChange={(e) => handleChange("partNumber", e.target.value)}/>
                  </div>
                  <div className="space-y-2">
                    <Label>Tyre Size</Label>
                    <Input placeholder="e.g., 205/55R16" value={formData.tyreSize} onChange={(e) => handleChange("tyreSize", e.target.value)}/>
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Brand</Label>
                    <Input value={formData.preferredBrand} onChange={(e) => handleChange("preferredBrand", e.target.value)}/>
                  </div>
                  <div className="space-y-2">
                    <Label>Quantity</Label>
                    <Select onValueChange={(v) => handleChange("quantity", v)}>
                      <SelectTrigger><SelectValue placeholder="Select"/></SelectTrigger>
                      <SelectContent>
                        {['1','2','4'].map(q => <SelectItem key={q} value={q}>{q}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Urgency</Label>
                    <Select onValueChange={(v) => handleChange("urgency", v)}>
                      <SelectTrigger><SelectValue placeholder="Select"/></SelectTrigger>
                      <SelectContent>
                        {['ASAP','Within a week','Within a month','Flexible'].map(u => <SelectItem key={u} value={u.toLowerCase()}>{u}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Pickup or Delivery</Label>
                    <Select onValueChange={(v) => handleChange("pickupOrDelivery", v)}>
                      <SelectTrigger><SelectValue placeholder="Select"/></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pickup">Pickup</SelectItem>
                        <SelectItem value="delivery">Delivery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><ImageIcon className="h-5 w-5 text-primary"/> Photos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {photos.map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={i} src={src} alt={`upload-${i}`} className="w-24 h-24 object-cover rounded-lg border" />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <FileUpload onUpload={(url) => setPhotos((prev) => [...prev, url])} />
                    <Button type="button" variant="outline" onClick={() => setPhotos([])}>Clear</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary"/> Additional Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Textarea rows={4} value={formData.notes} onChange={(e) => handleChange("notes", e.target.value)} placeholder="Describe the issue or part details (optional)"/>
                  {/* honeypot */}
                  <input type="text" name="company" value={formData.honeypot} onChange={(e) => handleChange("honeypot", e.target.value)} className="hidden" aria-hidden="true" tabIndex={-1} autoComplete="off"/>
                  <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">Submit Request</Button>
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