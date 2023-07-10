'use client'
import React, { ButtonHTMLAttributes, RefCallback, RefObject } from 'react'

interface ButtonProps {
    variant?: 'primary' | 'secondary'
    onClick?: (e?: React.MouseEvent<HTMLElement>) => any
    className?: string
    children?: React.ReactNode
    type?: "button" | "reset" | "submit" |  undefined
    ref?: RefObject<any>
}

export default function Button({
    variant = 'primary',
    onClick,
    className,
    children,
    type,
    ref,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            ref={ref}
            type={type}
            className={
                'px-6 py-2 rounded-full transition-all ' +
                className +
                (variant == 'primary'
                    ? ' bg-blue-600 hover:bg-blue-800 text-white'
                    : ' bg-white border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white')
            }
        >
            {children}
        </button>
    )
}
