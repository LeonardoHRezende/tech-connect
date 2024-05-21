import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { APP_ROUTES } from './constants/routes';

export default withAuth(
  function middleware(req) {
    const userIsLogged = req.nextauth?.token?.id;

    if (!userIsLogged) {
      return NextResponse.redirect(
        new URL(APP_ROUTES.LOGIN, req.nextUrl)
      );
    }
  },
  {
    pages: {
      signIn: APP_ROUTES.LOGIN,
    }
  }
);

export const config = {
  matcher: ['/app(!/login)(!/signup)/:path*', '/api(!/signup)/:path*',
  ],
};
