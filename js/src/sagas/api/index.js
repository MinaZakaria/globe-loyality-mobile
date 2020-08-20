import { all } from 'redux-saga/effects';
import loginApi from './loginApi';
import logoutApi from './logoutApi';
import signUpApi from './signUpApi';
import listUserRoles from './listUserRoles';
import listChallenges from './listChallenges';
import createChallenges from './createChallenges';

export default function* apiSaga() {
  yield all([
    loginApi(),
    signUpApi(),
    logoutApi(),
    listUserRoles(),
    listChallenges(),
    createChallenges(),
  ]);
}
