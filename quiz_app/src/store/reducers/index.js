import { combineReducers } from "redux";
import UsersReducer from "./users";
import QuestionsReducer from "./questions";

export default combineReducers({
  users: UsersReducer,
  questions: QuestionsReducer,
});
