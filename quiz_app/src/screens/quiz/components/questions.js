import React, {useEffect, useContext, useState} from 'react';
import styled from 'styled-components';
import AnswerButton from '../../../components/answerButton';
import palette from '../../../theme/colors';
import InformationBox from '../../../components/informationBox';
import Timer from '../../../components/timer';
import { UserContext } from '../../../contexts/userContext';

const Question = () => {
    const user = useContext(UserContext)
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [timeLeft, setTimeLeft] = useState(0);
    const fetchQuestion = (answerId) => {
        fetch('http://localhost:3002/getQuestion', {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "POST", mode: "cors", body: JSON.stringify({userId: user.userId, answerId: answerId, questionId: currentQuestion._id, timeLeft: timeLeft})})
        .then(response => response.json())
        .then(res => {
            setCurrentQuestion(res.question);
            setTimeLeft(res.question.time);
        })
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        if(user.userId){
            fetchQuestion()
        }
    },[user.userId])
    //to uncomment when release
    // useEffect(() => {
    //     if(timeLeft === 0){
    //         fetchQuestion('none');
    //     }
    // },[timeLeft])

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
                    <TimerRow>
                        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
                    </TimerRow>
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

const TimerRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
`

export default Question;