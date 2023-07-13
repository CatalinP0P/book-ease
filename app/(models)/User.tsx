import { kStringMaxLength } from 'buffer'
import mongoose, { Model, model, models, Schema } from 'mongoose'
import { StringMappingType } from 'typescript'

export interface UserModel {
    _id: string
    id: string
    name: string
    email: string
    password?: string
    image: string
}

interface UserProps {
    id: string
    name: string
    email: string
    password?: string
    image: string
}

const userSchema = new Schema<UserProps, {}, {}>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    image: { type: String },
})

const User = models.User || model('User', userSchema)

export default User as Model<UserProps, {}, {}>
