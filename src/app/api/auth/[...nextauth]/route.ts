import { NextAuthOptions } from "next-auth";
import  CredentialProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { login, loginWithGoogle } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import GoogleProvider  from "next-auth/providers/google";

const authOption: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
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
              const user: any = await login({email});
              if(user) {
                const passwordConfirm = await compare(password, user.password); {
                    return user;
                }
                return null;
              } else {
                return null;
              }

            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
        })
    ],
    callbacks: {
        async jwt({token, account, profile, user}: any) {
            if(account?.provider === "credentials") {
                token.email = user.email;
                token.fullname = user.fullname;
                token.role = user.role;
            }
            if(account?.provider === "google") {
                const data = {
                    fullname: user.name,
                    email: user.email,
                    type: "google",
                };

                await loginWithGoogle(
                    data, 
                    (result: {status: boolean, data: any}) => {
                    if(result.status) {
                        token.email = result.data.email;
                        token.fullname = result.data.fullname;
                        token.role = result.data.role;
                    }
                    
                });
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