import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () =>{
    return(
        <>
            <p>Dashboard</p>
            <Link to="./quizzes">Manage Quizzes</Link>
            <Link to="./users">Manage Useres</Link>
            <Link to="./add-new-question">Add new question</Link>
        </>
    )
}

export default Dashboard;