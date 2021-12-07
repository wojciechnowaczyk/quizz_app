import React from 'react';
import styled from 'styled-components';
import palette from '../../../../theme/colors';

const Question = ({userQuestion}) => {
    return(
        <Box>
            <TimerRow>
                <Time>Time left: {userQuestion.timeLeft}s</Time>
            </TimerRow>
            <QuestionTitle>{userQuestion?.question}</QuestionTitle>
            {userQuestion?.answers.map(answer => {
                const isCorrect = answer.id === userQuestion.rightAnswerId;
                const isIncorrect = userQuestion.rightAnswerId !== userQuestion.userAnswer && userQuestion.userAnswer === answer.id
                return <Answer isCorrect={isCorrect} isIncorrect={isIncorrect}>{answer?.answer}</Answer>
            })}
        </Box>
    )
}

const QuestionTitle = styled.p`
    font-family: 'Montserrat';
    font-size: 20px;
    color: ${palette.maryBlue}
`

const Box = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    background-color: ${palette.white};
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 20px;
    flex-direction: column;
    box-sizing: border-box;
`

const TimerRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
`
const Time = styled.p`
    font-size: 25px;
    font-family: 'Montserrat';
    margin-block-start: 0;
    margin-block-end: 0;
`

const Answer = styled.div`
    min-height: 50px;
    border: 1px solid ${props => props.isCorrect || props.isIncorrect ?  'none' : 'black'};
    background-color: ${props => props.isCorrect ? 'green' : props.isIncorrect ? 'red' : 'transparent'};
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
`

export default Question;