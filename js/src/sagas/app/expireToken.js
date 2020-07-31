import { takeEvery, put } from 'redux-saga/effects';
import { EXPIRE_TOKEN_REQUEST, expireTokenSuccess } from '../../actions/login';
import { removeFromLocalStorage } from '../../actions/storage';

export default function* watcher() {
  yield takeEvery(EXPIRE_TOKEN_REQUEST, worker);
}

function* worker() {
  yield put(removeFromLocalStorage('accessToken'));
  yield put(expireTokenSuccess());
}
