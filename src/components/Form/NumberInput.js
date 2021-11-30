import React from 'react'

const NumberInput = React.forwardRef((props, ref) => {
    return (
        <input type="number" id={props.name} className="border w-100 rounded py-2" ref={ref} min="1" step="1" />
    )
})

export default NumberInput