export const dynamic = 'force-dynamic'
import React from 'react'
import { getServerSession } from 'next-auth'
import Container from '../(components)/Container'
import LeftNavigation from './LeftNavigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Profile() {
    const session = await getServerSession(authOptions)

    if (!session?.user) redirect('/auth/sign-in')

    return (
        <div className="border-t-2 border-black/5 flex flex-1">
            <Container className="flex flex-row flex-1">
                <LeftNavigation />
            </Container>
        </div>
    )
}
