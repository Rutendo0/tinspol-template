"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ClipboardList } from "lucide-react"

// Simple, reusable call-to-action section used across pages
export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to service your vehicle?</h2>
          <p className="text-gray-300 mb-8">
            Get a fast quote or contact our team. We provide professional, reliable service for all your automotive needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white font-semibold">
              <Link href="/quote" className="flex items-center space-x-2">
                <ClipboardList className="w-5 h-5" />
                <span>Request a Quote</span>
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white hover:text-black">
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}