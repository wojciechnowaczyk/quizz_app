import {
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
  take,
} from "redux-saga/effects";
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
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occured while trying to get the users",
      })
    );
  }
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
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occured while trying to create a user",
      })
    );
  }
}
function* deleteUser({ userId }) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occured while trying to delete a user",
      })
    );
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, { userId: action.payload.userId });
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default userSagas;
