import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import palette from '../../../theme/colors';
import Button from '../../../components/button';

const ListOfFullfilledQuizzes = () => {
    const [listOfQuizzes, setListOfQuizzes] = useState([])
    const fetchListOfQuizzes = () => {
        fetch('http://localhost:3002/dashboard/fullfilledQuizzes', {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "GET", mode: "cors"})
        .then(response => response.json())
        .then(data =>setListOfQuizzes(data.quizzes))
        .catch(err => console.log("error:" +err))
    }
    useEffect(()=>{
        fetchListOfQuizzes();
    },[])

    const displayListOfQuizzes = () => {
        console.log(listOfQuizzes);
        if(listOfQuizzes.length > 0){
            return listOfQuizzes.map((quiz) => {
                console.log(quiz);
                return (
                    <UserRow key={quiz.userId}>
                        <Field width={100}>{quiz.login}</Field>
                        <Field width={100}>-</Field>
                        <Field width={100}>-</Field>
                        <Field width={300}>{quiz.correctAmount}/{quiz.totalAmount}</Field>
                        <Field width={100}>
                            <Button title="See more" />
                        </Field>
                    </UserRow>
                )
            })
        }
    }
    return(
        <Box>
            <UserRow>
                <Label width={100}>Login</Label>
                <Label width={100}>Name</Label>
                <Label width={100}>Surname</Label>
                <Label width={300}>Correct Answers / Total Answers</Label>
                <Label width={100}/>
            </UserRow>
            {displayListOfQuizzes()}
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
    justify-content: center;
`

const Field = styled.div`
    width: ${props => props.width}px;
    height: 20px;
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 17px;
    justify-content: center;
`

export default ListOfFullfilledQuizzes;