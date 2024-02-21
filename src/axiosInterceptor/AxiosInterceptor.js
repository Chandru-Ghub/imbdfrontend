import axios from "axios"

const apiUrl = 'https://imbdclonebackend.onrender.com/api/'
const accessToken = localStorage.getItem('imdbtoken')
// const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDFhMjRiZDk4Nzc0NjI4M2MwZmUzNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwODI3NjMxN30.BLjf7VUuA-8vsNWFirbRCT8OzA7p4RmM9A9EOvDHesY'

export const authAxios = axios.create({
    baseURL : apiUrl,
    headers:{
        token: `Bearer ${accessToken}`
    }
})
