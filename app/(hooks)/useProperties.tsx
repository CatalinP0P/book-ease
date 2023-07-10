import axios from 'axios'

export default async function useProperties() {
    const data = await fetch('http://localhost:3000/api/property', {
        method: 'GET',
    })
    return await data.json()
}
