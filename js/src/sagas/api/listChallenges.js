import { put, apply, takeEvery, select } from 'redux-saga/effects';

import { getAccessToken } from '../../selectors/login';

import createPosApi from '../../api';
import { LIST_CHALLENGES_REQUEST } from '../../actions/challenges';

export default function* watcher() {
  yield takeEvery(LIST_CHALLENGES_REQUEST, worker);
}

function* worker() {
  const accessToken = yield select(getAccessToken);
  const challengeAdapter = createPosApi(() => accessToken).challenge;

  const resultAction = yield apply(challengeAdapter, challengeAdapter.list);
  yield put(resultAction);
}
