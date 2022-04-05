import { takeEvery, takeLatest, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../../api/users";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(
      actions.getUsersSuccess({
        items: result.data.users,
      })
    );
  } catch (e) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* createUser(action) {
  try {
    yield call(api.createUser, {
      date: action.payload.date,
      login: action.payload.login,
      name: action.payload.name,
      surname: action.payload.surname,
    });
  } catch (e) {}
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const userSagas = [fork(watchGetUsersRequest), fork(watchCreateUserRequest)];

export default userSagas;
