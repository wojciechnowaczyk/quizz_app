import React from 'react';
import DashboardLayout from '../../../components/dashboardLayout';
import AddUserForm from './components/addUserForm';

const ManageUsersScreen = () =>{
    return(
        <DashboardLayout>
            <p>Add New User</p>
            <AddUserForm />
        </DashboardLayout>
    )
}

export default ManageUsersScreen;