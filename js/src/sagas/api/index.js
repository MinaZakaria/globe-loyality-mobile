import { all } from 'redux-saga/effects';
import loginApi from './loginApi';
import logoutApi from './logoutApi';
import signUpApi from './signUpApi';
import listUsers from './listUsers';
import listPrograms from './listPrograms';
import listUserRoles from './listUserRoles';
import listChallenges from './listChallenges';
import editUserStatus from './editUserStatus';
import createChallenges from './createChallenges';
import submitChallenges from './submitChallenges';
import listSubmittions from './listSubmittions';
import editSubmittionStatus from './editSubmittionStatus';

export default function* apiSaga() {
  yield all([
    loginApi(),
    signUpApi(),
    logoutApi(),
    listUsers(),
    listPrograms(),
    listUserRoles(),
    listChallenges(),
    editUserStatus(),
    createChallenges(),
    submitChallenges(),
    listSubmittions(),
    editSubmittionStatus(),
  ]);
}
