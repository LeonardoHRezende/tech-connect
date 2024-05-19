// import { withAuth } from 'next-auth/middleware';
// import {
//   APP_ROUTES,
//   ROLE_MIDDLEWARE_EXCLUDED_ROUTES,
// } from './constants/app-routes';
// import { NextResponse } from 'next/server';
// import { TeamMemberRole } from './core/domain/entities/team-member';

// export default withAuth(
//   function middleware(req) {
//     const path = req.nextUrl?.pathname;

//     const activeMiddleware = !ROLE_MIDDLEWARE_EXCLUDED_ROUTES.some((route) =>
//       path.startsWith(route)
//     );

//     if (!activeMiddleware) {
//       return undefined;
//     }

//     const userRoles = req.nextauth?.token?.roles! as TeamMemberRole[];
//     const allowedRoles = [TeamMemberRole.PRO];

//     const userHasAccess = userRoles?.some((userRole) =>
//       allowedRoles.includes(userRole)
//     );

//     if (!userHasAccess) {
//       return NextResponse.redirect(
//         new URL(APP_ROUTES.UNAUTHORIZED, req.nextUrl)
//       );
//     }
//   },
//   {
//     pages: {
//       signIn: APP_ROUTES.LOGIN(),
//     },
//   }
// );

// export const config = { matcher: ['/((?!api|_next/static|_next/image|images|verificar-acesso|favicon.ico|login).*)'] };

// // // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// // import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
// // import { NextResponse } from 'next/server';

// // function middleware(req: NextRequestWithAuth) {
// //   const roles = req.nextauth?.token?.roles!;
// //   const isAdmin = roles?.includes('manager');
// //   const group = req.nextauth?.token?.groups[0];
// //   const path = req.nextUrl?.pathname;

// //   if (path.startsWith('/api/teams')) {
// //     const [, , , teamId] = path.split('/');
// //     if (
// //       (!isAdmin || teamId !== group) &&
// //       !path.endsWith('members') &&
// //       !path.startsWith('/api/teams/check-access-link')
// //     ) {
// //       return new NextResponse(
// //         JSON.stringify({ message: 'authentication failed' }),
// //         {
// //           status: 403,
// //           headers: { 'content-type': 'application/json' },
// //         }
// //       );
// //     }
// //   }

// //   if (path.startsWith('/gerenciar-acessos')) {
// //     if (!isAdmin) {
// //       return NextResponse.redirect(new URL('/403', req.nextUrl));
// //     }
// //   }
// // }

// // export default withAuth(middleware, {
// //   callbacks: {
// //     authorized: ({ token, req }) => {
// //       const pathName = req.nextUrl.pathname;

// //       if (pathName.startsWith('/api/webhooks')) {
// //         return true;
// //       }
// //       // if (pathName.startsWith('/verify_access')) {
// //       //   return true;
// //       // }
// //       if (pathName.startsWith('/api/teams/check-access-link')) {
// //         return true;
// //       }

// //       if (pathName.endsWith('/api/teams/members') && req.method === 'POST') {
// //         return true;
// //       }

// //       if (pathName.startsWith('/api/checkout')) {
// //         return true;
// //       }

// //       return !!token;
// //     },
// //   },
// // });
