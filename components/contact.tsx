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

    try {
      const response = await fetch('/api/lead/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
      
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
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["0776 556 717", "(0242) 779 099"],
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
    <section id="contact" className="relative py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Section Indicator */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-600 shadow-lg shadow-red-600/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 border-2 border-red-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 border-2 border-black rounded-full animate-pulse animation-delay-600"></div>
        <div className="absolute top-1/4 left-1/3 w-20 h-20 border border-red-400 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
            <span className="text-red-600 font-bold uppercase tracking-wider text-base px-4 py-2 bg-red-50 rounded-full border border-red-200">Get In Touch</span>
            <div className="w-16 h-1 bg-gradient-to-l from-red-600 to-red-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
            Ready to Get
            <span className="block gradient-text">Started?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Contact us today for expert automotive services and personalized solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Form */}
          <Card className="group border-0 shadow-xl hover:shadow-3xl bg-white lg:max-w-none transition-all duration-500 hover:-translate-y-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-black flex items-center space-x-3 group-hover:text-red-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <span>Send us a Message</span>
              </CardTitle>
              <p className="text-gray-600 text-base font-medium">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600 text-base">Thank you for contacting us. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Full Name *</label>
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 text-base border-2 border-gray-300 focus:border-red-600 focus:ring-red-600 rounded-xl transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        placeholder="+263 xxx xxx xxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12 text-base border-2 border-gray-300 focus:border-red-600 focus:ring-red-600 rounded-xl transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 text-base border-2 border-gray-300 focus:border-red-600 focus:ring-red-600 rounded-xl transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Service Needed</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="h-12 text-base border-2 border-gray-300 focus:border-red-600 focus:ring-red-600 rounded-xl transition-all duration-300">
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
                    <label className="block text-sm font-bold text-black mb-2">Message *</label>
                    <Textarea
                      placeholder="Tell us about your vehicle and what service you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="text-base border-2 border-gray-300 focus:border-red-600 focus:ring-red-600 rounded-xl transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 text-base font-bold shadow-lg hover:shadow-red-600/30 transition-all duration-300 hover:scale-105 rounded-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-3">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group border-0 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-black mb-2 group-hover:text-red-600 transition-colors duration-300">{info.title}</h4>
                        <div className="space-y-1 mb-4">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 text-base font-medium">{detail}</p>
                          ))}
                        </div>
                        <a
                          href={info.action}
                          className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-bold bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                        >
                          <span className="text-sm">Contact Now</span>
                          <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                    <div className="w-full h-full bg-white rounded-lg"></div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="group border-0 shadow-xl bg-gradient-to-r from-black via-gray-900 to-black text-white hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 right-2 w-16 h-16 border border-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-12 h-12 border border-red-600 rounded-full animate-pulse animation-delay-300"></div>
              </div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-2xl mb-4 group-hover:text-red-300 transition-colors duration-300">Business Hours</h4>
                    <div className="space-y-3 text-gray-300 text-base">
                      <div className="flex justify-between items-center p-2 rounded-lg group-hover:bg-white/5 transition-colors duration-300">
                        <span className="font-medium">Monday - Friday:</span>
                        <span className="text-white font-bold">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg group-hover:bg-white/5 transition-colors duration-300">
                        <span className="font-medium">Saturday:</span>
                        <span className="text-white font-bold">8:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg group-hover:bg-white/5 transition-colors duration-300">
                        <span className="font-medium">Sunday:</span>
                        <span className="text-red-400 font-bold">CLOSED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="border-0 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group">
          <div className="aspect-[16/6] md:aspect-[16/5] bg-gradient-to-br from-black to-gray-900 relative">
            <iframe
              title="Tinspol Motors Location"
              src="https://www.google.com/maps?q=18608%20Bishop%20Gaul%20Ave%20%26%20Rotten%20Row,%20Kopje,%20Harare,%20Zimbabwe&output=embed"
              className="absolute inset-0 w-full h-full border-0 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Location Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-black text-sm">Tinspol Motors</h5>
                  <p className="text-gray-600 text-xs">Harare, Zimbabwe</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}