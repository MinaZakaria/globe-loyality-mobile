import {
  LOGIN_API,

  getAction,
  REQUEST,
  SUCCESS,
  FAILURE
} from './api';

import flatPromise from '../utils/flatPromise';

/*
 * action types
 */
export const LOGIN_API_REQUEST = getAction(LOGIN_API, REQUEST);
export const LOGIN_API_SUCCESS = getAction(LOGIN_API, SUCCESS);
export const LOGIN_API_FAILURE = getAction(LOGIN_API, FAILURE);


/*
 * action creators
 */
export function loginApi(email = '', password = '') {
  const { promise, resolve, reject } = flatPromise();

  return {
    type: LOGIN_API_REQUEST,
    payload: { email, password }, promise, resolve, reject
  };
}

export function loginApiSuccess(accessToken = '', tokenType = '', expiresIn = 0) {
  return {
    type: LOGIN_API_SUCCESS,
    payload: { accessToken, tokenType, expiresIn }
  };
}

export function loginApiFailure(error = null) {
  return {
    type: LOGIN_API_FAILURE,
    payload: { error }
  };
}


export default {
  loginApi,
  loginApiSuccess,
  loginApiFailure,

  LOGIN_API_REQUEST,
  LOGIN_API_SUCCESS,
  LOGIN_API_FAILURE,
};
