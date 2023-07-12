'use client'
import { PropertyModel } from '@/app/(models)/Property'
import React, { useState } from 'react'

const tabs = ['Overview', 'Policy']

export default function PropertyDescription({
    property,
    className,
}: {
    property: PropertyModel
    className?: string
}) {
    const [selectedTab, selectTab] = useState<string>('Overview')

    return (
        <div className={className}>
            <div className="flex flex-row justify-start items-center border-b-2 border-gray-300">
                {tabs.map((tab: string) => {
                    return (
                        <label
                            key={Math.random() * 1000}
                            onClick={() => selectTab(tab)}
                            className={
                                'px-8 mb-[-2px] py-2 ' +
                                (tab == selectedTab
                                    ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                                    : ' text-black/50')
                            }
                        >
                            {tab}
                        </label>
                    )
                })}
            </div>
            {selectedTab == 'Overview' && (
                <div className="flex flex-col md:flex-row py-8 items-top gap-8 h-full">
                    <div className="flex flex-col gap-4">
                        <label className="font-bold text-2xl">
                            Property Overview
                        </label>
                        <p className="text-black/75">{property.description}</p>
                    </div>

                    <div className="w-full max-w-[400px] sm:min-w-[400px] sm:w-[400px] h-[250px] bg-black/10 rounded-3xl mx-auto" />
                </div>
            )}
            {selectedTab == 'Policy' && (
                <div className="py-8">
                    <label className="font-bold text-2xl">Privacy Policy</label>
                    <p className="text-black/75 mt-4">
                        We are committed to protecting the privacy of our
                        guests. This Privacy Policy explains how we collect,
                        use, disclose, and protect your personal information
                        when you use our hotel services or interact with our
                        website. By accessing our services, you consent to the
                        collection and processing of your information as
                        described in this policy. Information We Collect:
                        Personal information: Name, contact details, billing
                        information, and other information provided during
                        reservations, check-in, or other interactions.
                        Demographic information: Age, gender, nationality, and
                        other relevant details. Usage information: IP address,
                        device information, browsing activities, and
                        preferences. Use of Information: Provide and improve our
                        services: Process reservations, check-in/check-out, and
                        personalized services. Communication: Send updates,
                        promotional offers, and respond to inquiries. Analytics
                        and personalization: Understand guest preferences and
                        enhance our services. Compliance: Fulfill legal
                        obligations and protect our rights.
                    </p>
                </div>
            )}
        </div>
    )
}
