import { put, apply, takeEvery, select } from 'redux-saga/effects';

import { getAccessToken } from '../../selectors/login';

import createPosApi from '../../api';
import { SUBMIT_CHALLENGE_REQUEST } from '../../actions/challenges';

export default function* watcher() {
  yield takeEvery(SUBMIT_CHALLENGE_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;

  const accessToken = yield select(getAccessToken);
  const challengeAdapter = createPosApi(() => accessToken).challenge;

  const resultAction = yield apply(challengeAdapter, challengeAdapter.submit, [payload.challengeId, payload.data]);
  yield put(resultAction);
}
