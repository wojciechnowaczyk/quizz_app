import React from 'react';
import styled from 'styled-components';
import Logotype from '../assets/img/logo_expansio.png';
import RightArrow from '../assets/img/right-arrow.png';

const  MainScreen = () => {
    const handleArrowClick = () => {
        console.log('arrow click');
    }
    return (
        <MainBox>
            <Logo src={Logotype}/>
            <InnerBox>
                <Arrow onClick={()=>handleArrowClick()}>
                    <img src={RightArrow} alt=""></img>
                </Arrow>
            </InnerBox>
        </MainBox>
    )
}

const MainBox = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(2,0,36);
    background: linear-gradient(312deg, rgba(2,0,36,1) 0%, rgba(0,218,191,1) 70%); 
    display: flex;
    align-items: center;
    justify-content: center;
`

const InnerBox = styled.div`
    width: 800px;
    height: 400px;
    background-color: rgb(44,40,56);
    border-radius: 20px;
    position: relative;
`
const Logo = styled.img`
    width: 200px;
    position: absolute;
    top: 20px;
    left: 20px;
`
const Arrow = styled.div`
    position: absolute;
    right: 30px;
    bottom: 10px;
    cursor: pointer;
`
export default MainScreen;