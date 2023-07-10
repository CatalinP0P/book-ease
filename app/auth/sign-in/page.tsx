'use client'
import Button from '@/app/(components)/(ui)/Button'
import HorizontalSeparator from '@/app/(components)/(ui)/HorizontalSeparator'
import Input from '@/app/(components)/(ui)/Input'
import Container from '@/app/(components)/Container'
import { signIn } from 'next-auth/react'
import React, {
    ChangeEvent,
    ChangeEventHandler,
    FormEventHandler,
    useState,
} from 'react'

export default function SignIn() {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const { email, password } = userInfo

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {}

    return (
        <Container className="flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <form
                className="flex flex-col gap-4 max-w-[500px] w-full mx-auto p-8 border border-gray-200 rounded-3xl"
                onSubmit={handleSubmit}
            >
                <label className="text-4xl font-bold block text-center">
                    Sign in
                </label>
                <div className="flex flex-col gap-1">
                    <label className="ms-2">Email</label>
                    <Input
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="ms-2">Password</label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                <Button type="submit" variant="primary">
                    Submit
                </Button>
                <HorizontalSeparator>or</HorizontalSeparator>
                <Button
                    variant="secondary"
                    className="w-full mx-auto"
                    type="button"
                    onClick={() =>
                        signIn('google', { callbackUrl: '/profile' })
                    }
                >
                    Sign in with Google
                </Button>
            </form>
        </Container>
    )
}
