import React from 'react'
import { Navigate, useLocation} from 'react-router-dom'


const RequireAuth = ({children}) => {
    const location = useLocation()
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if(!currentUser) {
        return <Navigate to="/login" state={{from: location}} /> 
    }
    return children
    
}

export default RequireAuth