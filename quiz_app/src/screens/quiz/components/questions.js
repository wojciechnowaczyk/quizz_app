import React, {useEffect, useContext, useState} from 'react';
import styled from 'styled-components';
import { userContext } from '../../../contexts/userContext';
import AnswerButton from '../../../components/answerButton';
import palette from '../../../theme/colors';
import InformationBox from '../../../components/informationBox';

const Question = () => {
    const user = useContext(userContext);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const fetchQuestion = (answerId) => {
        fetch('http://localhost:3002/getQuestion', {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "POST", mode: "cors", body: JSON.stringify({userId: user.userId, answerId: answerId, questionId: currentQuestion?._id, timeLeft: currentQuestion?.time})})
        .then(response => response.json())
        .then(res => setCurrentQuestion(res.question))
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        fetchQuestion()
    },[])

    const displayAnswers = () => {
        if(currentQuestion?.answers && currentQuestion.answers.length > 0){
            return currentQuestion.answers.map(answer => {
                return (
                    <AnswerButton title={answer?.answer} onClick={() => fetchQuestion(answer?.id)} id={answer?.id}/>
                )
            })
        }
    }
    return(
        <>
            {currentQuestion === null && (
                <Box>
                    <InformationBox title="You have answered to all of the questions. Thank you!"/>
                </Box>
            )}
            {currentQuestion && (
                <>
                    <QuestionTitle>{currentQuestion?.question}</QuestionTitle>
                    {displayAnswers()}
                </>
            )}
        </>
    )
}

const QuestionTitle = styled.p`
    font-family: 'Montserrat';
    font-size: 20px;
    color: ${palette.pippin}
`

const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Question;