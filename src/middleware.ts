export { default } from "next-auth/middleware"
import { NextResponse, NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { JWT } from "next-auth/jwt"
  
interface Token extends JWT {
  role?: number
}

export async function middleware(req: NextRequest) {
  
  const token: Token | null = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const role = token?.role ?? 0
  const { pathname } = req.nextUrl

  // Checks for logged in users
  if (pathname.startsWith('/user') && role < 1 ) {    
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Allow access to other routes
  return NextResponse.next()

}

export const config = {
  matcher: [
    '/user/:path*',
    '/app/:path*' // Add api routes here?
  ],
}