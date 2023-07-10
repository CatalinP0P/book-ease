export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import Property from '@/app/(models)/Property'
import startDb from '@/app/(lib)/mongo'

export async function GET(req: NextRequest) {
    startDb()
    const response = await Property.find({})
    return new NextResponse(JSON.stringify(response))
}

export async function POST(req: NextRequest) {
    try {
        startDb()
        const model = new Property(await req.json())
        const response = await model.save()
        return new NextResponse(JSON.stringify(response))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify(err))
    }
}
