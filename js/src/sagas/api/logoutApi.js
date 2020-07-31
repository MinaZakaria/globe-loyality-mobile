import { put, apply, takeEvery, select } from 'redux-saga/effects';

import createPosApi from '../../api';
import { getAccessToken } from '../../selectors/login';
import { LOGOUT_API_REQUEST } from '../../actions/logout';

export default function* watcher() {
  yield takeEvery(LOGOUT_API_REQUEST, worker);
}

function* worker() {
  const accessToken = yield select(getAccessToken);

  const userAdapter = createPosApi(() => accessToken).user;
  const resultAction = yield apply(userAdapter, userAdapter.logout);

  yield put(resultAction);
}
