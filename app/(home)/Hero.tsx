'use client'
import React from 'react'
import Input from '../(components)/(ui)/Input'

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
            <div className="text-xs absolute top-[100%] translate-y-[-50%] z-[5] px-16 py-4 left-[50%] translate-x-[-50%] bg-white shadow-2xl rounded-full hidden md:flex flex-row gap-4">
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Location</label>
                    <input placeholder="Where are you going to?" />
                </div>

                <div className="h-[50px] w-[1px] bg-black/10" />

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Check in</label>
                    <input type="date" placeholder="Add Date" />
                </div>

                <div className="h-[50px] w-[1px] bg-black/10" />

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Check out</label>
                    <input type="date" placeholder="Add Date" />
                </div>

                <div className="h-[50px] w-[1px] bg-black/10" />

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Guests</label>
                    <input placeholder="Number of guests" />
                </div>
            </div>
            <div className="mt-4 p-4 text-xs flex flex-col shadow-2xl rounded-3xl md:hidden gap-4">
                <div className="flex flex-col gap-1">
                    <label className="ms-2 font-bold">Location</label>
                    <Input placeholder="Where are you going" />
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-1 w-full">
                        <label className="ms-2 font-bold">Check in</label>
                        <input
                            type="date"
                            className="py-2 px-4 border border-gray-200 rounded-full"
                        />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <label className="ms-2 font-bold">Check out</label>
                        <input
                            type="date"
                            className="py-2 px-4 border border-gray-200 rounded-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="ms-2 font-bold">Guests</label>
                    <Input placeholder="Number of guests" />
                </div>
            </div>
        </div>
    )
}
