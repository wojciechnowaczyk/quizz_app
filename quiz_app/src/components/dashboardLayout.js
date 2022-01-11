import React from 'react';
import SideBar from './sideBar';
import styled from 'styled-components';
import palette from "../theme/colors";

const DashboardLayout = ({children}) => {
    return(
        <>
            <SideBar/>
            <OuterBox>
                <BodyContainer>
                    <ContentBox>
                        {children}
                    </ContentBox>
                </BodyContainer>
            </OuterBox>
        </>
    )
}


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

const OuterBox = styled.div`
    margin-left: 250px;
`
export default DashboardLayout;
