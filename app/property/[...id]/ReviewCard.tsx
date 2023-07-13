'use client'
import { useEffect, useState } from 'react'
import { ReviewProps } from '@/app/(models)/Property'
import { Rating } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { UserModel } from '@/app/(models)/User'

export default function ReviewCard({ review }: { review: ReviewProps }) {
    const [user, setUser] = useState<UserModel | null>(null)

    const fetchUser = async () => {
        const user = await axios.get(
            window.location.origin + '/api/users/' + review.userID
        )
        setUser(user.data as UserModel)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className="border-t border-black/5 py-4 flex flex-col">
            <div className="flex flex-row gap-4 items-center">
                <img
                    src={user?.image || '/profile.webp'}
                    className="w-[40px] h-[40px] rounded-full bg-black/25 overflow-hidden"
                />
                <div className="flex flex-col justify-between">
                    <label>{user?.name || 'Loading...'}</label>
                    <Rating
                        name="read-only"
                        size="small"
                        value={review.rating}
                    />
                </div>
            </div>
            <p className="ms-[60px] pt-4">{review.text}</p>
        </div>
    )
}
