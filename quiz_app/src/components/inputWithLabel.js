import React from 'react';

const InputWithLabel = ({label, id,onChange}) => {
    return(
        <>
            <p>{label}</p>
            <input  id={id} name={id} onChange={(e) => onChange(e.target.value)}/>
        </>
    )
}

export default InputWithLabel;