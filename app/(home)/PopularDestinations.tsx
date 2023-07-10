import React from 'react'
import { classicNameResolver } from 'typescript'
import DestinationCard from './DestinationCard'

interface PopularDestinationsProps {
    className: string
}

const destinations = [
    {
        title: 'Spain',
        imageURL: 'spain.jpeg',
    },
    {
        title: 'London',
        imageURL: 'london.avif',
    },
    {
        title: 'Croatia',
        imageURL: 'croatia.jpeg',
    },
    {
        title: 'Monaco',
        imageURL: 'monaco.jpeg',
    },
]

export default function PopularDestinations({
    className,
}: PopularDestinationsProps) {
    return (
        <div className={'w-full ' + className}>
            <label className="text-2xl font-semibold">
                Popular Destinations
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {destinations.map((destination) => {
                    return (
                        <DestinationCard
                            key={destination.imageURL}
                            title={destination.title}
                            imageURL={destination.imageURL}
                        />
                    )
                })}
            </div>
        </div>
    )
}
