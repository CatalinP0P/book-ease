export const dynamic = 'force-dynamic'

import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import type { DefaultSession } from 'next-auth'
import User from '@/app/(models)/User'

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
        async jwt(params: any) {
            if (params.user) {
                params.token.id = params.user.id
                console.log('USER LOGGED IN', params.user)
                // checking if already in db

                const userInDb = await User.findOne({ id: params.user.id })
                if (!userInDb) {
                    const user = new User({
                        id: params.user.id,
                        name: params.user.name,
                        email: params.user.email,
                        image: params.user.image,
                    })

                    await user.save()
                    console.log('New user detected, saved in db')
                } else {
                    await User.findOneAndUpdate(
                        { id: params.user.id },
                        {
                            $set: {
                                name: params.user.name,
                                image: params.user.image,
                            },
                        }
                    )

                    console.log('User found in db, updating data')
                }
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
