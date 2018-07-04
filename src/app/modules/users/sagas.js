import { put, takeLatest } from 'redux-saga/effects';
import {
  setUsersGetting,
  getUsersSuccess,
  getUsersError,
} from './actions';
import {
  USERS_GET,
  USERS_SET_ERROR_MESSAGE,
  USERS_GET_ERROR,
} from './constants';

export function* getUsers({ payload: { page = 1 } }) {
  try {
    yield put(setUsersGetting(true));

    const response = yield fetch(`https://reqres.in/api/users?per_page=10&page=${page}`);
    const data = yield response.json();

    yield put(getUsersSuccess(data));
  } catch(e) {
    yield put(getUsersError(e));
  } finally {
    yield put(setUsersGetting(false));
  }
}

export function* getUsersWatcher() {
  yield takeLatest(USERS_GET, getUsers);
}

export default [
  getUsersWatcher,
];
