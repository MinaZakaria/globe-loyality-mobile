import {
  getActionType,

  LIST_PROGRAMS_API,

  REQUEST,
  SUCCESS,
  FAILURE
} from './api';

/*
 * action types
 */
export const LIST_PROGRAMS_API_REQUEST = getActionType(LIST_PROGRAMS_API, REQUEST);
export const LIST_PROGRAMS_API_SUCCESS = getActionType(LIST_PROGRAMS_API, SUCCESS);
export const LIST_PROGRAMS_API_FAILURE = getActionType(LIST_PROGRAMS_API, FAILURE);

/*
 * action creators
 */
export function listProgramsApi() {
  return {
    type: LIST_PROGRAMS_API_REQUEST,
  };
}

export function listProgramsApiSuccess(programs) {
  return {
    type: LIST_PROGRAMS_API_SUCCESS,
    payload: { programs }
  };
}

export function listProgramsApiFailure(error = null) {
  return {
    type: LIST_PROGRAMS_API_FAILURE,
    payload: { error }
  };
}

export default {
  listProgramsApi,
  listProgramsApiSuccess,
  listProgramsApiFailure,

  LIST_PROGRAMS_API_REQUEST,
  LIST_PROGRAMS_API_SUCCESS,
  LIST_PROGRAMS_API_FAILURE
};
