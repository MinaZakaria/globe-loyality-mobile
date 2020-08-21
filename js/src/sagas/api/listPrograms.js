import { put, apply, takeEvery, select } from 'redux-saga/effects';

import { getAccessToken } from '../../selectors/login';

import createPosApi from '../../api';
import { LIST_PROGRAMS_API_REQUEST } from '../../actions/programs';

export default function* watcher() {
  yield takeEvery(LIST_PROGRAMS_API_REQUEST, worker);
}

function* worker() {
  const accessToken = yield select(getAccessToken);
  const programAdapter = createPosApi(() => accessToken).program;

  const resultAction = yield apply(programAdapter, programAdapter.list);
  yield put(resultAction);
}
