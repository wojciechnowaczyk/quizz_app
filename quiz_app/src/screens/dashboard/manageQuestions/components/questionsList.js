import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/button';
import palette from '../../../../theme/colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock} from "@fortawesome/free-solid-svg-icons";
import questionsMocks from '../../../../mocks/questionsList.json';

const QuestionsList = ({deleteQuestion, questionsToDisplay}) => {
    console.log(questionsMocks);
    const displayQuestions = () => {
        if(questionsMocks.length >0){
            return(
                <>
                    {questionsMocks.map(question => {
                        console.log(question);
                        console.log(question._id);
                        console.log(question.question);
                        console.log(question.answers);
                        return(
                            <QuestionBox key={question?._id}>
                                <QuestionHeader>{question?.question}</QuestionHeader>
                                <Label>
                                    <FontAwesomeIcon icon={faClock}/>
                                    Time: {question?.time}s
                                </Label>
                                {question?.answers.map((answer) => {
                                    return (
                                        <Answer correct={answer?.id === question?.rightAnswerId}>{answer?.answer}<br/></Answer>
                                    )
                                })}
                                <Button onPress={()=>deleteQuestion(question._id)} title="Delete Question" styles={{marginTop: '20px'}}/>
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
    border-radius: 20px;
    margin-top: 60px;
`

const QuestionBox = styled.div`
    border-radius: 20px;
    box-sizing: border-box;
    margin-bottom: 140px;
`

const Answer = styled.div`
    border: 1px solid ${palette.matisse};
    color: ${palette.matisse};
    border-radius: 20px;
    height: 20px;
    font-family: "Lato";
    font-weight: bold;
    padding:10px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: ${props => props.correct ? palette.shadowLime : palette.white}
`


const Label = styled.div`
    width: ${props => props.width}px;
    height: 20px;
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: ${palette.matisse};
    & > svg {
        margin-right: 15px;
    };
    margin-bottom: 20px;
`

const QuestionHeader = styled.h2`
    width: 100%;
    margin-bottom: 25px;
    border-bottom: 2px solid ${palette.bondiBlue};
    padding-bottom: 5px;
    color: ${palette.matisse}
`

export default QuestionsList;