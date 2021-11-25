import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './screens/dashboard';
import MainScreen from './screens/mainScreen';
import ManageUsersScreen from './screens/dashboard/manageUsers';
import ManageQuestionsScreen from './screens/dashboard/manageQuestions';

function Navigation() {
    return (
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<ManageUsersScreen />} />
          <Route path="/dashboard/quizzes" element={<ManageQuestionsScreen />} />
        </Routes>
    );
  }

  export default Navigation;