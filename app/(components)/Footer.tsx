import React from 'react'
import Container from './Container'

export default function Footer() {
    return (
        <div className="bg-black/5 text-black py-8">
            <Container className="justify-between grid grid-cols-2 text-xs">
                <div className="flex flex-col justify-between h-full gap-8">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-2xl lg:text-4xl">
                            BookEase
                        </label>
                        <p className="text-black/50">
                            Your favourie booking experience since 97
                        </p>
                    </div>
                    <label className="text-black/25">
                        © All rights reserved {new Date().getFullYear()}
                    </label>
                </div>

                <div className="flex flex-col gap-2 text-end">
                    <label className="font-bold cursor-pointer">Help</label>
                    <label className="cursor-pointer">FAQ</label>
                    <label className="cursor-pointer">Customer Service</label>
                    <label className="cursor-pointer">How to guide</label>
                    <label className="cursor-pointer">Contact us</label>
                </div>
            </Container>
        </div>
    )
}
