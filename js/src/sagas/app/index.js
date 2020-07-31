import { all } from 'redux-saga/effects';

import login from './login';
import signUp from './signUp';
import logout from './logout';
import expireToken from './expireToken';
import saveToLocalStorage from './saveToLocalStorage';
import loadFormLocalStorage from './loadFormLocalStorage';
import removeFromLocalStorage from './removeFromLocalStorage';

export default function* appSaga() {
  yield all([
    login(),
    signUp(),
    logout(),
    expireToken(),
    saveToLocalStorage(),
    loadFormLocalStorage(),
    removeFromLocalStorage(),
  ]);
}
