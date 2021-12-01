import React from 'react'

const TextInput = React.forwardRef((props, ref) => {
    return (
        <input type="text" id={props.name} className="border w-3/4 rounded py-2" ref={ref} />
    )
})

export default TextInput