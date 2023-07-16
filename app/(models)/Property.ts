import mongoose, {
    models,
    model,
    Schema,
    Document,
    Model,
    ObjectId,
    Mongoose,
} from 'mongoose'
import Link from 'next/link'
import { isNumericLiteral } from 'typescript'

export interface PropertyModel {
    _id: string
    userID: string
    title: string
    description: string
    category: 'hotel' | 'motel' | 'apartment' | 'house'
    imageURL: string
    location: string
    rooms: RoomModel[]
    reviews: ReviewProps[]
}

export interface PropertyProps {
    userID: string
    title: string
    description: string
    category: 'hotel' | 'motel' | 'apartment' | 'house'
    imageURL: string
    location: string
    rooms: RoomsProps[]
    reviews: ReviewProps[]
}

export interface RoomModel extends RoomsProps {
    _id: string
}

export interface RoomsProps {
    price: number
    imageURL: string
    capacity: number
}

export interface ReviewModel {
    _id: string
    userID: string
    rating: 1 | 2 | 3 | 4 | 5
    text?: string
}

export interface ReviewProps {
    userID: String
    rating: 1 | 2 | 3 | 4 | 5
    text?: string
}

const roomSchema = new Schema({
    price: { type: Number },
    imageURL: { type: String },
    capacity: { type: Number },
})

const reviewSchema = new Schema({
    userID: { type: String, required: true },
    rating: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
    text: { type: String },
})

const propertySchema = new Schema<PropertyProps, {}, {}>({
    userID: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
        type: String,
        enum: ['hotel', 'motel', 'apartment', 'house'],
        required: true,
    },
    imageURL: { type: String, required: true },
    location: { type: String, required: true },
    rooms: { type: [roomSchema] },
    reviews: { type: [reviewSchema] },
})

const Property = models.Property || model('Property', propertySchema)

export default Property as Model<PropertyProps, {}, {}>
