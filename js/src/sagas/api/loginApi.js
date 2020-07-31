import { put, apply, takeEvery } from 'redux-saga/effects';

import createPosApi from '../../api';
import { LOGIN_API_REQUEST } from '../../actions/login';

export default function* watcher() {
  yield takeEvery(LOGIN_API_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;

  const userAdapter = createPosApi(() => { }).user;
  const resultAction = yield apply(userAdapter, userAdapter.login, [payload.email, payload.password]);
  yield put(resultAction);
}
