import React from 'react';
import styled from 'styled-components';
import palette from "../theme/colors";
import Button from './button';

import LogotypeImg from '../assets/img/logo_expansio.png';

const DashboardLayout = ({children}) => {
    return(
        <div>
            <MainContainer>
                <Logotype src={LogotypeImg}/>
                <Button title="Logout" />
            </MainContainer>
            <BodyContainer>
                <ContentBox>
                    {children}
                </ContentBox>
            </BodyContainer>
        </div>
    )
}

const MainContainer = styled.div`
    width: 90%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
`

const Logotype = styled.img`
    width: 200px;
`

const BodyContainer  = styled.div`
    width: 80%;
    min-height: 85vh;
    background: ${palette.background}; 
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 5%;
    display: flex;
    justify-content: center;
`

const ContentBox = styled.div`
    background-color: rgba(0,0,0,0.6);
    width: 90%;
    height: fit-content;
    padding: 5%;
    border-radius: 50px;
`
export default DashboardLayout;
