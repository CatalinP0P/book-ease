import User from '@/app/(models)/User'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const userID = params.id

    const user = await User.findOne({ id: userID })

    return NextResponse.json(user, { status: 200 })
}
