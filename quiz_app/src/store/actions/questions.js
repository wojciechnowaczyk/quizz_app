export const Types = {
  GET_QUESTIONS_REQUEST: "questions/get_questions_request",
  GET_QUESTIONS_SUCCESS: "questions/get_questions_success",
  CREATE_QUESTION_REQUEST: "questions/create_question_request",
  DELETE_QUESTION_REQUEST: "questions/delete_question_request",
};

export const getQuestionsRequest = () => ({
  type: Types.GET_QUESTIONS_REQUEST,
});

export const getQuestionsSuccess = ({ items }) => ({
  type: Types.GET_QUESTIONS_SUCCESS,
  payload: {
    items,
  },
});

export const createQuestionRequest = ({
  date,
  question,
  answers,
  rightAnswerId,
  time,
}) => ({
  type: Types.CREATE_QUESTION_REQUEST,
  payload: {
    date: date,
    question: question,
    answers: answers,
    rightAnswerId: rightAnswerId,
    time: time,
  },
});

export const deleteQuestionRequest = ({ questionId }) => ({
  type: Types.DELETE_QUESTION_REQUEST,
  payload: {
    questionId,
  },
});
