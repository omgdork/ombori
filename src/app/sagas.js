import { fork, all } from 'redux-saga/effects';
import usersSagas from './modules/users/sagas';

export default function* rootSaga() {
  yield all([...usersSagas.map((saga) => fork(saga))]);
}
