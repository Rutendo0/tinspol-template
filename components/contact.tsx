"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Navigation } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["0776 556 717", "(0242) 779 099", "0719 757 957"],
      action: "tel:+263776556717",
      color: "from-red-500 to-red-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Quick Support", "Instant Quotes"],
      action: "https://wa.me/263776556717",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["tinspolent@gmail.com", "bookings@tinspol.co.zw"],
      action: "mailto:bookings@tinspol.co.zw",
      color: "from-black to-gray-800"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["18608 Bishop Gaul Ave", "and Rotten Row Kopje, Harare"],
      action: "https://maps.google.com/search/18608+Bishop+Gaul+Ave+Harare+Zimbabwe",
      color: "from-red-600 to-red-700"
    },
  ]

  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-0.5 bg-red-600"></div>
            <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
            <div className="w-12 h-0.5 bg-red-600"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-3">
            Ready to Get
            <span className="block text-red-600">Started?</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Contact us today for expert automotive services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Contact Form */}
          <Card className="border-0 shadow-md bg-white lg:max-w-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold text-black flex items-center space-x-2">
                <Send className="w-5 h-5 text-red-600" />
                <span>Send us a Message</span>
              </CardTitle>
              <p className="text-gray-600 text-xs">Fill out the form below and we'll get back to you.</p>
            </CardHeader>
            <CardContent className="p-4">
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-base font-bold text-black mb-1">Message Sent!</h3>
                  <p className="text-gray-600 text-xs">Thank you for contacting us. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-black mb-1">Full Name *</label>
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-8 text-sm border-gray-300 focus:border-red-600 focus:ring-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-black mb-1">Phone Number *</label>
                      <Input
                        type="tel"
                        placeholder="+263 xxx xxx xxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-8 text-sm border-gray-300 focus:border-red-600 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-black mb-1">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-8 text-sm border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-black mb-1">Service Needed</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="h-8 text-sm border-gray-300 focus:border-red-600 focus:ring-red-600">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="motor-mechanics">Motor Mechanics</SelectItem>
                        <SelectItem value="suspension">Suspension Repairs</SelectItem>
                        <SelectItem value="tyres">Tyre Services</SelectItem>
                        <SelectItem value="car-wash">Car Wash & Detailing</SelectItem>
                        <SelectItem value="panel-beating">Panel Beating</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-black mb-1">Message *</label>
                    <Textarea
                      placeholder="Tell us about your vehicle and what service you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={3}
                      className="text-sm border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 text-sm font-semibold shadow hover:shadow-red-600/20 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-5">
            
            {/* Two-column (3 left, 3 right) cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-base text-black mb-1">{info.title}</h4>
                        <div className="space-y-0.5">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                          ))}
                        </div>
                        <a
                          href={info.action}
                          className="inline-flex items-center space-x-1 text-red-600 hover:text-red-700 font-semibold mt-2"
                        >
                          <span className="text-sm">Contact Now</span>
                          <Navigation className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="border-0 shadow-md bg-gradient-to-r from-black to-gray-900 text-white">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-2">Business Hours</h4>
                    <div className="space-y-1 text-gray-300 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="text-white font-semibold">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="text-white font-semibold">8:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="text-red-400 font-semibold">CLOSED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="aspect-[16/6] md:aspect-[16/5] bg-gradient-to-br from-black to-gray-900 relative">
            <iframe
              title="Tinspol Motors Location"
              src="https://www.google.com/maps?q=18608%20Bishop%20Gaul%20Ave%20%26%20Rotten%20Row,%20Kopje,%20Harare,%20Zimbabwe&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Card>
      </div>
    </section>
  )
}