import { call, takeEvery } from 'redux-saga/effects';

import { STARTUP } from '../actions/startup';

export default function* watcher() {
  yield takeEvery(STARTUP, worker);
}

function* worker(action) {
  const { payload } = action;
  yield call(payload.resolve);
}
