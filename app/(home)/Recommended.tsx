import React from 'react'
import SmallPropertyCard from '../(components)/(ui)/SmallPropertyCard'
import { getServerSession } from 'next-auth'
import useProperties from '../(hooks)/useProperties'
import { PropertyProps } from '../(models)/Property'

export default async function Recommended({
    className,
}: {
    className?: string
}) {
    const properties = await useProperties()
    console.log(properties)

    return (
        <div className={'flex flex-col gap-3 ' + className}>
            <label className="text-2xl font-semibold">
                Hotels loved by guests
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {properties.map((property: PropertyProps) => {
                    return (
                        <div key={property.title}>
                            <SmallPropertyCard property={property} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
