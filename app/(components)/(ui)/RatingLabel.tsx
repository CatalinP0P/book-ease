import React from 'react'

export default function RatingLabel({
    rating,
    className,
}: {
    rating: number
    className: string
}) {
    return (
        <div
            className={
                'py-1 px-6 bg-green-600/50 text-white rounded-full ' + className
            }
        >
            {rating.toFixed(0)} / 5
        </div>
    )
}
