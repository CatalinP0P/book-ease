export const dynamic = 'force-dynamic'
import React from 'react'
import { getServerSession } from 'next-auth'
import Container from '../../(components)/Container'
import LeftNavigation from '../LeftNavigation'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import MobileNavigation from '../MobileNavigation'

export default async function Profile({
    params,
}: {
    params: { page: string }
}) {
    const session = await getServerSession(authOptions)
    if (!session?.user) redirect('/auth/sign-in')

    const page = params.page[0]

    return (
        <div className="border-t-2 border-black/5 flex flex-1">
            <Container className="flex flex-col lg:flex-row flex-1">
                <div className={'hidden lg:flex'}>
                    <LeftNavigation />
                </div>
                <MobileNavigation />

                {page == 'personal-details' && (
                    <div className="flex flex-col px-4 py-8">
                        <label>Personal Detail</label>
                    </div>
                )}
            </Container>
        </div>
    )
}
