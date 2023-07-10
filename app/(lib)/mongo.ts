import mongoose from 'mongoose'

const url: string = process.env.MONGODB_CONNECT as string

let connection: typeof mongoose

const startDb = async () => {
    if (!connection) connection = await mongoose.connect(url)
    return connection
}

export default startDb
