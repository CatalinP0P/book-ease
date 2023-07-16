import React from 'react'

export default function Success() {
    return (
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-8 items-center">
            <div className="rounded-full bg-green-300/50 w-32 h-32">
                <img className="w-full h-full" src="/check.svg" />
            </div>
            <label className="text-4xl font-bold text-black/75">
                Your booking is now confirmed!
            </label>
        </div>
    )
}
