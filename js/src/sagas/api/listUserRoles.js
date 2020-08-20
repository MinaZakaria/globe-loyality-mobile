import { put, apply, takeEvery, select } from 'redux-saga/effects';

import { getAccessToken } from '../../selectors/login';

import createPosApi from '../../api';
import { LIST_USER_ROLES_API_REQUEST } from '../../actions/userRoles';

export default function* watcher() {
  yield takeEvery(LIST_USER_ROLES_API_REQUEST, worker);
}

function* worker() {
  const accessToken = yield select(getAccessToken);
  const userRoleAdapter = createPosApi(() => accessToken).userRole;

  const resultAction = yield apply(userRoleAdapter, userRoleAdapter.list);
  yield put(resultAction);
}
