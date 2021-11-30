import React from 'react';
import styled from 'styled-components';
import Logotype from '../../assets/img/logo_expansio.png';

import palette from '../../theme/colors';
import Question from './components/questions';

const  MainScreen = () => {
    return (
        <MainBox>
            <Logo src={Logotype}/>
            <InnerBox>
                <Question />
            </InnerBox>
        </MainBox>
    )
}

const MainBox = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(2,0,36);
    background: ${palette.background}; 
    display: flex;
    align-items: center;
    justify-content: center;
`

const InnerBox = styled.div`
    width: 900px;
    min-height: 400px;
    background-color: rgba(0,0,0,0.6);
    border-radius: 20px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
`
const Logo = styled.img`
    width: 200px;
    position: absolute;
    top: 20px;
    left: 20px;
`
export default MainScreen;