import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/dashboardLayout';
import DashboardTitle from '../components/dashboardTitle';
import ListOfFullfilledQuizzes from './dashboard/listOfFullfilledQuizzes';
import styled from 'styled-components';
import palette from '../theme/colors';

const Dashboard = () =>{
    return(
        <DashboardLayout>
            <DashboardTitle title="Dashboard" />
            <ButtonsRow>
                <Tile>
                    <Link style={StyledLink} to="./users">Manage useres</Link>
                </Tile>
                <Tile>
                    <Link style={StyledLink} to="./quizzes">Manage questions</Link>
                </Tile>
            </ButtonsRow>
            <DashboardTitle title="Fullfield Quizzes" />
            <ListOfFullfilledQuizzes />
        </DashboardLayout>
    )
}

const Tile = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 20px;
    background-color: ${palette.cyan};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-right: 15px;
    box-sizing: border-box
`

const StyledLink = {
    "text-decoration":"none",
    "text-align":"center",
    "font-family": "'Lato', sans-serif",
    "font-weight": "bold",
    "color":`${palette.white}`,
    "text-transform": "uppercase"
}

const ButtonsRow = styled.div`
    display: flex;
    flex-direction: row;
`
export default Dashboard;