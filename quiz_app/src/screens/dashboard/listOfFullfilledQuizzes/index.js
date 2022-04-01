import React, { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../../theme/colors";
import Button from "../../../components/button";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const ListOfFullfilledQuizzes = () => {
  const [listOfQuizzes, setListOfQuizzes] = useState([]);
  const fetchListOfQuizzes = () => {
    fetch("http://localhost:3002/dashboard/fullfilledQuizzes", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setListOfQuizzes(data.quizzes))
      .catch((err) => console.log("error:" + err));
  };
  useEffect(() => {
    fetchListOfQuizzes();
  }, []);

  const displayListOfQuizzes = () => {
    console.log(listOfQuizzes);
    if (listOfQuizzes.length > 0) {
      return listOfQuizzes.map((quiz) => {
        console.log(quiz);
        return (
          <Box sx={styles.userRow} key={quiz.userId}>
            <Field width={100}>{quiz.login}</Field>
            <Field width={100}>-</Field>
            <Field width={100}>-</Field>
            <Field width={300}>
              {quiz.correctAmount}/{quiz.totalAmount}
            </Field>
            <Field width={100}>
              <Button>
                <Link to={`/dashboard/user=${quiz.userId}`}>See More</Link>
              </Button>
            </Field>
          </Box>
        );
      });
    }
  };
  return (
    <Box sx={styles.box}>
      <Box sx={styles.userRow}>
        <Label width={100}>Login</Label>
        <Label width={100}>Name</Label>
        <Label width={100}>Surname</Label>
        <Label width={300}>Correct Answers / Total Answers</Label>
        <Label width={100} />
      </Box>
      {displayListOfQuizzes()}
    </Box>
  );
};
const styles = {
  box: {
    width: "90%",
    padding: "5%",
    borderRadius: "20px",
  },
  userRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: "20px",
    alignItems: "center",
    paddingBottom: "20px",
    borderBottom: `2px solid`,
    borderColor: "primary.main",
  },
};

const Label = styled.div`
  width: ${(props) => props.width}px;
  height: 20px;
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 17px;
  justify-content: center;
`;

const Field = styled.div`
  width: ${(props) => props.width}px;
  height: 20px;
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 17px;
  justify-content: center;
`;

export default ListOfFullfilledQuizzes;
