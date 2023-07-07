'use client'
import React, { ChangeEventHandler, RefObject } from 'react'
import { classicNameResolver } from 'typescript'

interface InputProps {
    className?: string
    imgURL?: any
    ref?: RefObject<any>
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string
    name?: string
    type?: string
    placeholder?: string
}

export default function Input({
    className,
    imgURL,
    ref,
    type,
    onChange,
    value,
    name,
    placeholder,
}: InputProps) {
    return (
        <input
            className={
                'px-4 py-2 border border-gray-200 rounded-full ' + className
            }
            placeholder={placeholder}
            name={name}
            type={type}
            onChange={onChange}
            value={value}
        ></input>
    )
}
