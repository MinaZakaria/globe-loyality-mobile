import {
  getActionType,

  LIST_USERS_API,
  EDIT_USER_STATUS_API,
  GET_ME_API,

  REQUEST,
  SUCCESS,
  FAILURE
} from './api';

/*
 * action types
 */
export const LIST_USERS_API_REQUEST = getActionType(LIST_USERS_API, REQUEST);
export const LIST_USERS_API_SUCCESS = getActionType(LIST_USERS_API, SUCCESS);
export const LIST_USERS_API_FAILURE = getActionType(LIST_USERS_API, FAILURE);

export const EDIT_USER_STATUS_API_REQUEST = getActionType(EDIT_USER_STATUS_API, REQUEST);
export const EDIT_USER_STATUS_API_SUCCESS = getActionType(EDIT_USER_STATUS_API, SUCCESS);
export const EDIT_USER_STATUS_API_FAILURE = getActionType(EDIT_USER_STATUS_API, FAILURE);

export const GET_ME_API_REQUEST = getActionType(GET_ME_API, REQUEST);
export const GET_ME_API_SUCCESS = getActionType(GET_ME_API, SUCCESS);
export const GET_ME_API_FAILURE = getActionType(GET_ME_API, FAILURE);

/*
 * action creators
 */
export function listUsersApi() {
  return {
    type: LIST_USERS_API_REQUEST,
  };
}

export function listUsersApiSuccess(users) {
  return {
    type: LIST_USERS_API_SUCCESS,
    payload: { users }
  };
}

export function listUsersApiFailure(error = null) {
  return {
    type: LIST_USERS_API_FAILURE,
    payload: { error }
  };
}

export function editUserStatusApi(userId, statusId) {
  return {
    type: EDIT_USER_STATUS_API_REQUEST,
    payload: { userId, statusId }
  };
}

export function editUserStatusApiSuccess(user) {
  return {
    type: EDIT_USER_STATUS_API_SUCCESS,
    payload: { user }
  };
}

export function editUserStatusApiFailure(error = null) {
  return {
    type: EDIT_USER_STATUS_API_FAILURE,
    payload: { error }
  };
}

export function getMeApi() {
  return {
    type: GET_ME_API_REQUEST,
  };
}

export function getMeApiSuccess(currentUser) {
  return {
    type: GET_ME_API_SUCCESS,
    payload: { currentUser }
  };
}

export function getMeApiFailure(error = null) {
  return {
    type: GET_ME_API_FAILURE,
    payload: { error }
  };
}

export default {
  listUsersApi,
  listUsersApiSuccess,
  listUsersApiFailure,

  editUserStatusApi,
  editUserStatusApiSuccess,
  editUserStatusApiFailure,

  getMeApi,
  getMeApiSuccess,
  getMeApiFailure,

  LIST_USERS_API_REQUEST,
  LIST_USERS_API_SUCCESS,
  LIST_USERS_API_FAILURE,

  EDIT_USER_STATUS_API_REQUEST,
  EDIT_USER_STATUS_API_SUCCESS,
  EDIT_USER_STATUS_API_FAILURE,

  GET_ME_API_REQUEST,
  GET_ME_API_SUCCESS,
  GET_ME_API_FAILURE,
};
