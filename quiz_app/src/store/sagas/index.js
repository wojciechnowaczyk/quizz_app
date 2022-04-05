import UserSagas from "./users";
import QuestionsSagas from "./questions";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...UserSagas, ...QuestionsSagas]);
}
