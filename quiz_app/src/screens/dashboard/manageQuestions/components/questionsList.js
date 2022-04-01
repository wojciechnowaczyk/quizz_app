import React from "react";
import styled from "styled-components";
import Button from "../../../../components/button";
import palette from "../../../../theme/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import questionsMocks from "../../../../mocks/questionsList.json";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const QuestionsList = ({ deleteQuestion, questionsToDisplay }) => {
  console.log(questionsMocks);
  const displayQuestions = () => {
    if (questionsMocks.length > 0) {
      return (
        <>
          {questionsMocks.map((question) => {
            return (
              <Box key={question?._id}>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  margin={4}
                >
                  {question?.question}
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                  Time: {question?.time}s
                </Typography>
                {question?.answers.map((answer) => {
                  return (
                    <Box
                      fullWidth
                      sx={{
                        margin: 2,
                        p: 2,
                        border:
                          answer?.id === question?.rightAnswerId
                            ? "1px solid green"
                            : "1px dashed grey",
                      }}
                    >
                      {answer?.answer}
                      <br />
                    </Box>
                  );
                })}
                <Button
                  onPress={() => deleteQuestion(question._id)}
                  title="Delete Question"
                  styles={{ marginTop: "20px" }}
                />
              </Box>
            );
          })}
        </>
      );
    }
  };
  return <Box>{displayQuestions()}</Box>;
};

const Label = styled.div`
  width: ${(props) => props.width}px;
  height: 20px;
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: ${palette.matisse};
  & > svg {
    margin-right: 15px;
  }
  margin-bottom: 20px;
`;

export default QuestionsList;
