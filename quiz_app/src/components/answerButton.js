import React from 'react';
import styled from 'styled-components';
import palette from '../theme/colors';

const AnswerButton = ({title, id, onClick}) => {
    return(
        <Button key={id} onClick={onClick}>{title}</Button>
    )
}

const Button = styled.button`
    width: 80%;
    min-height: 50px;
    background-color: ${palette.cyan};
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border: none;
    padding: 10px;
    color: ${palette.white}
`

export default AnswerButton;