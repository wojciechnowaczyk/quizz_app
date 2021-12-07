import React, {useState, useEffect} from 'react';
import DashboardLayout from '../../../components/dashboardLayout';
import { useParams } from 'react-router-dom';
import DashboardTitle from '../../../components/dashboardTitle';
import Question from './components/question';

const UserPage = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState();
    const fetchUserData = () => {
        fetch(`http://localhost:3002/dashboard/user/${userId}`, {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "GET", mode: "cors"})
        .then(response => response.json())
        .then(data =>setUserData(data.user))
        .catch(err => console.log("error:" +err))
    }
    useEffect(() => {
        fetchUserData();
    },[])

    const displayAnswers = () => {
        if(userData && userData.questions.length > 0){
            return userData.questions.map(question => {
                return <Question userQuestion={question}/>
            })
        }
    }

    return (
        <DashboardLayout>
            <DashboardTitle title={`${userData?.name} ${userData?.surname}`}/>
            <p>login: {userData?.login}</p>
            <p>points: {userData?.correctAmount}/{userData?.totalAmount}</p>
            <DashboardTitle title="Answers"/>
            {displayAnswers()}
        </DashboardLayout>
    )
}

export default UserPage;