'use client'

import React from 'react'

interface DestinationCardProps {
    imageURL: string
    title: string
}

export default function DestinationCard({
    imageURL,
    title,
}: DestinationCardProps) {
    return (
        <div>
            <div className="relative rounded-3xl overflow-x-hidden h-[0] w-full pb-[125%] ">
                <img
                    src={imageURL}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <label className="absolute left-2 bottom-2 rounded-full bg-white/75 text-black w-fit h-fit px-4 py-2">
                    {title}
                </label>
            </div>
        </div>
    )
}
