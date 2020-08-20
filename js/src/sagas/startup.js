import { call, takeEvery, put, take } from 'redux-saga/effects';

import { STARTUP } from '../actions/startup';
import { loginApiSuccess } from '../actions/login';

import {
  loadFromLocalStorage,
  LOAD_FROM_LOCAL_STORAGE_FAILURE,
  LOAD_FROM_LOCAL_STORAGE_SUCCESS
} from '../actions/storage';
import { listUserRolesApi } from '../actions/userRoles';

export default function* watcher() {
  yield takeEvery(STARTUP, worker);
}

function* worker(action) {
  const { payload } = action;

  yield put(listUserRolesApi());

  yield put(loadFromLocalStorage('accessToken'));

  let loadLoginData = yield take([LOAD_FROM_LOCAL_STORAGE_SUCCESS, LOAD_FROM_LOCAL_STORAGE_FAILURE]);

  if (loadLoginData.type == LOAD_FROM_LOCAL_STORAGE_FAILURE || !loadLoginData.payload.data) {
    yield call(payload.resolve);
    return;
  }

  const accessToken = loadLoginData.payload.data;

  if (accessToken) {
    yield put(loginApiSuccess(accessToken));
  }

  yield call(payload.resolve);
}
