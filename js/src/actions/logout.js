import {
  getActionType,

  LOGOUT,
  LOGOUT_API,

  REQUEST,
  SUCCESS,
  FAILURE
} from './api';

/*
 * action types
 */
export const LOGOUT_REQUEST = getActionType(LOGOUT, REQUEST);
export const LOGOUT_SUCCESS = getActionType(LOGOUT, SUCCESS);
export const LOGOUT_FAILURE = getActionType(LOGOUT, FAILURE);

export const LOGOUT_API_REQUEST = getActionType(LOGOUT_API, REQUEST);
export const LOGOUT_API_SUCCESS = getActionType(LOGOUT_API, SUCCESS);
export const LOGOUT_API_FAILURE = getActionType(LOGOUT_API, FAILURE);
/*
 * action creators
 */
export function logout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutFailure(error = null) {
  return {
    type: LOGOUT_FAILURE,
    payload: { error }
  };
}

export function logoutApi() {
  return {
    type: LOGOUT_API_REQUEST,
  };
}

export function logoutApiSuccess() {
  return {
    type: LOGOUT_API_SUCCESS,
  };
}

export function logoutApiFailure(error = null) {
  return {
    type: LOGOUT_API_FAILURE,
    payload: { error }
  };
}

export default {
  logout,
  logoutSuccess,
  logoutFailure,
  logoutApi,
  logoutApiSuccess,
  logoutApiFailure,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_API_REQUEST,
  LOGOUT_API_SUCCESS,
  LOGOUT_API_FAILURE
};
