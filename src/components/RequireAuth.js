import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet, useLocation} from 'react-router-dom'


const RequireAuth = () => {
    const location = useLocation()
    // const {currentUser} = useAuth()
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log("require auth", currentUser)
    return currentUser ? <Outlet /> : <Navigate to="/login" state={{from: location}} /> 
    
}

export default RequireAuth