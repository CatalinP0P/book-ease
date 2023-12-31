'use client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const leftNavigation = [
    {
        svg: '/person-fill.svg',
        text: 'Personal Details',
        link: '/profile/personal-details',
    },
    {
        svg: '/wallet.svg',
        text: 'Payment Information',
        link: '/profile/payment-information',
    },
    {
        svg: '/shield-halved.svg',
        text: 'Safety',
        link: '/profile/safety',
    },
    {
        svg: '/gear.svg',
        text: 'Preferences',
        link: '/profile/prefereneces',
    },
    {
        svg: '/bell.svg',
        text: 'Notifications',
        link: '/profile/notifications',
    },
    {
        svg: '/person-plus-fill.svg',
        text: 'Friends',
        link: '/profile/friends',
    },
]

export default function LeftNavigation() {
    const router = useRouter()

    return (
        <>
            <div className="w-fit border-e-2 lg:border-black/5 h-full flex justify-between flex-col gap-1 py-8 flex-1">
                <div className="flex flex-col gap-2">
                    <img
                        onClick={() => {
                            window.location.href = window.location.origin
                        }}
                        className="block w-[24px] h-[24px] mx-8 cursor-pointer"
                        src="/arrow-left.svg"
                    />
                    <label className="text-xl font-bold ms-8 py-4">
                        Profile Settings
                    </label>
                    {leftNavigation.map(
                        (x: { svg: string; text: string; link: string }) => {
                            return (
                                <label
                                    key={x.svg as string}
                                    onClick={() => router.push(x.link)}
                                    className="flex flex-row items-center gap-4 w-full justify-start ps-8 pe-16 py-2 whitespace-nowrap hover:bg-black/5 cursor-pointer"
                                >
                                    <img
                                        className="w-[20px] h-[20px]"
                                        src={x.svg}
                                    />
                                    {x.text}
                                </label>
                            )
                        }
                    )}
                </div>
                <label
                    onClick={() => signOut()}
                    className="flex flex-row items-center gap-4 justify-start ps-8 pe-16 py-2 whitespace-nowrap hover:bg-black/5 w-full cursor-pointer"
                >
                    <img
                        className="w-[20px] h-[20px]"
                        src={'/exit-to-app.svg'}
                    />
                    Log out
                </label>
            </div>
            <div className="w-full"></div>
        </>
    )
}
