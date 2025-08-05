import { API_URL } from '@/utils/constant/url';

import { NextResponse, type NextRequest } from 'next/server';

const AUTHENTICATED_ROUTES = ['/my', '/likes'];
const UNAUTHENTICATED_ROUTES = ['/login'];

const isAuthenticatedRoute = (pathname: string) => AUTHENTICATED_ROUTES.includes(pathname);

const isUnauthenticatedRoute = (pathname: string) => UNAUTHENTICATED_ROUTES.includes(pathname);

export const checkIsAuthenticated = async (request: NextRequest) => {
  const sessionCookie = request.cookies.get('SESSION');

  try {
    const res = await fetch(`${API_URL}/v1/oauth/status`, {
      headers: {
        Cookie: `SESSION=${sessionCookie?.value}`,
      },
    });

    return res.ok;
  } catch {
    return false;
  }
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAuthenticated = await checkIsAuthenticated(request);

  // 로그인하지 않은 사용자가 유저 관련 페이지 접근 시도
  if (isAuthenticatedRoute(pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 이미 로그인한 사용자가 로그인 페이지 접근
  if (isUnauthenticatedRoute(pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/my', '/likes', '/login'],
};
