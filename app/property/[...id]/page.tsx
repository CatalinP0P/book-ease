import Container from '@/app/(components)/Container'
import React from 'react'
import PropertyGallery from './PropertyGallery'
import Property, { PropertyModel, PropertyProps } from '@/app/(models)/Property'
import mongoose from 'mongoose'
import { redirect } from 'next/navigation'
import axios from 'axios'
import PropertyRatingAndTitle from './PropertyRatingAndTitle'
import PropertyDescription from './PropertyDescription'
import PropertyRooms from './PropertyRooms'
import PropertyReviews from './PropertyReviews'

const fetchProperty = async (id: string) => {
    const res = await axios.get(
        process.env.NEXTAUTH_URL + '/api/property/' + id
    )
    return JSON.parse(res.data) as PropertyModel
}

export default async function PropertyPage({ params }: { params: any }) {
    const property: PropertyModel = await fetchProperty(params.id[0])
    console.log('PROPERTY', property)
    // if (!property) redirect('/')

    var images = [property.imageURL]

    property.rooms.forEach((room) => {
        images.push(room.imageURL)
    })

    return (
        <div className="border-t-2 border-black/5">
            <Container className="flex flex-col">
                <img className="w-[24px] h-[24px] my-8" src="/arrow-left.svg" />
                <PropertyGallery images={images} />
                <PropertyRatingAndTitle property={property} className="pt-8" />
                <PropertyDescription property={property} className="pt-8" />
            </Container>
            <div className="py-8 bg-black/5">
                <Container>
                    <label className="ms-2 text-2xl font-bold">Rooms</label>
                    <PropertyRooms
                        propertyId={property._id}
                        rooms={property.rooms}
                        className="pt-4"
                    />
                </Container>
            </div>

            <Container className="py-8">
                <PropertyReviews
                    reviews={property.reviews}
                    propertyID={property._id}
                />
            </Container>
        </div>
    )
}
