import React, { InputHTMLAttributes } from 'react'

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    title?: string
}

export default function FormInput({ title, ...props }: inputProps) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {title && <label className="me-1">{title}</label>}
            <input
                className="w-full border border-black/5 rounded-full py-2 px-4"
                {...props}
            />
        </div>
    )
}
