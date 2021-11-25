import React, {useEffect} from 'react';
import Button from '../../../../components/button';


const UsersList = ({usersList, setUsersList}) => {
    const displayList = () => {
        if(usersList.length >0){
            return(
                <>
                    {usersList.map(user => {
                        return(
                            <div key={user._id}>
                                <p >{user?.login}</p>
                                <p >{user?.code}</p>
                                <Button onPress={()=>deleteUser(user._id)} title="Delete"/>
                            </div>
                        )
                    })}
                </>
            )
        }
    }

    const deleteUser = (id) => {
        console.log(id);
        fetch(`http://localhost:3002/dashboard/users/${id}`, {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "DELETE", mode: "cors"})
        .then(response => response.json())
        .then(res => {
            const index = usersList.findIndex(el => el._id === res._id);
            const newArr1 = usersList.slice(0, index);
            const newArr2 = usersList.slice(index+1);
            const newArr = newArr1.concat(newArr2);
            setUsersList(newArr);
        })
        .catch(err => console.log("error:" +err))
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
            {displayList()}
        </>
    )
}

export default UsersList;