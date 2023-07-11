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
                            key={tab}
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
        </div>
    )
}
