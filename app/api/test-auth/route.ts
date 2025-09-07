import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    
    console.log('Test auth API called with:', { email })
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    })
    
    if (!user) {
      console.log('User not found:', email)
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    
    console.log('User found:', { id: user.id, email: user.email, role: user.role })
    
    // Check password
    const isValid = await bcrypt.compare(password, user.password)
    console.log('Password check result:', isValid)
    
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }
    
    return NextResponse.json({ 
      success: true, 
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name, 
        role: user.role 
      } 
    })
    
  } catch (error) {
    console.error('Test auth error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}