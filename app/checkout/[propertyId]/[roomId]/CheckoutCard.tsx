import { PropertyModel, RoomModel } from '@/app/(models)/Property'
import { redirect } from 'next/navigation'
import React from 'react'

export default function CheckoutCard({
    room,
    property,
}: {
    room: RoomModel
    property: PropertyModel
}) {
    const tommorowDate = new Date()
    tommorowDate.setDate(tommorowDate.getDate() + 1)

    // if (!property) redirect('/')
    // if (!room) redirect('/property/' + property?._id)

    return (
        <>
            <div className="bg-white shadow-2xl rounded-3xl p-8 flex flex-col gap-6">
                <img
                    className="w-full h-[30%] object-cover rounded-3xl"
                    src={room?.imageURL}
                />
                <div className="flex flex-col gap-1">
                    <label className="font-semibold text-xl">
                        {property?.title}
                    </label>
                    <label className="font-bold text-black/50 text-sm">
                        {property?.description.slice(0, 100)}...
                    </label>
                </div>
                <div className="flex flex-col gap-2">
                    <label>
                        <b>Check in</b> {new Date().toISOString().split('T')[0]}{' '}
                    </label>
                    <label>
                        <b>Check out</b>{' '}
                        {tommorowDate.toISOString().split('T')[0]}{' '}
                    </label>
                </div>
                <hr />
                <label>
                    <b>Standard Room</b>
                </label>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row w-full max-w-[400px] items-center justify-between">
                        <label>Price per night:</label>
                        <label>${room?.price}</label>
                    </div>

                    <div className="flex flex-row w-full max-w-[400px] items-center justify-between">
                        <label>1 night:</label>
                        <label>${room?.price}</label>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex flex-row w-full max-w-[400px] items-center justify-between">
                        <label>City tax:</label>
                        <label>${30}</label>
                    </div>

                    <div className="flex flex-row w-full max-w-[400px] items-center justify-between">
                        <label>Service Fees:</label>
                        <label>${20}</label>
                    </div>
                </div>

                <hr />

                <div className="flex flex-row w-full max-w-[400px] items-center justify-between">
                    <label>Total:</label>
                    <label>${room?.price + 50}</label>
                </div>
            </div>
        </>
    )
}
