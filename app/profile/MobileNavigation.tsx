'use client'
import React, { useState } from 'react'
import LeftNavigation from './LeftNavigation'

export default function MobileNavigation() {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)

    return (
        <div className="flex lg:hidden flex-row justify-between py-4 mx-auto w-[95%]">
            <label className="text-2xl font-bold">Personal Details</label>
            <img
                className={
                    'transition-all h-[32px] me-4 ' +
                    (mobileMenu ? ' -rotate-90' : ' rotate-0')
                }
                src="/menu.svg"
                onClick={() => setMobileMenu(!mobileMenu)}
            />
            {mobileMenu && (
                <div
                    className="z-[99] bg-black/20 fixed left-0 top-0 bottom-0 right-0"
                    onClick={() => setMobileMenu(false)}
                ></div>
            )}
            <div
                className={
                    'fixed left-0 bottom-0 top-0 w-fit transition-all bg-white' +
                    (mobileMenu
                        ? ' z-[100] opacity-100 pointer-events-auto'
                        : ' translate-x-[-50%] opacity-0 pointer-events-none')
                }
            >
                <LeftNavigation />
            </div>
        </div>
    )
}
