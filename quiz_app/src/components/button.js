import React from 'react';
import styled from 'styled-components';
import palette from '../theme/colors';

const Button = ({title, onPress}) => {
    return(
        <StyledButton onClick={onPress}>
            {title}
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
    background-color: ${palette.pippin};
    -webkit-box-shadow: 4px 4px 10px 0px rgba(226, 149, 120, 1);
    -moz-box-shadow: 4px 4px 10px 0px rgba(226, 149, 120, 1);
    box-shadow: 4px 4px 10px 0px rgba(226, 149, 120, 1);
`

export default Button;