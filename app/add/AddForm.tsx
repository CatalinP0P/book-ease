'use client'
import React, {
    ChangeEventHandler,
    EventHandler,
    FormEventHandler,
    FormHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from 'react'
import { PropertyProps, RoomsProps } from '../(models)/Property'
import { useSession } from 'next-auth/react'
import Button from '../(components)/(ui)/Button'
import FormInput from './FormInput'

export default function AddForm() {
    const { data: session } = useSession()
    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const newImageInputRef = useRef<HTMLInputElement>(null)

    const [propertyInfo, setPropertyInfo] = useState<PropertyProps>({
        userID: session?.user.id as string,
        title: '',
        description: '',
        location: '',
        imageURL: '',
        rooms: [],
        reviews: [],
        category: 'apartment',
    })

    const [newRoom, setNewRoom] = useState<RoomsProps>({
        price: 100,
        capacity: 2,
        imageURL: '',
    })

    useEffect(() => {
        setPropertyInfo({ ...propertyInfo, userID: session?.user.id as string })
    }, [session])

    const handleSubmit = async (e: any) => {
        setLoading(true)
        const res = await fetch('/api/property', {
            method: 'POST',
            body: JSON.stringify(propertyInfo),
        })

        console.log(res.json())
        setLoading(false)
    }

    const handleChange = (
        e:
            | React.FormEvent<HTMLInputElement>
            | React.FormEvent<HTMLSelectElement>
    ) => {
        const { value, name } = e.currentTarget
        setPropertyInfo({ ...propertyInfo, [name]: value })
    }

    const handleNewRoomChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value, name } = e.currentTarget

        setNewRoom({ ...newRoom, [name]: value })
    }

    const handleNewRoomImageChange: ChangeEventHandler<HTMLInputElement> = (
        e: any
    ) => {
        try {
            const file = e.target.files[0]
            const fileReader = new FileReader()
            fileReader.onload = () => {
                setNewRoom({
                    ...newRoom,
                    imageURL: fileReader.result as string,
                })
            }

            fileReader.readAsDataURL(file)
        } catch (err) {}
    }

    const handleImageChange: ChangeEventHandler<HTMLInputElement> = (
        e: any
    ) => {
        try {
            const file = e.target.files[0]

            const fileReader = new FileReader()
            fileReader.onload = () => {
                setPropertyInfo({
                    ...propertyInfo,
                    imageURL: fileReader.result as string,
                })
            }

            fileReader.readAsDataURL(file)
        } catch (err) {
            console.log(err)
        }
    }

    const handleNewRoom = (e: any) => {
        setPropertyInfo({
            ...propertyInfo,
            rooms: [...propertyInfo.rooms, newRoom],
        })

        setNewRoom({
            price: 100,
            capacity: 2,
            imageURL: '',
        })
    }

    return (
        <>
            <form
                className="w-full flex flex-col gap-4"
                onSubmit={handleSubmit}
            >
                <FormInput title="Title" name="title" onChange={handleChange} />
                <FormInput
                    title="Description"
                    name="description"
                    onChange={handleChange}
                />
                <div className="flex flex-row gap-4">
                    <FormInput
                        title="Location"
                        name="location"
                        onChange={handleChange}
                    />

                    <div className="flex flex-col gap-1 w-full">
                        <label className="ms-1">Category</label>
                        <select
                            className="py-2 px-4 border border-gray-200 rounded-md w-full"
                            name="category"
                            onChange={handleChange}
                        >
                            <option>hotel</option>
                            <option>motel</option>
                            <option>apartment</option>
                            <option>house</option>
                        </select>
                    </div>
                </div>

                <img
                    src={propertyInfo.imageURL}
                    className="w-[50%] h-full object-cover"
                />

                <input
                    type="file"
                    accept="image"
                    className="hidden"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                />
                <Button
                    variant="secondary"
                    type="button"
                    className="w-fit"
                    onClick={() => {
                        fileInputRef.current?.click()
                    }}
                >
                    Choose Photo
                </Button>

                <label>Rooms</label>
                <div className="flex flex-row gap-3 w-full overflow-x-scroll overflow-y-hidden min-h-[250px] items-center border-t-2 border-b-2 border-gray-200">
                    {propertyInfo.rooms.map((room: RoomsProps) => {
                        return (
                            <div className="min-w-[250px] w-[250px] h-[0] pb-[15%] rounded-xl overflow-hidden relative">
                                <img
                                    className="absolute left-0 top-0 w-full h-full z-[1]"
                                    src={room.imageURL}
                                />
                                <div className="absolute w-full bottom-0 z-[100] flex flex-row gap-2 m-1">
                                    <label className="flex flex-row gap-1 items-center rounded-full bg-gray-200/50 px-2 py-1">
                                        {room.capacity}
                                        <img
                                            className="w-[32px] h-[32px]"
                                            src="person.svg"
                                        />
                                    </label>
                                    <label className="flex flex-row items-center gap-1 bg-green-600/50 text-white rounded-full py-1 px-3">
                                        {room.price}
                                    </label>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <label>Add Room</label>

                <div className="flex flex-row items-end gap-4">
                    <div>
                        <input
                            type="file"
                            accept="image"
                            className="hidden"
                            ref={newImageInputRef}
                            onChange={handleNewRoomImageChange}
                        />
                        <img src={newRoom.imageURL} />
                        <Button
                            type="button"
                            variant="secondary"
                            className="whitespace-nowrap"
                            onClick={() => newImageInputRef.current?.click()}
                        >
                            Choose room photo
                        </Button>
                    </div>
                    <FormInput
                        title="Capacity"
                        name="capacity"
                        onChange={handleNewRoomChange}
                    />
                    <FormInput
                        title="Price"
                        name="price"
                        onChange={handleNewRoomChange}
                    />
                </div>

                <Button type="button" onClick={handleNewRoom}>
                    Add room
                </Button>

                <Button
                    type="submit"
                    className={
                        loading ? ' bg-blue-600/20 pointer-events-none' : ''
                    }
                >
                    Add
                </Button>
                <Button
                    variant="secondary"
                    type="button"
                    onClick={() => console.log(propertyInfo)}
                >
                    Log Property
                </Button>
            </form>
        </>
    )
}
