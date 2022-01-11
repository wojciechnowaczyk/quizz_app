import React from 'react';
import DashboardLayout from '../components/dashboardLayout';
import DashboardTitle from '../components/dashboardTitle';
import ListOfFullfilledQuizzes from './dashboard/listOfFullfilledQuizzes';

const Dashboard = () =>{
    return(                   
        <DashboardLayout>
            <DashboardTitle title="Fullfield Quizzes" />
            <ListOfFullfilledQuizzes />
        </DashboardLayout>
    )
}
export default Dashboard;