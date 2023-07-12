'use client'
import React, { useEffect, useState } from 'react'
import { usePopup } from '@/app/(context)/PopupContext'
import BasicRating from '../(ui)/BasicRating'
import { Rating } from '@mui/material'
import Button from '../(ui)/Button'
import axios from 'axios'
import Input from '../(ui)/Input'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function ReviewPopup({ propertyID }: { propertyID: string }) {
    const router = useRouter()
    const { data: session } = useSession()
    const { reviewPopup } = usePopup()

    const [error, setError] = useState('')
    const [rating, setRating] = useState(5)
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)

    const sendReview = async () => {
        if (loading) return
        if (!session?.user.id) {
            router.push('/auth/sign-in')
        }
        setLoading(true)
        const url = window.location.origin + '/api/property/reviews'
        console.log('url', url)
        await axios
            .post(url, {
                userID: session?.user.id,
                text: text,
                propertyID: propertyID,
                rating: rating,
            })
            .then((res: any) => {
                console.log(JSON.parse(res.data))
            })
            .catch((err) => {
                setError(err.response.data)
            })
        setLoading(false)
    }

    return (
        <div
            className={
                'fixed z-[100] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-6 py-8 pointer-events-auto bg-white rounded-3xl w-full max-w-[600px] ' +
                (reviewPopup ? ' ' : ' hidden pointer-events-none')
            }
        >
            <div className="flex flex-col gap-2 items-center">
                <label className="text-4xl font-bold">Write a review</label>
                <label>Tell the world your experince with us</label>
                {error && (
                    <label className="text-red-600 text-xs">{error}</label>
                )}
                <Rating
                    name="simple-controlled"
                    className="mt-8"
                    value={rating}
                    size="large"
                    onChange={(event: any, newValue: any) => {
                        setRating(newValue)
                    }}
                />
                <textarea
                    value={text}
                    className="p-2 border-2 border-black/20 rounded-md w-full min-h-[250px] mt-4"
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Your review"
                ></textarea>
                <Button
                    className={
                        loading ? ' opacity-50 mt-4 cursor-progress' : ' mt-4'
                    }
                    onClick={() => sendReview()}
                >
                    Submit Review
                </Button>
            </div>
        </div>
    )
}
