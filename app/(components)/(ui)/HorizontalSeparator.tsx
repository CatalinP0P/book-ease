import React from 'react'

interface HorizontalSeparatorProps {
    children?: React.ReactNode
    className?: string
}

export default function HorizontalSeparator({
    className,
    children,
}: HorizontalSeparatorProps) {
    return (
        <div
            className={
                'flex flex-row items-center w-full text-black/25 ' + (children ? 'gap-4' : '')
            }
        >
            <div className="h-[1px] bg-black/10 w-full" />
            <label>{children}</label>
            <div className="h-[1px] bg-black/10 w-full" />
        </div>
    )
}
