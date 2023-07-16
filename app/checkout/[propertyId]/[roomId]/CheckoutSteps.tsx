'use client'
import React from 'react'
import FormInput from '@/app/(components)/(ui)/FormInput'
import { useRouter } from 'next/navigation'
import { PropertyModel } from '@/app/(models)/Property'

export default function CheckoutSteps({
    property,
}: {
    property: PropertyModel
}) {
    const router = useRouter()
    return (
        <div className="w-full flex flex-col gap-4 pt-8 mx-4 border-r-2 border-black/5">
            <div className="w-full px-4 flex flex-col gap-4">
                <img
                    className="w-[32px] h-[32px]"
                    src="/arrow-left.svg"
                    onClick={() => router.push('/property/' + property._id)}
                />
                <label className="font-bold text-2xl">
                    Book {property.title}
                </label>
                <label className="font-semibold text-2xl">Step 1:</label>
                <label>Property amentities</label>
                <div className="flex flex-row gap-8 flex-wrap font-bold text-sm">
                    <label>Free Wifi</label>
                    <label>Breakfast</label>
                    <label>Free Parking</label>
                    <label>Air Conditioning</label>
                </div>
            </div>
            <hr className="my-8" />
            <div className="w-full px-4 flex flex-col gap-4">
                <label className="font-semibold text-2xl">
                    Step 2: Personal Data
                </label>
                <form className="flex flex-col gap-4 w-full pt-8">
                    <FormInput
                        title="First and Last Name"
                        placeholder="First and Last Name..."
                        type="name"
                    />
                    <FormInput
                        title="Email Adress"
                        placeholder="Email Adress"
                        type="email"
                    />
                    <FormInput
                        title="Phone Number"
                        placeholder="Phone Number"
                        type="phone"
                    />
                </form>
            </div>

            <hr className="my-8" />

            <div className="w-full px-4 flex flex-col gap-4">
                <label className="font-semibold text-2xl">
                    Step 3: Payment Information
                </label>
                <form className="flex flex-col gap-4 w-full pt-8">
                    <FormInput
                        title="Card Number"
                        placeholder="1234 1234 1234 1234"
                        type="name"
                    />
                    <FormInput
                        title="Cardholder Name"
                        placeholder="Name"
                        type="email"
                    />
                    <div className="flex flex-row gap-4 w-full">
                        <FormInput
                            title="Expiration Date"
                            placeholder="MM / YY"
                            type="phone"
                        />
                        <FormInput title="CVC" placeholder="123" />
                    </div>
                </form>
            </div>

            <hr className="my-8" />

            <div className="w-full px-4 flex flex-col gap-4">
                <label className="font-semibold text-2xl">House Rules</label>
                <div className="flex flex-row justify-between w-full max-w-[400px]">
                    <div className="flex flex-col">
                        <label className="text-lg font-bold">
                            Check-in time
                        </label>
                        <label className="text-xl ">From 3PM</label>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-bold">
                            Check-out time
                        </label>
                        <label className="text-xl ">Until 11AM</label>
                    </div>
                </div>
                <div className="flex flex-col gap-2 py-8">
                    <label className="text-sm font-extrabold text-black/50">
                        Beware
                    </label>
                    <div className="flex flex-row gap-8 w-full flex-wrap text-base">
                        <label>No pets allowed</label>
                        <label>No partying</label>
                        <label>No Smoking</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
