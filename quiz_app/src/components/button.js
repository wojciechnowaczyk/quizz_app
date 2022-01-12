import React from 'react';
import styled from 'styled-components';
import palette from '../theme/colors';

const Button = ({title, onPress, styles, children}) => {
    return(
        <StyledButton style={styles} onClick={onPress}>
            {title}
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    min-width: 100px;
    min-height: 50px;
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    padding: 15px 20px 15px 20px;
    cursor: pointer;
    color: ${palette.white};
    background-color: ${palette.bondiBlue};
    &:hover{
        background-color: ${palette.matisse};
    }
`

export default Button;