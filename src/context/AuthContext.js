import api from '../api'
import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()

    const logout = async () => {
        localStorage.removeItem('currentUser')
        
    }

    const register = async (name, email, password) => {
        try {
         await api().get('/sanctum/csrf-cookie')
         const response = await api().post('/api/v1/webapp/auth/register', {
             name,
             email,
             password
         })
         console.log(response.data)
        }
        catch(e) { 
             console.log("catch ", e.response.data)
             return e.response.data
        }
     
    }
     
    const login = async (email, password) => {
        try {
            await api().get('/sanctum/csrf-cookie')
            const response = await api().post('/api/v1/webapp/auth/login', {
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
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

