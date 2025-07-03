import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes
const protectedRoutes = ['/dashboard'];
const authRoutes = ['/auth'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get the auth token from cookies
  // Firebase Auth stores the token in a cookie with the name starting with "firebase:authUser:"
  const cookies = request.cookies;
  let isAuthenticated = false;
  
  // Check for Firebase auth cookies
  for (const [name] of cookies) {
    if (name.startsWith('firebase:authUser:') || name.includes('__session')) {
      isAuthenticated = true;
      break;
    }
  }
  
  // Alternative: Check for a custom auth cookie if you set one after Firebase auth
  const authToken = cookies.get('auth-token');
  if (authToken) {
    isAuthenticated = true;
  }
  
  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // Redirect logic
  if (isProtectedRoute && !isAuthenticated) {
    // Redirect to auth page if trying to access protected route without authentication
    const url = request.nextUrl.clone();
    url.pathname = '/auth';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }
  
  if (isAuthRoute && isAuthenticated) {
    // Redirect to dashboard if trying to access auth page while authenticated
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }
  
  // Allow the request to continue
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|public).*)',
  ],
};