import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET ?? "",
    }),
    GitHubProvider({
        clientId: process.env.NEXT_GITHUB_CLIENT_ID ?? "",
        clientSecret: process.env.NEXT_GITHUB_CLIENT_SECRET ?? ""
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const response = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            name: credentials.name,
            password: credentials.password,
          }),
        });
        const user = await response.json();
        if (response.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
