import React, {useState, useEffect} from 'react'
import Header from '../components/Partials/Header';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Partials/Navbar';

const Layout = ({pageTitle, children}) => {

    const {logout} = useAuth()
    const [profileDropDown, setProfileDropDown] = useState(false)

    return (
        <>
        <div className="min-h-full">
            <Navbar />
            <Header title={pageTitle}/>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-2 border-dashed border-gray-200 rounded-lg h-96">
                        {children}
                    </div>
                </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default Layout