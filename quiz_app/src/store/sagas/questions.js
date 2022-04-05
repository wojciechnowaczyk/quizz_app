import {
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
  take,
} from "redux-saga/effects";
import * as actions from "../actions/questions";
import * as api from "../../api/questions";

function* getQuestions() {
  try {
    const result = yield call(api.getQuestions);
    console.log(result);
    yield put(
      actions.getQuestionsSuccess({
        items: result.data.questions,
      })
    );
  } catch (e) {}
}

function* watchGetQuestionsRequest() {
  yield takeEvery(actions.Types.GET_QUESTIONS_REQUEST, getQuestions);
}

function* createQuestion(action) {
  console.log("create");
  try {
    yield call(api.createQuestion, {
      date: action.payload.date,
      question: action.payload.question,
      answers: action.payload.answers,
      rightAnswerId: action.payload.rightAnswerId,
      time: action.payload.time,
    });
    yield call(getQuestions);
  } catch (e) {}
}
function* deleteQuestion({ questionId }) {
  try {
    yield call(api.deleteQuestion, questionId);
    yield call(getQuestions);
  } catch (e) {}
}

function* watchDeleteQuestionRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_QUESTION_REQUEST);
    yield call(deleteQuestion, { questionId: action.payload.questionId });
  }
}

function* watchCreateQuestionRequest() {
  yield takeLatest(actions.Types.CREATE_QUESTION_REQUEST, createQuestion);
}

const questionsSagas = [
  fork(watchGetQuestionsRequest),
  fork(watchCreateQuestionRequest),
  fork(watchDeleteQuestionRequest),
];

export default questionsSagas;
