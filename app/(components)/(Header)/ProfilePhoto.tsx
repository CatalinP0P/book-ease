'use client'
import React, {
    ButtonHTMLAttributes,
    EventHandler,
    ReactEventHandler,
    useEffect,
    useState,
} from 'react'

export default function ProfilePhoto({
    imageURL,
    alt,
    onClick,
}: {
    imageURL?: string | undefined
    alt: string
    onClick: ReactEventHandler<any>
}) {
    useEffect(() => {
        console.log(imageURL)
    }, [])

    return imageURL ? (
        <img
            className="rounded-full w-[64px] h-[64px] hover:border-2 transition-all border-blue-500 cursor-pointer"
            src={imageURL}
            onClick={onClick}
        />
    ) : (
        <div className="rounded-full w-[64px] h-[64px] hover:border-2 transition-all border-blue-500 bg-red-200 cursor-pointer flex flex-row items-center justify-center">
            <label className="text-2xl font-bold">{alt[0].toUpperCase()}</label>
        </div>
    )
}
