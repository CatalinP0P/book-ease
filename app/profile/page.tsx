import { redirect } from 'next/navigation'
import React from 'react'

export default function ProfilePage() {
    return redirect('/profile/personal-details')
}
