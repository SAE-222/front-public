import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/category") {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}
