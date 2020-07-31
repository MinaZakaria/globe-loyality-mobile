import { takeEvery, put } from 'redux-saga/effects';
import i18n from '../../../utils/i18n';
import { showRibbon } from '../../../actions/ribbon';
import { FAILURE, matchApiAction } from '../../../actions/api';
import { expireToken } from '../../../actions/login';
import {
  NOT_FOUND,
  TOKEN_EXPIRED,
  UN_AUTHORIZED,
  UN_KNOWN,
  SERVICE_DOWN,
  TOKEN_INVALID,
  TIMEOUT,
  SERVER_ERROR
} from '../../../constants/ApiErrors';
import { RIBBON_TIMEOUT } from '../../../constants/Config';

export default function* watcher() {
  yield takeEvery('*', worker);
}

function* worker(action) {
  const { type, payload } = action;
  const matches = matchApiAction(`${type}`, [FAILURE]);
  if (matches && payload.error) {
    if (payload.error.type) {
      switch (payload.error.type) {
        case NOT_FOUND:
        case UN_KNOWN:
        case UN_AUTHORIZED:
        case SERVICE_DOWN:
        case SERVER_ERROR:
        case TIMEOUT:
          yield put(showRibbon({
            type: 'error',
            message: i18n.t(`common:errors.${payload.error.type}`, payload.error.details),
            dismissable: true,
            timeout: RIBBON_TIMEOUT
          }));
          break;
        case TOKEN_INVALID:
        case TOKEN_EXPIRED:
          yield put(expireToken());
          yield put(showRibbon({
            type: 'info',
            message: i18n.t('common:errors.TOKEN_EXPIRED'),
            dismissable: true,
            timeout: RIBBON_TIMEOUT
          }));
          break;
      }
    }
  }
}
