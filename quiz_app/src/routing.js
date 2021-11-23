import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './screens/dashboard';
import MainScreen from './screens/mainScreen';
import ManageUsersScreen from './screens/dashboard/manageUsers';
import SeeFulffiledQuizzesScreen from './screens/seeFulfilledQuizzesScreen';
import AddNewQuestionScreen from './screens/addNewQuestionScreen';

function Navigation() {
    return (
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<ManageUsersScreen />} />
          <Route path="/dashboard/quizzes" element={<SeeFulffiledQuizzesScreen />} />
          <Route path="/dashboard/add-new-question" element={<AddNewQuestionScreen />} />
        </Routes>
    );
  }

  export default Navigation;