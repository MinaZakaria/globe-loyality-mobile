import {
  getActionType,

  LIST_CHALLENGE_SUBMITTIONS_API,
  EDIT_CHALLENGE_SUBMITTIONS_STATUS_API,

  REQUEST,
  SUCCESS,
  FAILURE
} from './api';

/*
 * action types
 */
export const LIST_CHALLENGE_SUBMITTIONS_API_REQUEST = getActionType(LIST_CHALLENGE_SUBMITTIONS_API, REQUEST);
export const LIST_CHALLENGE_SUBMITTIONS_API_SUCCESS = getActionType(LIST_CHALLENGE_SUBMITTIONS_API, SUCCESS);
export const LIST_CHALLENGE_SUBMITTIONS_API_FAILURE = getActionType(LIST_CHALLENGE_SUBMITTIONS_API, FAILURE);

export const EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_REQUEST = getActionType(EDIT_CHALLENGE_SUBMITTIONS_STATUS_API, REQUEST);
export const EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_SUCCESS = getActionType(EDIT_CHALLENGE_SUBMITTIONS_STATUS_API, SUCCESS);
export const EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_FAILURE = getActionType(EDIT_CHALLENGE_SUBMITTIONS_STATUS_API, FAILURE);

/*
 * action creators
 */
export function listChallengeSubmittionsApi() {
  return {
    type: LIST_CHALLENGE_SUBMITTIONS_API_REQUEST,
  };
}

export function listChallengeSubmittionsApiSuccess(challengeSubmittions) {
  return {
    type: LIST_CHALLENGE_SUBMITTIONS_API_SUCCESS,
    payload: { challengeSubmittions }
  };
}

export function listChallengeSubmittionsApiFailure(error = null) {
  return {
    type: LIST_CHALLENGE_SUBMITTIONS_API_FAILURE,
    payload: { error }
  };
}

export function editChallengeSubmittionStatusApi(challengeSubmittionId, statusId, comment = null) {
  return {
    type: EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_REQUEST,
    payload: { challengeSubmittionId, statusId, comment }
  };
}

export function editChallengeSubmittionStatusApiSuccess(challengeSubmittion) {
  return {
    type: EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_SUCCESS,
    payload: { challengeSubmittion }
  };
}

export function editChallengeSubmittionStatusApiFailure(error = null) {
  return {
    type: EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_FAILURE,
    payload: { error }
  };
}

export default {
  listChallengeSubmittionsApi,
  listChallengeSubmittionsApiSuccess,
  listChallengeSubmittionsApiFailure,
  editChallengeSubmittionStatusApi,
  editChallengeSubmittionStatusApiSuccess,
  editChallengeSubmittionStatusApiFailure,

  LIST_CHALLENGE_SUBMITTIONS_API_REQUEST,
  LIST_CHALLENGE_SUBMITTIONS_API_SUCCESS,
  LIST_CHALLENGE_SUBMITTIONS_API_FAILURE,
  EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_REQUEST,
  EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_SUCCESS,
  EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_FAILURE,
};
