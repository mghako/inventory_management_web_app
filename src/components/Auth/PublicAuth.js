import React from 'react'
import { Navigate, useLocation} from 'react-router-dom'


const RequireAuth = ({children}) => {
    const location = useLocation()
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log("public auth", currentUser)
    if(currentUser) {
        return <Navigate to="/" state={{from: location}} /> 
    }
    return children
    
}

export default RequireAuth