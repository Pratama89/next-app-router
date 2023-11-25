import { NextAuthOptions } from "next-auth";
import  CredentialProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

const authOption: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: "pratama2104",
    providers: [
        CredentialProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
              const { email, password } = credentials as {
                  email: string;
                  password: string;
              };
              const user: any = {
                  id: "1",
                  name: "Pratama",
                  email: "pratama@gmail.com",
                  role: "admin",
              }
              if(email === "pratama@gmail.com" && password === "984783") {
                return user;
              } else {
                return null;
              }

            }
        }),
    ],
    callbacks: {
        async jwt({token, account, profile, user}: any) {
            if(account?.provider === "credentials") {
                token.email = user.email;
                token.fullname = user.fullname;
                token.role = user.role;
            }
            return token
        },
        async session({session, token}: any) {
            if("email" in token) {
                session.user.email = token.email
            } if ("fullname" in token) {
                session.user.fullname = token.fullname
            } if ("role" in token) {
                session.user.role = token.role
            }
            return session
        }
    },
    pages: {
        signIn: "/login",
    }
}

const handler = NextAuth(authOption);
export {
    handler as GET, handler as POST
}