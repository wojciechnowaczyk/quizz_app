import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './screens/dashboard';
import MainScreen from './screens/quiz';
import ManageUsersScreen from './screens/dashboard/manageUsers';
import ManageQuestionsScreen from './screens/dashboard/manageQuestions';
import UserPage from './screens/dashboard/userPage';

function Navigation() {
    return (
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<ManageUsersScreen />} />
          <Route path="/dashboard/quizzes" element={<ManageQuestionsScreen />} />
          <Route path="/dashboard/user/:userId" element={<UserPage/>}/>
        </Routes>
    );
  }

  export default Navigation;