import React from 'react'

const SubmitButton = ({name, children}) => {
    return (
        <button type="submit" className="bg-green-600 rounded py-1 px-2 text-white hover:bg-green-800">
            <span className="mr-2">{children}</span>
            {name}
        </button>
    )
}

export default SubmitButton