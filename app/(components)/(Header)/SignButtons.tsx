'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Button from '../(ui)/Button'

export default function SignButtons() {
    const { data: session } = useSession()

    return (
        <div className="flex flex-row gap-2 items-center">
            {/* Signed out buttons */}
            {!session?.user && <Button variant="secondary">Sign up</Button>}
            {!session?.user && <Button variant="primary">Log in</Button>}

            {/* Signed in buttons */}
            {session?.user && (
                <button onClick={() => signOut()}>
                    {session.user.name}, logout
                </button>
            )}
        </div>
    )
}
