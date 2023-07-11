import startDb from '@/app/(lib)/mongo'
import Property, { PropertyModel } from '@/app/(models)/Property'
import mongoose from 'mongoose'
import { ErrorProps } from 'next/error'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        startDb()
        params.id = params.id[0]
        const property: any = await Property.findOne({
            _id: new mongoose.Types.ObjectId(params.id),
        })
        console.log('Property found, ', property)
        if (!property) {
            return NextResponse.json({ message: 'Not found' }, { status: 400 })
        }
        return NextResponse.json(JSON.stringify(property))
    } catch (err: any) {
        return NextResponse.json(err.message, {
            status: 400,
        })
    }
}
