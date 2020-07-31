import {
  getActionType,

  SIGN_UP,
  SIGN_UP_API,
  EXPIRE_TOKEN,

  REQUEST,
  SUCCESS,
  FAILURE
} from './api';

/*
 * action types
 */
export const SIGN_UP_REQUEST = getActionType(SIGN_UP, REQUEST);
export const SIGN_UP_SUCCESS = getActionType(SIGN_UP, SUCCESS);
export const SIGN_UP_FAILURE = getActionType(SIGN_UP, FAILURE);

export const SIGN_UP_API_REQUEST = getActionType(SIGN_UP_API, REQUEST);
export const SIGN_UP_API_SUCCESS = getActionType(SIGN_UP_API, SUCCESS);
export const SIGN_UP_API_FAILURE = getActionType(SIGN_UP_API, FAILURE);

export const EXPIRE_TOKEN_REQUEST = getActionType(EXPIRE_TOKEN, REQUEST);
export const EXPIRE_TOKEN_SUCCESS = getActionType(EXPIRE_TOKEN, SUCCESS);

/*
 * action creators
 */
export function signUp({ name, email, password, passwordConfirmation, roleId }) {
  return {
    type: SIGN_UP_REQUEST,
    payload: { name, email, password, passwordConfirmation, roleId }
  };
}

export function signUpSuccess() {
  return {
    type: SIGN_UP_SUCCESS
  };
}

export function signUpFailure(error = null) {
  return {
    type: SIGN_UP_FAILURE,
    payload: { error }
  };
}

export function signUpApi({ name, email, password, passwordConfirmation, roleId }) {
  return {
    type: SIGN_UP_API_REQUEST,
    payload: { name, email, password, passwordConfirmation, roleId }
  };
}

export function signUpApiSuccess(accessToken = '', currentUser = null) {
  return {
    type: SIGN_UP_API_SUCCESS,
    payload: { accessToken, currentUser }
  };
}

export function signUpApiFailure(error = null) {
  return {
    type: SIGN_UP_API_FAILURE,
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
  signUpApi,
  signUpApiSuccess,
  signUpApiFailure,
  expireToken,
  expireTokenSuccess,

  SIGN_UP_API_REQUEST,
  SIGN_UP_API_SUCCESS,
  SIGN_UP_API_FAILURE,
  EXPIRE_TOKEN_REQUEST,
  EXPIRE_TOKEN_SUCCESS
};
