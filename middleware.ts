import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware((auth, req) => {
  const url = new URL(req.url);

  // Exclude specific API routes from authentication
  if (
    url.pathname === '/api/stripe/create-customer' ||
    url.pathname === '/api/stripe/get-customer'
  ) {
    return NextResponse.next();
  }

  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
