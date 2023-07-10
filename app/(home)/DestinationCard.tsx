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
        <div className="relative rounded-3xl overflow-x-hidden h-[0] w-full pb-[125%] group cursor-pointer overflow-hidden">
            <img
                src={imageURL}
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 overflow-hidden transition-all"
            />
            <label className="absolute z-[5] left-2 bottom-2 rounded-full bg-white/75 text-black w-fit h-fit px-4 py-2">
                {title}
            </label>
            <div className="absolute left-0 top-0 w-full h-full bg-black/25 transition-all group-hover:bg-transparent" />
        </div>
    )
}
