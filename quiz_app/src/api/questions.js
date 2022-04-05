import axios from "axios";

export const getQuestions = () => {
  return axios.get("/dashboard/questions", {
    params: {
      limit: 1000,
    },
  });
};

export const createQuestion = ({
  date,
  question,
  answers,
  rightAnswerId,
  time,
}) => {
  return axios.post("/dashboard/addQuestion", {
    date: date,
    question: question,
    answers: answers,
    rightAnswerId: rightAnswerId,
    time: time,
  });
};

export const deleteQuestion = (questionId) => {
  return axios.delete(`/dashboard/questions/${questionId}`);
};
