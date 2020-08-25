import { put, apply, takeEvery, select } from 'redux-saga/effects';

import { getAccessToken } from '../../selectors/login';

import createPosApi from '../../api';
import { EDIT_USER_STATUS_API_REQUEST } from '../../actions/users';

export default function* watcher() {
  yield takeEvery(EDIT_USER_STATUS_API_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;

  const accessToken = yield select(getAccessToken);
  const userAdapter = createPosApi(() => accessToken).user;

  const resultAction = yield apply(userAdapter, userAdapter.editStatus, [payload.userId, payload.statusId]);
  yield put(resultAction);
}
