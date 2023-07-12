'use client'
import React, { createContext, useContext, useState } from 'react'
import ReviewPopup from '../(components)/(Popups)/ReviewPopup'
import '../globals.css'

export interface PopupContextInterface {
    reviewPopup: boolean
    toggleReviewPopup: () => void
}

const PopupContext = createContext<PopupContextInterface>({
    reviewPopup: false,
    toggleReviewPopup: () => {},
})

export const usePopup = () => {
    return useContext(PopupContext)
}

export default function PopupProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [reviewPopup, setReviewPopup] = useState<boolean>(false)
    const toggleReviewPopup = () => {
        setReviewPopup(!reviewPopup)
    }

    const closeAll = () => {
        setReviewPopup(false)
    }

    return (
        <PopupContext.Provider
            value={{
                reviewPopup: reviewPopup,
                toggleReviewPopup: toggleReviewPopup,
            }}
        >
            {reviewPopup && (
                <div
                    className="fixed left-0 top-0 w-full h-full bg-black/50 z-[10]"
                    onClick={() => closeAll()}
                />
            )}
            {children}
        </PopupContext.Provider>
    )
}
