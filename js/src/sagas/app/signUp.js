import { put, takeEvery, take } from 'redux-saga/effects';

import {
  SIGN_UP_REQUEST,
  signUpApi,
  SIGN_UP_API_SUCCESS,
  SIGN_UP_API_FAILURE,

  signUpSuccess,
  signUpFailure
} from '../../actions/signUp';
import { saveToLocalStorage } from '../../actions/storage';

export default function* watcher() {
  yield takeEvery(SIGN_UP_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;

  yield put(signUpApi(payload));
  const signUpApiResultAction = yield take([SIGN_UP_API_SUCCESS, SIGN_UP_API_FAILURE]);

  if (signUpApiResultAction.type == SIGN_UP_API_FAILURE) {
    yield put(signUpFailure(signUpApiResultAction.payload.error));
    return;
  }

  const accessToken = signUpApiResultAction.payload.accessToken;

  yield put(saveToLocalStorage('accessToken', accessToken));
  yield put(signUpSuccess());
}
