import { all } from 'redux-saga/effects';
import loginApi from './loginApi';

export default function* apiSaga() {
  yield all([
    loginApi(),
  ]);
}
