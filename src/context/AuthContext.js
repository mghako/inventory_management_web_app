import axios from 'axios'
import React, { useContext, useState } from 'react'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()

    const register = async (name, email, password) => {
        try {
         const cookie = await axios.get('/sanctum/csrf-cookie')
         console.log("cookie ", cookie)
         await axios.post('/api/v1/webapp/auth/register', {
             name,
             email,
             password
         })
        }
        catch(e) { 
             console.log("catch ", e.response.data)
             return e.response.data
        }
     
    }
     
    const login = async (email, password) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.post('/api/v1/webapp/auth/login', {
                email,
                password
            })
            localStorage.setItem('currentUser', JSON.stringify(response.data))
            setCurrentUser(response.data)
            return response
        }
        catch(e) {
            console.log("catch ", e.response)
            return e.response
        }
        
    }

    const value = {
        currentUser,
        register,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

