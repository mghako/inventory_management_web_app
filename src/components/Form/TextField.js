import React from 'react';

const TextField = React.forwardRef((props, ref) => {
    return (
        <textarea name={props.name} id={props.name} className="w-3/4 border" ref={ref}></textarea>
    )
})
export default TextField