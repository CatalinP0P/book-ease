import Button from '@/app/(components)/(ui)/Button'
import { RoomsProps } from '@/app/(models)/Property'
import React from 'react'

export default function RoomCard({ room }: { room: RoomsProps }) {
    return (
        <div className="w-[400px] h-fit p-2 rounded-3xl overflow-hidden bg-white shadow-md">
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
                <Button>Book now for {room.price}</Button>
            </div>
        </div>
    )
}
