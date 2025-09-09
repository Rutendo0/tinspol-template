import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { createSession } from '@/lib/session'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ error: 'Missing credentials' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })

    const ok = await bcrypt.compare(password, user.password)
    if (!ok) return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })

    await createSession({ id: user.id, email: user.email, role: user.role })
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('login error', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}