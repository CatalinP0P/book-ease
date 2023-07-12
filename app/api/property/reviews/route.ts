import { NextRequest, NextResponse } from 'next/server'
import Property from '@/app/(models)/Property'
import mongoose from 'mongoose'
import startDb from '@/app/(lib)/mongo'

export async function POST(req: NextRequest) {
    startDb()

    const { propertyID, userID, rating, text } = await req.json()
    try {
        if (!propertyID || !userID || !text || !rating) {
            return NextResponse.json('All fields must be included', {
                status: 400,
            })
        }
        const response = await Property.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(propertyID) },
            {
                $push: {
                    reviews: { userID: userID, rating: rating, text: text },
                },
            },
            { new: true }
        )

        return NextResponse.json(JSON.stringify(response))
    } catch (err: any) {
        return NextResponse.json(err.message, {
            status: 400,
        })
    }
}
