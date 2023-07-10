import Image from 'next/image'
import Hero from './Hero'
import Container from '../(components)/Container'
import PopularDestinations from './PopularDestinations'
import Recommended from './Recommended'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Home() {
    const session = await getServerSession(authOptions)

    console.log(session)

    return (
        <Container>
            <Hero />
            <PopularDestinations className="mt-32" />
            <Recommended className="py-24" />
        </Container>
    )
}
