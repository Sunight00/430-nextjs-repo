import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    /*authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProfile = nextUrl.pathname.startsWith('/profile');
      if (isOnProfile) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login pagepr
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/profile', nextUrl));
      }
      return true;
    }*/
    authorized({ auth, request: { nextUrl } }) {
  const isLoggedIn = !!auth?.user;
  const isLoginPage = nextUrl.pathname === '/login';

  if (isLoginPage && isLoggedIn) {
    // If user is already logged in, redirect login → profile
    return Response.redirect(new URL('/profile', nextUrl));
  }

  const isProfilePage = nextUrl.pathname.startsWith('/profile');
  if (isProfilePage && !isLoggedIn) {
    // Protect profile page
    return false;
  }

  // All other pages allowed
  return true;
}

      ,
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;