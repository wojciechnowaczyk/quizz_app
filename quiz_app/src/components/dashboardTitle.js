import React from 'react';
import styled from 'styled-components';
import palette from '../theme/colors';

const DashboardTitle = ({title}) => {
    return(
        <Title>{title}</Title>
    )
}

const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    color: ${palette.cyan}
`

export default DashboardTitle;