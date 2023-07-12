import { RoomsProps } from '@/app/(models)/Property'
import React from 'react'
import RoomCard from './RoomCard'

export default function PropertyRooms({
    rooms,
    className,
}: {
    rooms: RoomsProps[]
    className?: string
}) {
    return (
        <div
            className={
                'w-full overflow-y-hidden scrollbar-hidden overflow-x-scroll flex flex-row gap-4 py-2 ' +
                className
            }
        >
            {rooms.map((room: RoomsProps) => {
                return (
                    <div key={room.imageURL + ' ' + room.price}>
                        <RoomCard room={room} />
                    </div>
                )
            })}
        </div>
    )
}
