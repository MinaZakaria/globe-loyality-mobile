import { put, takeEvery, take } from 'redux-saga/effects';

import {
  SIGN_UP_REQUEST,
  signUpApi,
  SIGN_UP_API_SUCCESS,
  SIGN_UP_API_FAILURE,

  signUpSuccess,
  signUpFailure
} from '../../actions/signUp';
import { showRibbon } from '../../actions/ribbon';
import { goBack } from '../../actions/navigate';

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

  yield put(goBack());

  yield put(showRibbon({
    type: 'info',
    message: 'Verify you mail please',
    dismissable: true,
  }));

  yield put(signUpSuccess());
}
