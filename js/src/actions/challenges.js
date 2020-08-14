import {
  getActionType,

  LIST_CHALLENGES,
  CREATE_CHALLENGE,

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

export const CREATE_CHALLENGE_REQUEST = getActionType(CREATE_CHALLENGE, REQUEST);
export const CREATE_CHALLENGE_SUCCESS = getActionType(CREATE_CHALLENGE, SUCCESS);
export const CREATE_CHALLENGE_FAILURE = getActionType(CREATE_CHALLENGE, FAILURE);

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

export function createChallenge(challenge) {
  return {
    type: CREATE_CHALLENGE_REQUEST,
    payload: { challenge }
  };
}

export function createChallengeSuccess(challenge = null) {
  return {
    type: CREATE_CHALLENGE_SUCCESS,
    payload: { challenge }
  };
}

export function createChallengeFailure(error = null) {
  return {
    type: CREATE_CHALLENGE_FAILURE,
    payload: { error }
  };
}

export default {
  listChallenges,
  listChallengesSuccess,
  listChallengesFailure,
  createChallenge,
  createChallengeSuccess,
  createChallengeFailure,

  LIST_CHALLENGES_REQUEST,
  LIST_CHALLENGES_SUCCESS,
  LIST_CHALLENGES_FAILURE,
  CREATE_CHALLENGE_REQUEST,
  CREATE_CHALLENGE_SUCCESS,
  CREATE_CHALLENGE_FAILURE,
};
