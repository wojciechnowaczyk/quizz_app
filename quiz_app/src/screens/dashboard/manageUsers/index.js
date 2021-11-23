import React, {useState} from 'react';
import DashboardLayout from '../../../components/dashboardLayout';
import AddUserForm from './components/addUserForm';
import UsersList from './components/usersList';

const ManageUsersScreen = () =>{
    const [usersList, setUsersList] = useState([]);
    return(
        <DashboardLayout>
            <p>Add New User</p>
            <AddUserForm usersList={usersList} setUsersList={setUsersList}/>
            <UsersList usersList={usersList} setUsersList={setUsersList}/>
        </DashboardLayout>
    )
}

export default ManageUsersScreen;