import { put, apply, takeEvery, select } from 'redux-saga/effects';

import { getAccessToken } from '../../selectors/login';

import createPosApi from '../../api';
import { CREATE_CHALLENGE_REQUEST } from '../../actions/challenges';

export default function* watcher() {
  yield takeEvery(CREATE_CHALLENGE_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;

  const accessToken = yield select(getAccessToken);
  const challengeAdapter = createPosApi(() => accessToken).challenge;

  const resultAction = yield apply(challengeAdapter, challengeAdapter.create, [payload.challenge]);
  yield put(resultAction);
}
