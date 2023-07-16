'use client'
import Button from '@/app/(components)/(ui)/Button'
import { RoomModel, RoomsProps } from '@/app/(models)/Property'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function RoomCard({
    room,
    propertyId,
}: {
    room: RoomModel
    propertyId: string
}) {
    const router = useRouter()
    return (
        <div className="w-[300px] md:w-[400px] h-fit p-2 rounded-3xl overflow-hidden bg-white shadow-md">
            <div className="rounded-3xl overflow-hidden relative w-full h-0 pb-[60%]">
                <img
                    className="absolute left-0 top-0 w-full h-full object-cover"
                    src={room.imageURL}
                />
            </div>
            <div className="flex flex-col gap-2 p-2">
                <div className="flex flex-row gap-2 items-center justify-start">
                    <img className="w-[16px] h-[16px]" src="/person-fill.svg" />
                    <label>{room.capacity}</label>
                </div>

                <label className="text-black/50 text-xs">
                    Non refundable, breakfast included
                </label>
                <Button
                    onClick={() =>
                        router.push('/checkout/' + propertyId + '/' + room._id)
                    }
                >
                    Book now for {room.price}
                </Button>
            </div>
        </div>
    )
}
