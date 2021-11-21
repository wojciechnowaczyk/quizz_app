import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/dashboardLayout';

const Dashboard = () =>{
    return(
        <DashboardLayout>
            <p>Dashboard</p>
            <Link to="./quizzes">Manage Quizzes</Link>
            <Link to="./users">Manage Useres</Link>
            <Link to="./add-new-question">Add new question</Link>
        </DashboardLayout>
    )
}

export default Dashboard;