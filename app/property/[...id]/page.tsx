import Container from '@/app/(components)/Container'
import React from 'react'
import PropertyGallery from './PropertyGallery'
import Property, { PropertyProps } from '@/app/(models)/Property'
import mongoose from 'mongoose'
import { redirect } from 'next/navigation'
import axios from 'axios'

const fetchProperty = async (id: string) => {
    const res = await axios.get(
        process.env.NEXTAUTH_URL + '/api/property/' + id
    )
    return JSON.parse(res.data)
}

export default async function PropertyPage({ params }: { params: any }) {
    const property: PropertyProps = await fetchProperty(params.id[0])
    console.log('PROPERTY', property)
    // // if (!property) redirect('/')

    // var images = [property.imageURL]

    // property.rooms.forEach((room) => {
    //     images.push(room.imageURL)
    // })

    // return (
    //     <div className="border-t-2 border-black/5">
    //         <Container className="flex flex-col">
    //             <img className="w-[24px] h-[24px] my-8" src="/arrow-left.svg" />
    //             <PropertyGallery images={images} />
    //             <div className="flex flex-row w-full justify-between pt-8 items-start">
    //                 <div className="flex flex-col gap-2">
    //                     <label className="font-bold text-2xl">
    //                         {property.title}
    //                     </label>
    //                     <label className="text-black/50">
    //                         {property.location}
    //                     </label>
    //                 </div>

    //                 <div className="flex flex-row gap-4 items-center">
    //                     <div className="flex flex-col text-end">
    //                         <label className="text-lg text-green-500 font-semibold">
    //                             Excellent
    //                         </label>
    //                         <label className="text-black/50 text-xs">
    //                             {property.reviews.length} Reviews
    //                         </label>
    //                     </div>
    //                     <label className="rounded-full bg-green-500/20 px-4 py-2 text-green-800/75 font-semibold">
    //                         {(() => {
    //                             if (!property.reviews?.length)
    //                                 return 'Not Available'
    //                             var x = 0
    //                             property.reviews.forEach((review) => {
    //                                 x += review.rating
    //                             })

    //                             return x / property.reviews.length
    //                         })()}
    //                     </label>
    //                 </div>
    //             </div>
    //         </Container>
    //     </div>
    // )

    return (
        <div>
            <label>Test {params.id[0]}</label>
        </div>
    )
}
