import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Basic validation
    if (!data?.name || !data?.phone || !data?.email || !data?.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: Persist to DB (LeadSubmission) and/or send email notification
    // For now, log to server and return success
    console.log("Contact form lead received", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
      message: data.message,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("/api/lead/contact error", e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}