'use client'
import { ReviewModel, ReviewProps } from '@/app/(models)/Property'
import React, { useEffect } from 'react'
import getPropertyRating from '@/app/utils/getPropertyRatings'
import Button from '@/app/(components)/(ui)/Button'
import ReviewPopup from '@/app/(components)/(Popups)/ReviewPopup'
import { usePopup } from '../../(context)/PopupContext'
import ReviewCard from './ReviewCard'

export default function PropertyReviews({
    propertyID,
    reviews,
    className,
}: {
    propertyID: string
    reviews: ReviewProps[]
    className?: string
}) {
    const popupContext = usePopup()

    return (
        <div className={'flex flex-col gap-2 ' + className}>
            <div className="flex flex-row justify-between items-start">
                <div className="flex flex-col gap-4">
                    <label className="text-lg md:text-2xl font-bold">
                        Reviews
                    </label>
                    <label className="text-2xl md:text-4xl text-blue-600 mb-8">
                        {getPropertyRating(reviews)}/5
                    </label>
                </div>

                <Button
                    variant="secondary"
                    className="px-14"
                    onClick={() => popupContext.toggleReviewPopup()}
                >
                    Post a review
                </Button>
            </div>

            {reviews.map((review: ReviewProps) => {
                return (
                    <div key={Math.random() * 1000}>
                        <ReviewCard review={review} />
                    </div>
                )
            })}
            <ReviewPopup propertyID={propertyID} />
        </div>
    )
}
