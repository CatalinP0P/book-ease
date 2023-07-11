'use client'
import { PropertyModel } from '@/app/(models)/Property'
import React, { useState } from 'react'

const tabs = ['Overview', 'Policy']

export default function PropertyRatingAndTitle({
    property,
    className,
}: {
    property: PropertyModel
    className?: string
}) {
    const [selectedTab, selectTab] = useState<string>('Overview')

    return (
        <div className="flex flex-row w-full justify-between pt-8 items-start">
            <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl">{property.title}</label>
                <label className="text-black/50">{property.location}</label>
            </div>

            <div className="flex flex-row gap-4 items-center">
                <div className="flex flex-col text-end">
                    <label className="text-lg text-green-500 font-semibold">
                        Excellent
                    </label>
                    <label className="text-black/50 text-xs">
                        {property.reviews.length} Reviews
                    </label>
                </div>
                <label className="rounded-full bg-green-500/20 px-4 py-2 text-green-800/75 font-semibold">
                    {(() => {
                        if (!property.reviews?.length) return 'Not Available'
                        var x = 0
                        property.reviews.forEach((review) => {
                            x += review.rating
                        })

                        return x / property.reviews.length
                    })()}
                </label>
            </div>
        </div>
    )
}
