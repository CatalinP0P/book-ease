import React from 'react'
import Input from '../(components)/(ui)/Input'
import SearchBar from '../(components)/(Header)/SearchBar'

interface HeroProps {
    className?: string
}

export default function Hero({ className }: HeroProps) {
    return (
        <div className="relative">
            <div className="relative w-full rounded-3xl object-cover overflow-hidden pb-[30%]">
                <img
                    className="w-full h-[full] absolute left-0 top-0 object-cover"
                    src="banner1.jpeg"
                />
                <label className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl whitespace-nowrap shadow-lg">
                    Book your stay with EasyBook
                </label>
            </div>
            <SearchBar />
        </div>
    )
}
