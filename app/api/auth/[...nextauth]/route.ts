import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
    interface Session {
        user: DefaultSession['user'] & {
            id: string
        }
    }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        jwt(params: any) {
            if (params.user) {
                params.token.id = params.user.id
            }
            return params.token
        },

        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
            }

            return session
        },
    },
    pages: {
        signIn: '/auth/sign-in',
    },
}

const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST }
