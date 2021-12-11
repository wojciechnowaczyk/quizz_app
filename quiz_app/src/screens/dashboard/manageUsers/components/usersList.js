import React, {useEffect} from 'react';
import Button from '../../../../components/button';
import styled from 'styled-components';
import palette from '../../../../theme/colors';


const UsersList = ({usersList, setUsersList}) => {
    const displayList = () => {
        if(usersList.length >0){
            return(
                <>
                    {usersList.map(user => {
                        return(
                            <UserRow key={user._id}>
                                <Field width={400}>{user?.login}</Field>
                                <Field width={200}>{user?.name}</Field>
                                <Field width={200}>{user?.surname}</Field>
                                <Button onPress={()=>deleteUser(user._id)} title="Delete"/>
                            </UserRow>
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
        <Box>
            <UserRow>
                <Label width={400}>Login</Label>
                <Label width={200}>Name</Label>
                <Label width={200}>Surname</Label>
            </UserRow>
            {displayList()}
        </Box>
    )
}

const Box = styled.div`
    background-color: ${palette.white};
    width: 90%;
    padding: 5%;
    border-radius: 20px;
`

const UserRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid ${palette.cyan}
`

const Label = styled.div`
    width: ${props => props.width}px;
    height: 20px;
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 17px;
`

const Field = styled.div`
    width: ${props => props.width}px;
    height: 20px;
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 17px;
`

export default UsersList;