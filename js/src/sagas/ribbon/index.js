import { apply, takeEvery } from 'redux-saga/effects';

import { SHOW_RIBBON } from '../../actions/ribbon';
import RibbonService from '../../utils/RibbonService';

export default function* watcher() {
  yield takeEvery(SHOW_RIBBON, worker);
}

function* worker(action) {
  const { payload } = action;
  yield apply(RibbonService, RibbonService.show, [payload]);
}
