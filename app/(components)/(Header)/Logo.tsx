'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Logo() {
    const router = useRouter()
    return (
        <div
            onClick={() => {
                window.location.href = window.location.origin
            }}
            className="text-2xl font-bold cursor-pointer"
        >
            BookEase
        </div>
    )
}
