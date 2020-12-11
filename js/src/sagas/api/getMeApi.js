import { put, apply, takeEvery, select } from 'redux-saga/effects';

import createPosApi from '../../api';
import { GET_ME_API_REQUEST } from '../../actions/users';

import { getAccessToken } from '../../selectors/login';

export default function* watcher() {
  yield takeEvery(GET_ME_API_REQUEST, worker);
}

function* worker() {
  const accessToken = yield select(getAccessToken);
  const userAdapter = createPosApi(() => accessToken).user;
  const resultAction = yield apply(userAdapter, userAdapter.getMe);
  yield put(resultAction);
}
