'use client'
import React, { useEffect } from 'react'
import Property, { PropertyModel, RoomsProps } from '@/app/(models)/Property'
import { PropertyProps } from '@/app/(models)/Property'
import RatingLabel from './RatingLabel'
import { useRouter } from 'next/navigation'

export default function SmallPropertyCard({
    property,
}: {
    property: PropertyModel
}) {
    useEffect(() => {
        console.log(property)
    }, [])

    return (
        <div
            className="rounded-3xl shadow-xl bg-white overflow-hidden relative cursor-pointer h-full"
            onClick={() => {
                window.location.href =
                    window.location.origin + '/property/' + property._id
            }}
        >
            <div className="relative h-[0] pb-[80%] w-full pointer-events-none">
                <img
                    className="absolute left-0 top-0 w-full h-full object-cover"
                    src={property.imageURL}
                />
                <RatingLabel
                    className="absolute top-0 left-0 m-2"
                    rating={95}
                />
            </div>

            <div className="flex flex-col gap-4 px-4 py-6 pointer-events-none justify-between">
                <label className="font-semibold">{property.title}</label>
                <label className="text-black/25 text-xs">
                    {property.location}
                </label>
                <label className="font-bold">
                    from{' '}
                    {(() => {
                        if (property.rooms.length < 1) return
                        var min = property.rooms[0].price
                        property.rooms.forEach((room: RoomsProps) => {
                            min = Math.min(min, room.price)
                        })
                        return min.toFixed(2)
                    })()}
                    $/night
                </label>
            </div>
        </div>
    )
}
