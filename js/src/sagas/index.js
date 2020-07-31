import { all } from 'redux-saga/effects';

import api from './api';
import app from './app';
import error from './error';
import ribbon from './ribbon';
import startup from './startup';
import navigation from './navigation';
import actionPromise from './promises';

export default function* rootSaga() {
  yield all([
    api(),
    app(),
    error(),
    ribbon(),
    startup(),
    navigation(),
    actionPromise(),
  ]);
}
