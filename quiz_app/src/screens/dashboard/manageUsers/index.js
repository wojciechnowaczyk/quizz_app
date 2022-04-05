import React from "react";
import DashboardLayout from "../../../components/dashboardLayout";
import AddUserForm from "./components/addUserForm";
import UsersList from "./components/usersList";
import DashboardTitle from "../../../components/dashboardTitle";

const ManageUsersScreen = () => {
  return (
    <DashboardLayout>
      <DashboardTitle title="Manage users" />
      <UsersList />
      <DashboardTitle title="Add a new user" />
      <AddUserForm />
    </DashboardLayout>
  );
};

export default ManageUsersScreen;
