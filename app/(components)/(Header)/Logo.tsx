'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Logo() {
    const router = useRouter()
    return (
        <div
            onClick={() => router.push('/')}
            className="text-2xl font-bold cursor-pointer"
        >
            BookEase
        </div>
    )
}
