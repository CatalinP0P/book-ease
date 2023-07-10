import React, { ChangeEventHandler } from 'react'
import { StringMappingType } from 'typescript'

export default function FormInput({
    title,
    onChange,
    name,
}: {
    title: string
    name: string
    onChange: ChangeEventHandler<HTMLInputElement>
}) {
    return (
        <div className="w-full flex flex-col gap-1">
            <label className="ms-1">{title}</label>
            <input
                onChange={onChange}
                name={name}
                className="py-2 px-4 border border-gray-200 rounded-md"
            />
        </div>
    )
}
