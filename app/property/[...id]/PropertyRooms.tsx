import { RoomModel, RoomsProps } from '@/app/(models)/Property'
import React from 'react'
import RoomCard from './RoomCard'

export default function PropertyRooms({
    rooms,
    className,
    propertyId,
}: {
    rooms: RoomModel[]
    className?: string
    propertyId: string
}) {
    return (
        <div
            className={
                'w-full overflow-y-hidden scrollbar-hidden overflow-x-scroll flex flex-row gap-4 py-2 ' +
                className
            }
        >
            {rooms.map((room: RoomModel) => {
                return (
                    <div key={room.imageURL + ' ' + room.price}>
                        <RoomCard room={room} propertyId={propertyId} />
                    </div>
                )
            })}
        </div>
    )
}
