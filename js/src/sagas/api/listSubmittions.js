import { put, apply, takeEvery, select } from 'redux-saga/effects';

import { getAccessToken } from '../../selectors/login';

import createPosApi from '../../api';
import { LIST_CHALLENGE_SUBMITTIONS_API_REQUEST } from '../../actions/challengeSubmittions';

export default function* watcher() {
  yield takeEvery(LIST_CHALLENGE_SUBMITTIONS_API_REQUEST, worker);
}

function* worker() {
  const accessToken = yield select(getAccessToken);
  const challengeSubmittionsAdapter = createPosApi(() => accessToken).challengeSubmittions;

  const resultAction = yield apply(challengeSubmittionsAdapter, challengeSubmittionsAdapter.list);
  yield put(resultAction);
}
