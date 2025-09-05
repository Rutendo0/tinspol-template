import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    if (!data?.name || !data?.phone || !data?.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    console.log("Booking lead received", { name: data.name, date: data.date, time: data.time, package: data.package })
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("/api/lead/booking error", e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}