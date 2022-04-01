import React, { useState, useEffect } from "react";
import DashboardLayout from "../../../components/dashboardLayout";
import Button from "../../../components/button";
import DashboardTitle from "../../../components/dashboardTitle";
import QuestionsList from "./components/questionsList";
import InputWithLabel from "../../../components/inputWithLabel";
import TextareaWithLabel from "../../../components/textareaWithLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import styled from "styled-components";

const ManageQuestionsScreen = () => {
  useEffect(() => {
    fetchQuestionsToDisplay();
  }, []);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [rightAnswerId, setRightAnswerId] = useState(null);
  const [time, setTime] = useState(0);
  const [questionsToDisplay, setQuestionsToDisplay] = useState([]);
  const handleSetQuestion = (event) => {
    setQuestion(event.target.value);
    event.preventDefault();
  };
  const handleSetAnswer = (id, event) => {
    if (answers.some((el) => el.id === id)) {
      const answerIndex = answers.findIndex((el) => el.id === id);
      const obj = { id: id, answer: event };
      const newAnswersArray1 = answers.slice(0, answerIndex);
      const newArray2 = answers.slice(answerIndex + 1);
      const newAnswersArray = newAnswersArray1.concat(newArray2);
      newAnswersArray.push(obj);
      setAnswers(newAnswersArray);
    } else {
      const obj = { id: id, answer: event };
      setAnswers(answers.concat(obj));
    }
  };

  const handleRadioButton = (event) => {
    console.log(event.target.value);
    setRightAnswerId(event.target.value);
  };
  const fetchQuestionsToDisplay = () => {
    fetch("http://localhost:3002/dashboard/questions", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setQuestionsToDisplay(data.questions))
      .catch((err) => console.log("error:" + err));
  };

  const deleteQuestion = (id) => {
    fetch(`http://localhost:3002/dashboard/questions/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "DELETE",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((res) => {
        const index = questionsToDisplay.findIndex((el) => el._id === res._id);
        const newArr1 = questionsToDisplay.slice(0, index);
        const newArr2 = questionsToDisplay.slice(index + 1);
        const newArr = newArr1.concat(newArr2);
        setQuestionsToDisplay(newArr);
      })
      .catch((err) => console.log("error:" + err));
  };

  const handleSaveData = () => {
    const objectToSend = {
      date: new Date(),
      question: question,
      answers: answers,
      rightAnswerId: rightAnswerId,
      time: time,
    };
    fetch("http://localhost:3002/addQuestion", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify(objectToSend),
    })
      .then((response) => response.json())
      .then((res) =>
        setQuestionsToDisplay(
          questionsToDisplay.concat([{ _id: res.id, ...objectToSend }])
        )
      )
      .catch((err) => console.log("error:" + err));
  };

  return (
    <DashboardLayout>
      <DashboardTitle title="Add a new question" />
      <TextField
        id="outlined-multiline-flexible"
        name="question"
        value={question}
        onChange={handleSetQuestion}
        placeholder="Type a new question"
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <Row>
        <InputWithLabel
          id="answer1"
          name="answer1"
          onChange={(e) => handleSetAnswer("answer1", e)}
          placeholder="Type first answer"
        />
        <Radio
          type="radio"
          id="answer1Radio"
          name="answer1Radio"
          value="answer1"
          onChange={handleRadioButton}
          checked={rightAnswerId === "answer1"}
        />
      </Row>
      <Row>
        <InputWithLabel
          id="answer2"
          name="answer1"
          onChange={(e) => handleSetAnswer("answer2", e)}
          placeholder="Type second answer"
        />
        <Radio
          type="radio"
          id="answer1Radio"
          name="answer1Radio"
          value="answer2"
          onChange={handleRadioButton}
          checked={rightAnswerId === "answer2"}
        />
      </Row>{" "}
      <Row>
        <InputWithLabel
          id="answer3"
          name="answer1"
          onChange={(e) => handleSetAnswer("answer3", e)}
          placeholder="Type third answer"
        />
        <Radio
          type="radio"
          id="answer1Radio"
          name="answer1Radio"
          value="answer3"
          onChange={handleRadioButton}
          checked={rightAnswerId === "answer3"}
        />
      </Row>{" "}
      <Row>
        <InputWithLabel
          id="answer4"
          name="answer1"
          onChange={(e) => handleSetAnswer("answer4", e)}
          placeholder="Type fourth answer"
        />
        <Radio
          type="radio"
          id="answer1Radio"
          name="answer1Radio"
          value="answer4"
          onChange={handleRadioButton}
          checked={rightAnswerId === "answer4"}
        />
      </Row>
      <InputWithLabel
        id="time"
        name="time"
        onChange={setTime}
        placeholder="Time for answer (in seconds)"
      />
      <br />
      <Button
        onPress={handleSaveData}
        title="Save"
        styles={{ marginTop: "20px" }}
      />
      <DashboardTitle title="Manage questions" />
      <QuestionsList
        deleteQuestion={deleteQuestion}
        questionsToDisplay={questionsToDisplay}
      />
    </DashboardLayout>
  );
};

export default ManageQuestionsScreen;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
