'use client'
import React, { useState } from 'react'
import { usePopup } from '@/app/(context)/PopupContext'
import BasicRating from '../(ui)/BasicRating'
import { Rating } from '@mui/material'
import Button from '../(ui)/Button'

export default function ReviewPopup({ propertyID }: { propertyID: string }) {
    const { reviewPopup } = usePopup()
    const [rating, setRating] = useState(5)

    return (
        <div
            className={
                'fixed z-[100] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-6 py-8 pointer-events-auto bg-white rounded-3xl ' +
                (reviewPopup ? ' ' : ' hidden pointer-events-none')
            }
        >
            <div className="flex flex-col gap-8 items-center">
                <label className="text-4xl font-bold">Add your review</label>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    size="large"
                    onChange={(event: any, newValue: any) => {
                        setRating(newValue)
                    }}
                />
            </div>
        </div>
    )
}
