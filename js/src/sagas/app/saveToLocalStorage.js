import { takeEvery, put, call } from 'redux-saga/effects';

import {
  SAVE_TO_LOCAL_STORAGE_REQUEST,
  saveToLocalStorageSuccess,
  saveToLocalStorageFailure
} from '../../actions/storage';
import { save } from '../../utils/localStorage';

export default function* watcher() {
  yield takeEvery(SAVE_TO_LOCAL_STORAGE_REQUEST, worker);
}

function* worker(action) {
  const { payload } = action;
  try {
    yield call(save, payload.key, payload.value);
    yield put(saveToLocalStorageSuccess());
  } catch (err) {
    yield put(saveToLocalStorageFailure(err));
  }
}
