import { call, takeEvery, put, take } from 'redux-saga/effects';

import { STARTUP } from '../actions/startup';
import { loginApiSuccess } from '../actions/login';

import {
  loadFromLocalStorage,
  LOAD_FROM_LOCAL_STORAGE_FAILURE,
  LOAD_FROM_LOCAL_STORAGE_SUCCESS
} from '../actions/storage';
import { listProgramsApi } from '../actions/programs';
import { listUserRolesApi, LIST_USER_ROLES_API_SUCCESS, LIST_USER_ROLES_API_FAILURE } from '../actions/userRoles';

export default function* watcher() {
  yield takeEvery(STARTUP, worker);
}

function* worker(action) {
  const { payload } = action;

  yield put(listProgramsApi());
  yield put(listUserRolesApi());

  yield take([LIST_USER_ROLES_API_SUCCESS, LIST_USER_ROLES_API_FAILURE]);
  yield put(loadFromLocalStorage('accessToken'));

  let loadLoginData = yield take([LOAD_FROM_LOCAL_STORAGE_SUCCESS, LOAD_FROM_LOCAL_STORAGE_FAILURE]);

  if (loadLoginData.type == LOAD_FROM_LOCAL_STORAGE_FAILURE || !loadLoginData.payload.data) {
    yield call(payload.resolve);
    return;
  }

  const accessToken = loadLoginData.payload.data;

  yield put(loadFromLocalStorage('currentUser'));
  let currentUserData = yield take([LOAD_FROM_LOCAL_STORAGE_SUCCESS, LOAD_FROM_LOCAL_STORAGE_FAILURE]);

  if (loadLoginData.type == LOAD_FROM_LOCAL_STORAGE_FAILURE || !loadLoginData.payload.data) {
    yield call(payload.resolve);
    return;
  }
  const currentUser = JSON.parse(currentUserData.payload.data);

  if (accessToken && currentUser) {
    yield put(loginApiSuccess(accessToken, currentUser));
  }

  yield call(payload.resolve);
}
