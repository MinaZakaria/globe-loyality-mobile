import {
  getActionType,

  LOGIN,
  LOGIN_API,
  EXPIRE_TOKEN,

  REQUEST,
  SUCCESS,
  FAILURE
} from './api';

/*
 * action types
 */
export const LOGIN_REQUEST = getActionType(LOGIN, REQUEST);
export const LOGIN_SUCCESS = getActionType(LOGIN, SUCCESS);
export const LOGIN_FAILURE = getActionType(LOGIN, FAILURE);

export const LOGIN_API_REQUEST = getActionType(LOGIN_API, REQUEST);
export const LOGIN_API_SUCCESS = getActionType(LOGIN_API, SUCCESS);
export const LOGIN_API_FAILURE = getActionType(LOGIN_API, FAILURE);

export const EXPIRE_TOKEN_REQUEST = getActionType(EXPIRE_TOKEN, REQUEST);
export const EXPIRE_TOKEN_SUCCESS = getActionType(EXPIRE_TOKEN, SUCCESS);

/*
 * action creators
 */
export function login(email = '', password = '') {
  return {
    type: LOGIN_REQUEST,
    payload: { email, password }
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

export function loginFailure(error = null) {
  return {
    type: LOGIN_FAILURE,
    payload: { error }
  };
}

export function loginApi(email = '', password = '') {
  return {
    type: LOGIN_API_REQUEST,
    payload: { email, password }
  };
}

export function loginApiSuccess(accessToken = '', currentUser = null) {
  return {
    type: LOGIN_API_SUCCESS,
    payload: { accessToken, currentUser }
  };
}

export function loginApiFailure(error = null) {
  return {
    type: LOGIN_API_FAILURE,
    payload: { error }
  };
}

export function expireToken() {
  return {
    type: EXPIRE_TOKEN_REQUEST
  };
}

export function expireTokenSuccess() {
  return {
    type: EXPIRE_TOKEN_SUCCESS
  };
}

export default {
  loginApi,
  loginApiSuccess,
  loginApiFailure,
  expireToken,
  expireTokenSuccess,

  LOGIN_API_REQUEST,
  LOGIN_API_SUCCESS,
  LOGIN_API_FAILURE,
  EXPIRE_TOKEN_REQUEST,
  EXPIRE_TOKEN_SUCCESS
};
