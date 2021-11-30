import React from 'react';
import styled from 'styled-components';
import palette from '../theme/colors';

const InformationBox = ({title}) => {
    return(
        <Box>
            <Text>{title}</Text>
        </Box>
    )
}

const Box = styled.div`
    width: 400px;
    height: 200px;
    background-color: rgba(0,0,0,0.6);
    border-radius: 20px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.p`
    font-family: 'Montserrat';
    font-size: 20px;
    color: ${palette.white};
    text-align: center;
`

export default InformationBox;