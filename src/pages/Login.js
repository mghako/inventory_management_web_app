import React, { useRef, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const {login} = useAuth()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [errors, setErrors] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const navigate = useNavigate()
    
    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        const response = await login(emailRef.current.value, passwordRef.current.value)
        
        if(response && response.status === 500) setError(response.data.message)

        if(response.status == 200) navigate("/")
        
        setLoading(false)
        
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Inventory Management System
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Login Here
                </p>
                <p className="mt-2 text-center text-lg text-red-600">
                {error && error}
                </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="my-4">
                            { errors.email && <p className="text-red-600 text-left font-bold">{errors.email}</p> }
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input ref={emailRef} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div className="my-4">
                            { errors.password && <p className="text-red-600 text-left font-bold">{errors.password}</p> }
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input ref={passwordRef} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>
                    
                    <div>
                        <button disabled={loading} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Login Now
                        </button>
                    </div>
                </form>
                <p className="mt-2 text-center text-sm text-gray-600">
                    <Link to="/register">No Account Yet ? Create New Here</Link>
                </p>
            </div>
        </div>
    )
}

export default Login