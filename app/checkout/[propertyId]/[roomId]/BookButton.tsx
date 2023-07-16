'use client'
import React, { useState } from 'react'
import Button from '@/app/(components)/(ui)/Button'
import { useRouter } from 'next/navigation'

export default function BookButton() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    return (
        <Button
            variant="primary"
            className={
                'w-full ' +
                (loading ? ' opacity-50 pointer-events-none cursor-wait' : ' ')
            }
            onClick={() => router.push('/success')}
        >
            Book now
        </Button>
    )
}
