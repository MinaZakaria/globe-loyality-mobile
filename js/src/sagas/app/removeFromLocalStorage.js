import { takeEvery, put, call } from 'redux-saga/effects';

import {
  REMOVE_FROM_LOCAL_STORAGE_REQUEST,
  removeFromLocalStorageSuccess,
  removeFromLocalStorageFailure
} from '../../actions/storage';
import { remove } from '../../utils/localStorage';

export default function* watcher() {
  yield takeEvery(REMOVE_FROM_LOCAL_STORAGE_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;
  try {
    let res = yield call(remove, payload.key);
    yield put(removeFromLocalStorageSuccess(res));
  } catch (err) {
    yield put(removeFromLocalStorageFailure(err));
  }
}
