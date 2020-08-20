import {
  getActionType,

  LIST_USER_ROLES_API,

  REQUEST,
  SUCCESS,
  FAILURE
} from './api';

/*
 * action types
 */
export const LIST_USER_ROLES_API_REQUEST = getActionType(LIST_USER_ROLES_API, REQUEST);
export const LIST_USER_ROLES_API_SUCCESS = getActionType(LIST_USER_ROLES_API, SUCCESS);
export const LIST_USER_ROLES_API_FAILURE = getActionType(LIST_USER_ROLES_API, FAILURE);

/*
 * action creators
 */
export function listUserRolesApi() {
  return {
    type: LIST_USER_ROLES_API_REQUEST,
  };
}

export function listUserRolesApiSuccess(userRoles) {
  return {
    type: LIST_USER_ROLES_API_SUCCESS,
    payload: { userRoles }
  };
}

export function listUserRolesApiFailure(error = null) {
  return {
    type: LIST_USER_ROLES_API_FAILURE,
    payload: { error }
  };
}

export default {
  listUserRolesApi,
  listUserRolesApiSuccess,
  listUserRolesApiFailure,

  LIST_USER_ROLES_API_REQUEST,
  LIST_USER_ROLES_API_SUCCESS,
  LIST_USER_ROLES_API_FAILURE
};
