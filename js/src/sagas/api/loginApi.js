import { put, apply, takeEvery, select } from 'redux-saga/effects';

import createPosApi from '../../api';
import { getAccessToken } from '../../selectors/login';
import { LOGIN_API_REQUEST, LOGIN_API_SUCCESS, LOGIN_API_FAILURE } from '../../actions/login';
import { save } from '../../utils/localStorage';

export default function* watcher() {
  yield takeEvery(LOGIN_API_REQUEST, worker);
}

function* worker(action) {
  const { payload, resolve, reject } = action;

  const token = yield select(getAccessToken);

  const authAdapter = createPosApi(() => token).auth;
  const resultAction = yield apply(authAdapter, authAdapter.login, [payload.email, payload.password]);

  const loginData = {
    accessToken: payload.accessToken,
    tokenType: payload.tokenType,
    expiresIn: payload.expiresIn
  };

  save('login', JSON.stringify(loginData)).then(() => {
    console.log('save login token success');      // eslint-disable-line no-console
  })
    .catch((err) => {
      console.log('error message', err.message);      // eslint-disable-line no-console
    });

  switch (resultAction.type) {
    case LOGIN_API_SUCCESS:
      resolve();
      break;
    case LOGIN_API_FAILURE:
      reject(resultAction.payload.error);
      break;
    default:
      throw new Error('Something went wrong');
  }

  yield put(resultAction);
}
