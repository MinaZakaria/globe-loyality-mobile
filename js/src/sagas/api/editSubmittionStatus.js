import { put, apply, takeEvery, select } from 'redux-saga/effects';

import { getAccessToken } from '../../selectors/login';

import createPosApi from '../../api';
import { EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_REQUEST } from '../../actions/challengeSubmittions';

export default function* watcher() {
  yield takeEvery(EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;

  const accessToken = yield select(getAccessToken);
  const challengeSubmittionsAdapter = createPosApi(() => accessToken).challengeSubmittions;

  const resultAction = yield apply(challengeSubmittionsAdapter, challengeSubmittionsAdapter.editStatus, [payload.challengeSubmittionId, payload.statusId, payload.comment]);
  yield put(resultAction);
}
