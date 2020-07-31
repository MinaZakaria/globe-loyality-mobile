import { all } from 'redux-saga/effects';
import loginApi from './loginApi';
import logoutApi from './logoutApi';
import signUpApi from './signUpApi';

export default function* apiSaga() {
  yield all([
    loginApi(),
    signUpApi(),
    logoutApi(),
  ]);
}
