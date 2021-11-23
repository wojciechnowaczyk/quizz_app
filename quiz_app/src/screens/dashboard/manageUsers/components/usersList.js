import React, {useEffect} from 'react';


const UsersList = ({usersList, setUsersList}) => {
    const displayList = () => {
        if(usersList.length >0){
            return(
                <>
                    {usersList.map(user => {
                        return(
                            <div key={user._id}>
                                <p >{user?.login}</p>
                                {/* <Button onPress={()=>deleteQuestion(question._id)} title="Delete"/> */}
                            </div>
                        )
                    })}
                </>
            )
        }
    }
    useEffect(()=>{
        fetchQuestionsToDisplay();
    },[])

    const fetchQuestionsToDisplay = () => {
        fetch('http://localhost:3002/dashboard/users', {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "GET", mode: "cors"})
        .then(response => response.json())
        .then(data =>setUsersList(data.users))
        .catch(err => console.log("error:" +err))
    }
    return(
        <>
            <p>Users List</p>
            {displayList()}
        </>
    )
}

export default UsersList;