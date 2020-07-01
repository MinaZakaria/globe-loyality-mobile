import { apply, takeEvery } from 'redux-saga/effects';

import { NAVIGATE } from '../../actions/navigate';
import NavigationService from '../../utils/NavigationService';

export default function* watcher() {
  yield takeEvery(NAVIGATE, worker);
}

function* worker(action) {
  const { payload } = action;
  yield apply(NavigationService, NavigationService.navigate, [payload.routeName, payload.params]);
}
