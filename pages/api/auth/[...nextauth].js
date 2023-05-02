import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, pass } = credentials;
        const user = await prisma.users.findUnique({
          where: { email: email },
        });
        return user && user.password === pass ? user : null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
