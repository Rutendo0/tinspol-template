import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const COOKIE_NAME = 'tinspol_session'
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me'

export function createSession(user: { id: string; email: string; role: string }) {
  // 7 days
  const token = jwt.sign({ sub: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' })
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

export function destroySession() {
  cookies().set(COOKIE_NAME, '', { path: '/', httpOnly: true, secure: true, expires: new Date(0) })
}

export function getSession(): { user: { id: string; email: string; role: string } } | null {
  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return null
  try {
    const payload = jwt.verify(token, JWT_SECRET) as any
    return { user: { id: payload.sub, email: payload.email, role: payload.role } }
  } catch {
    return null
  }
}