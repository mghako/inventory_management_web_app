import axios from 'axios'
import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

function register(email, password) {
    axios.post(`http://localhost:8000/api/v1/auth/register`, {
        email,
        password,
        device_name: 'web_app'
    })
    .then( (response) => {
        console.log(response)
    })
    .catch(error => console.log(error))
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()

    const value = {
        currentUser,
        register
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}