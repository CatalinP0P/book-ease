'use client'
import React, { useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Button from '../(ui)/Button'
import { useRouter } from 'next/navigation'
import ProfilePhoto from './ProfilePhoto'

export default function SignButtons() {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        console.log(session)
    }, [session])

    return (
        <div className="flex flex-row gap-2 items-center">
            {/* Signed out buttons */}
            {!session?.user && (
                <Button
                    variant="secondary"
                    onClick={() => router.push('/auth/sign-up')}
                >
                    Sign up
                </Button>
            )}
            {!session?.user && (
                <Button
                    variant="primary"
                    onClick={() => router.push('/auth/sign-in')}
                >
                    Log in
                </Button>
            )}

            {/* Signed in buttons */}
            {session?.user && (
                <>
                    <ProfilePhoto
                        imageURL={session.user.image as string}
                        alt={session.user.name as string}
                        onClick={() => {
                            router.push('/profile')
                        }}
                    />
                </>
            )}
        </div>
    )
}
