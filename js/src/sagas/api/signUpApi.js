import { put, apply, takeEvery } from 'redux-saga/effects';

import createPosApi from '../../api';
import { SIGN_UP_API_REQUEST } from '../../actions/signUp';

export default function* watcher() {
  yield takeEvery(SIGN_UP_API_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;

  const userAdapter = createPosApi(() => { }).user;
  const resultAction = yield apply(userAdapter, userAdapter.register, [payload]);
  yield put(resultAction);
}
