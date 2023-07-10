import axios from 'axios'

export default async function useProperties() {
    const data = await fetch(process.env.NEXTAUTH_URL + '/api/property', {
        method: 'GET',
    })
    return await data.json()
}
