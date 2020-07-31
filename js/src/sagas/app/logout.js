import { put, takeEvery, take } from 'redux-saga/effects';

import {
  LOGOUT_REQUEST,
  LOGOUT_API_SUCCESS,
  LOGOUT_API_FAILURE,

  logoutApi,
  logoutFailure,
  logoutSuccess
} from '../../actions/logout';
import { removeFromLocalStorage } from '../../actions/storage';

export default function* watcher() {
  yield takeEvery(LOGOUT_REQUEST, worker);
}

function* worker() {
  yield put(logoutApi());

  const logoutApiResultAction = yield take([LOGOUT_API_SUCCESS, LOGOUT_API_FAILURE]);

  if (logoutApiResultAction.type === LOGOUT_API_FAILURE) {
    yield put(logoutFailure(logoutApiResultAction.payload.error));
    return;
  }

  yield put(removeFromLocalStorage('accessToken'));
  yield put(logoutSuccess());
}
