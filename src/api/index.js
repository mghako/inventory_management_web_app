import axios from 'axios'
import { useAuth } from '../context/AuthContext'

export default function api() {
    const {logout} = useAuth
    const api = axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true
    })

    api.interceptors.response.use(response => response, error => {
        if (error.response.status === 401) {
            logout()

            return Promise.reject()
        }

        return Promise.reject(error)
    })

    return api
}