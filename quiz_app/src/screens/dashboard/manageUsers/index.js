import React, { useState } from "react";
import DashboardLayout from "../../../components/dashboardLayout";
import AddUserForm from "./components/addUserForm";
import UsersList from "./components/usersList";
import DashboardTitle from "../../../components/dashboardTitle";

const ManageUsersScreen = () => {
  const [usersList, setUsersList] = useState([]);
  return (
    <DashboardLayout>
      <DashboardTitle title="Manage users" />
      <UsersList usersList={usersList} setUsersList={setUsersList} />
      <DashboardTitle title="Add a new user" />
      <AddUserForm usersList={usersList} setUsersList={setUsersList} />
    </DashboardLayout>
  );
};

export default ManageUsersScreen;
