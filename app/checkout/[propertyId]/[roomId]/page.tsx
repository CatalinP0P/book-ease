import React from 'react'
import axios from 'axios'
import { PropertyModel } from '@/app/(models)/Property'
import { redirect } from 'next/navigation'
import Container from '@/app/(components)/Container'
import CheckoutCard from './CheckoutCard'
import FormInput from '@/app/(components)/(ui)/FormInput'
import Button from '@/app/(components)/(ui)/Button'
import CheckoutSteps from './CheckoutSteps'
import BookButton from './BookButton'

const fetchRoom = async (propertyId: string, roomId: string) => {
    try {
        const res = await axios.get(
            process.env.NEXTAUTH_URL + '/api/property/' + propertyId
        )
        const property: PropertyModel = JSON.parse(res.data)

        const room = property.rooms.find((m) => m._id == roomId)
        return { room: room, property: property }
    } catch (err) {
        console.log(err)
    }
}

export default async function Checkout({
    params,
}: {
    params: { propertyId: string; roomId: string }
}) {
    const response = await fetchRoom(params.propertyId, params.roomId)
    const room = response?.room
    const property = response?.property

    const tommorowDate = new Date()
    tommorowDate.setDate(tommorowDate.getDate() + 1)

    if (!property) redirect('/')
    if (!room) redirect('/property/' + property?._id)

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 border-t-2 border-black/5 gap-16">
                <CheckoutSteps property={property} />
                <div className="w-full px-2 py-4 flex flex-col justify-between h-full">
                    <CheckoutCard property={property} room={room} />

                    <div className="pb-8 w-full">
                        <BookButton/>
                    </div>
                </div>
            </div>
        </Container>
    )
}
