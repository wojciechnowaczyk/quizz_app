import React from 'react';
import styled from 'styled-components';
import palette from '../theme/colors';

const TextareaWithLabel = ({label, id,onChange, placeholder, styles}) => {
    return(
        <Box style={styles}>
            <Label>{label}</Label>
            <Textarea  id={id} name={id} onChange={onChange} placeholder={placeholder}/>
        </Box>
    )
}

const Textarea = styled.textarea`
    height: 30px;
    width: 100%;
    border-color: transparent;
    border-bottom: 2px solid ${palette.matisse};
    padding: 10px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    outline: none
`

const Box = styled.div`
    width: 500px;
`

const Label = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: ${palette.white}
`

export default TextareaWithLabel;