import { NextResponse, NextRequest } from "next/server";

/**
 * Middleware function to handle authentication and redirection based on the presence of a session token.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {NextResponse | undefined} - A redirection response if the user is not authenticated or if the user is already authenticated and trying to access the root path.
 *
 * This middleware performs the following checks:
 * 1. If there is no session token and the request path is not "/auth/login", it redirects the user to the login page.
 * 2. If there is a session token and the request path is the root ("/"), it redirects the user to the "/moments" page.
 */
export function middleware(req: NextRequest): NextResponse {
  const token = req.cookies.get("next-auth.session-token");

  if (!token && req.nextUrl.pathname !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (token && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/moments", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/moments", "/"],
}