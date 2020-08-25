import { put, apply, takeEvery, select } from 'redux-saga/effects';

import { getAccessToken } from '../../selectors/login';

import createPosApi from '../../api';
import { LIST_USERS_API_REQUEST } from '../../actions/users';

export default function* watcher() {
  yield takeEvery(LIST_USERS_API_REQUEST, worker);
}

function* worker() {
  const accessToken = yield select(getAccessToken);
  const userAdapter = createPosApi(() => accessToken).user;

  const resultAction = yield apply(userAdapter, userAdapter.list);
  yield put(resultAction);
}
