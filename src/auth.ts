import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import NextAuth from "next-auth";

export const {
  signIn,
  signOut,
  handlers: { GET, POST },
  auth,
} = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
  },
  trustHost: true,
  secret: "test",
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        return { id: "5", name: "John Doe" };
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const goToLogin = nextUrl.pathname.startsWith("/auth/signin");
      if (!isLoggedIn) {
        return goToLogin;
      }
      if (!goToLogin) {
        return true;
      }
      return NextResponse.redirect(new URL("/dashboard", nextUrl));
    },
  },
});
