import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    // Basic validation
    if (!data?.name || !data?.phone || !data?.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: Persist to DB (LeadSubmission) and/or send email notification
    // For now, log to server and return success
    console.log("Tyres & Spares lead received", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      make: data.make,
      model: data.model,
      year: data.year,
      partNumber: data.partNumber,
      tyreSize: data.tyreSize,
      preferredBrand: data.preferredBrand,
      quantity: data.quantity,
      urgency: data.urgency,
      pickupOrDelivery: data.pickupOrDelivery,
      photosCount: Array.isArray(data.photos) ? data.photos.length : 0,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("/api/lead/tyres-spares error", e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}