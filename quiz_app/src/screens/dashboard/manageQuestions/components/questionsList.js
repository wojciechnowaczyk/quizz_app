import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/button';
import palette from '../../../../theme/colors';

const QuestionsList = ({deleteQuestion, questionsToDisplay}) => {
    const displayQuestions = () => {
        if(questionsToDisplay.length >0){
            return(
                <>
                    {questionsToDisplay.map(question => {
                        return(
                            <QuestionBox key={question._id}>
                                <Label>Question: {question?.question}</Label>
                                <Label>Answers:</Label> {question?.answers.map((answer) => {
                                    return (
                                        <Answer correct={answer?.id === question?.rightAnswerId}>{answer?.answer}<br/></Answer>
                                    )
                                })}
                                <Label>Time: {question?.time}s</Label>
                                <Button onPress={()=>deleteQuestion(question._id)} title="Delete Question"/>
                            </QuestionBox>
                        )
                    })}
                </>
            )
        }
    }
    return(
        <Box>
            {displayQuestions()}
        </Box>
    )
}

const Box = styled.div`
    background-color: ${palette.white};
    width: 95%;
    padding: 2.5%;
    border-radius: 20px;
`

const QuestionBox = styled.div`
    border-radius: 20px;
    border: 1px solid ${palette.cyan};
    padding: 30px;
    box-sizing: border-box;
    margin-bottom: 30px;
`

const Answer = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    height: 20px;
    font-family: "Lato";
    padding:10px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: ${props => props.correct ? "green" : palette.white}
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

export default QuestionsList;