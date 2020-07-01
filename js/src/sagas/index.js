import { all } from 'redux-saga/effects';

import api from './api';
import startup from './startup';
import navigation from './navigation';

export default function* rootSaga() {
  yield all([
    api(),
    startup(),
    navigation(),
  ]);
}
