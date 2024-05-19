
import { firebaseAuth } from '@tech/lib/firebase/firebase-cliente';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { setCookie } from 'nookies';

const ONE_DAY = 60 * 60 * 24;

export const authOptions = (
  req?: NextApiRequest,
  res?: NextApiResponse
): AuthOptions => ({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          const userCredential = await signInWithEmailAndPassword(firebaseAuth, credentials?.email, credentials?.password);
          const user = userCredential.user;

          if (user) {
            return {
              id: user.uid,
              email: user.email,
              name: user.displayName,
            };
          }
        } catch (error) {
          console.error('Firebase login error:', error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
        token.email = user.email;
        token.name = user.name;
      }

      setCookie(
        res ? { res } : undefined,
        'next-auth.id-token',
        token.uid as string,
        { maxAge: ONE_DAY, path: '/' }
      );

      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.uid as string;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: ONE_DAY,
  },
  secret: process.env.NEXTAUTH_SECRET,
});


export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions(req, res));
}