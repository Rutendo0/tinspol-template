import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function checkAdmin() {
  try {
    const admin = await prisma.user.findUnique({
      where: { email: 'admin@tinspol.com' }
    })

    if (admin) {
      console.log('Admin user found:')
      console.log('Email:', admin.email)
      console.log('Name:', admin.name)
      console.log('Role:', admin.role)
      
      // Test password
      const testPassword = 'admin123'
      const isValid = await bcrypt.compare(testPassword, admin.password)
      console.log('Password "admin123" is valid:', isValid)
      
      if (!isValid) {
        console.log('Updating password to "admin123"...')
        const hashedPassword = await bcrypt.hash('admin123', 12)
        await prisma.user.update({
          where: { id: admin.id },
          data: { password: hashedPassword }
        })
        console.log('Password updated successfully!')
      }
    } else {
      console.log('No admin user found')
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkAdmin()