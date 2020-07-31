import { takeEvery, put, call } from 'redux-saga/effects';

import {
  LOAD_FROM_LOCAL_STORAGE_REQUEST,
  loadFromLocalStorageSuccess,
  loadFromLocalStorageFailure
} from '../../actions/storage';
import { load } from '../../utils/localStorage';

export default function* watcher() {
  yield takeEvery(LOAD_FROM_LOCAL_STORAGE_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;
  try {
    let res = yield call(load, payload.key);
    yield put(loadFromLocalStorageSuccess(res));
  } catch (err) {
    yield put(loadFromLocalStorageFailure(err));
  }
}
