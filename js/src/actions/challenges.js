import {
  getActionType,

  LIST_CHALLENGES,

  REQUEST,
  SUCCESS,
  FAILURE
} from './api';

/*
 * action types
 */
export const LIST_CHALLENGES_REQUEST = getActionType(LIST_CHALLENGES, REQUEST);
export const LIST_CHALLENGES_SUCCESS = getActionType(LIST_CHALLENGES, SUCCESS);
export const LIST_CHALLENGES_FAILURE = getActionType(LIST_CHALLENGES, FAILURE);

/*
 * action creators
 */
export function listChallenges() {
  return {
    type: LIST_CHALLENGES_REQUEST
  };
}

export function listChallengesSuccess(challenges = []) {
  return {
    type: LIST_CHALLENGES_SUCCESS,
    payload: { challenges }
  };
}

export function listChallengesFailure(error = null) {
  return {
    type: LIST_CHALLENGES_FAILURE,
    payload: { error }
  };
}

export default {
  listChallenges,
  listChallengesSuccess,
  listChallengesFailure,

  LIST_CHALLENGES_REQUEST,
  LIST_CHALLENGES_SUCCESS,
  LIST_CHALLENGES_FAILURE,
};
