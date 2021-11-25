import React from 'react';
import styled from 'styled-components';
import palette from '../theme/colors';

const InputWithLabel = ({label, id,onChange}) => {
    return(
        <>
            <Label>{label}</Label>
            <Input  id={id} name={id} onChange={(e) => onChange(e.target.value)}/>
        </>
    )
}

const Input = styled.input`
    height: 30px;
    width: 250px;
    border-radius: 20px;
    border-color: transparent;
    padding: 10px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    outline: none
`

const Label = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: ${palette.white}
`

export default InputWithLabel;