import React, {useRef, useState} from 'react';
import { useAuth } from '../context/AuthContext';



const Register = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {register} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading]= useState(false)
    
    const handleSubmit = async (e) => {
    
        e.preventDefault()
        try {
            setLoading(true)
            await register(emailRef.current.value, passwordRef.current.value)
        } catch {
            setLoading(false)
            setError("Failed to register, please try again later")
        }
        setLoading(true)
    }
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {error && <p className="text-red-600 text-center font-extrabold">{error}</p>}
            <div className="max-w-md w-full space-y-8">
                <div>
                <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Inventory Management System
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Register Here
                </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input ref={emailRef} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input ref={passwordRef} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>
                    
                    <div>
                        <button disabled={loading} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Register Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register