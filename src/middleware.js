import { NextResponse } from 'next/server';

const getTokenFromCookie = (cookies) => {
  const token = cookies.get('token');
  console.log(token);
  return token ? token : null;
};

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const cookies = req.cookies;

  if (pathname.startsWith('/dashboard')) {
    const token = getTokenFromCookie(cookies);
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  if (pathname === '/login' || pathname === '/register') {
    const token = getTokenFromCookie(cookies); 
    if (token) {
      try {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      } catch (error) {
        return NextResponse.next();
      }
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/login', '/register'],
};
