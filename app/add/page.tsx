export const dynamic = 'force-dynamic'
import React from 'react'
import Container from '../(components)/Container'
import { redirect } from 'next/navigation'
import AddForm from './AddForm'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default function AddPage() {
    const session = getServerSession(authOptions)

    if (!session) redirect('/auth/sign-in')

    return (
        <Container>
            <AddForm />
        </Container>
    )
}
