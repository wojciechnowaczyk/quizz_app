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
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    background-color: ${palette.aliceBlue};
`

export default Button;