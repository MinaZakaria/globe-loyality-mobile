import { put, takeEvery, take } from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  loginApi,
  LOGIN_API_SUCCESS,
  LOGIN_API_FAILURE,

  loginSuccess,
  loginFailure
} from '../../actions/login';
import { saveToLocalStorage } from '../../actions/storage';

export default function* watcher() {
  yield takeEvery(LOGIN_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;

  yield put(loginApi(payload.email, payload.password));
  const loginApiResultAction = yield take([LOGIN_API_SUCCESS, LOGIN_API_FAILURE]);

  if (loginApiResultAction.type == LOGIN_API_FAILURE) {
    yield put(loginFailure(loginApiResultAction.payload.error));
    return;
  }

  const accessToken = loginApiResultAction.payload.accessToken;
  const currentUser = loginApiResultAction.payload.currentUser;

  yield put(saveToLocalStorage('accessToken', accessToken));
  yield put(saveToLocalStorage('currentUser', JSON.stringify(currentUser)));
  yield put(loginSuccess());
}
