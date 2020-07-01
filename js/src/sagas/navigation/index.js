import { all } from 'redux-saga/effects';

import goBack from './goBack';
import navigate from './navigate';

export default function* navigationSaga() {
  yield all([
    goBack(),
    navigate(),
  ]);
}
