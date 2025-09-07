// Test the admin login functionality
async function testLogin() {
  try {
    const response = await fetch('http://localhost:3001/api/auth/callback/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email: 'admin@tinspol.com',
        password: 'admin123',
        csrfToken: 'test', // This would normally come from NextAuth
        callbackUrl: 'http://localhost:3001/admin/dashboard',
        json: 'true'
      })
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))
    
    const data = await response.text()
    console.log('Response body:', data)
    
  } catch (error) {
    console.error('Test error:', error)
  }
}

testLogin()