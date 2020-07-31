import { all } from 'redux-saga/effects';

import apiErrors from './api';

export default function* appSaga() {
  yield all([
    apiErrors(),
  ]);
}
