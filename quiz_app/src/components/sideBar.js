import React from 'react';
import styled from 'styled-components';
import LogotypeImg from '../assets/img/logo_expansio.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faUsers, faQuestion, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
    return (
        <NavCol>
            <Logotype src={LogotypeImg} />
            <NavButton href="/dashboard"><FontAwesomeIcon icon={faChartLine} style={{marginRight: '15px'}}/>Dashboard</NavButton>
            <NavButton href="/dashboard/users"><FontAwesomeIcon icon={faUsers} style={{marginRight: '15px'}}/>Users</NavButton>
            <NavButton href="/dashboard/quizzes"><FontAwesomeIcon icon={faQuestion} style={{marginRight: '15px'}}/>Questions</NavButton>
            <FontAwesomeIcon icon={faSignOutAlt}/>
        </NavCol>
    )
}

const NavCol = styled.div`
    height: 100vh;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 0px 40px 0px;
`

const Logotype = styled.img`
    width: 150px;
    margin-bottom: 25px;
`

const NavButton = styled.a`
    color: #3d5a80;
    background-color: white;
    height: 100px;
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 22px;
    cursor: pointer;
    &:hover {
        background-color: #3d5a80;
        color: #e0fbfc;
      }
    &:active {
        background-color: #3d5a80;
        color: #e0fbfc;
    }
    
`

export default SideBar;