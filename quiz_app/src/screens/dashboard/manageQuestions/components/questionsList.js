import React from "react";
import Button from "../../../../components/button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const QuestionsList = ({ deleteQuestion, questionsToDisplay }) => {
  const displayQuestions = () => {
    if (questionsToDisplay.length > 0) {
      return (
        <>
          {questionsToDisplay.map((question) => {
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

export default QuestionsList;
