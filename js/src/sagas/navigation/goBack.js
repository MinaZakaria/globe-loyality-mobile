import { apply, takeEvery } from 'redux-saga/effects';

import { NAVIGATE_BACK } from '../../actions/navigate';
import NavigationService from '../../utils/NavigationService';

export default function* watcher() {
  yield takeEvery(NAVIGATE_BACK, worker);
}

function* worker() {
  yield apply(NavigationService, NavigationService.goBack);
}
