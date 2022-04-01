import React from 'react';
import styled from 'styled-components';
import palette from '../theme/colors';

const RadioInput = ({ id,onChange, value}) => {
    return(
        <>
            <Input type="radio" id={id} name={id} value={value} onChange={(e) => onChange(e.target.value)} />
        </>
    )
}

const Input = styled.input`
    height: 20px;
    width: 20px;
    border: 1px solid ${palette.matisse};
    padding: 10px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    outline: 2px solid #333;
    appearance: none;
    &:checked{
        background-color: ${palette.bondiBlue}
    }
    margin-left:  30px;
`

export default RadioInput;