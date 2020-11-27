/**
 * Request States
 * Must not contain '_'
 */
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

/**
 * Request Names
 * Must be secure object keys
 */
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGN_UP = 'SIGN_UP';
export const LOGIN_API = 'LOGIN_API';
export const LOGOUT_API = 'LOGOUT_API';
export const EXPIRE_TOKEN = 'EXPIRE_TOKEN';
export const LIST_USERS_API = 'LIST_USERS_API';
export const LIST_CHALLENGES = 'LIST_CHALLENGES';
export const CREATE_CHALLENGE = 'CREATE_CHALLENGE';
export const SUBMIT_CHALLENGE = 'SUBMIT_CHALLENGE';
export const LIST_PROGRAMS_API = 'LIST_PROGRAMS_API';
export const LIST_USER_ROLES_API = 'LIST_USER_ROLES_API';
export const EDIT_USER_STATUS_API = 'EDIT_USER_STATUS_API';
export const SAVE_TO_LOCAL_STORAGE = 'SAVE_TO_LOCAL_STORAGE';
export const LOAD_FROM_LOCAL_STORAGE = 'LOAD_FROM_LOCAL_STORAGE';
export const REMOVE_FROM_LOCAL_STORAGE = 'REMOVE_FROM_LOCAL_STORAGE';
export const LIST_CHALLENGE_SUBMITTIONS_API = 'LIST_CHALLENGE_SUBMITTIONS_API';
export const EDIT_CHALLENGE_SUBMITTIONS_STATUS_API = 'EDIT_CHALLENGE_SUBMITTIONS_STATUS_API';

export const getActionType = (requestName, requestState) => {
  return `${requestName}_${requestState}`;
};

export const parseRequest = (type) => {
  const underscoreIndex = type.lastIndexOf('_');

  if (underscoreIndex == -1) {
    return false;
  }
  const requestState = type.substr(underscoreIndex + 1, type.length - underscoreIndex - 1);
  const requestName = type.substr(0, underscoreIndex);

  return { requestState, requestName };
};

export const matchApiAction = (type, requestStates) => {
  const request = parseRequest(type);

  if (!request) {
    return request;
  }
  const { requestState, requestName } = request;

  if (!requestStates.includes(requestState)) {
    return false;
  }

  if (requestName.length == 0) {
    return false;
  }

  return { requestName, requestState };
};

export const requestNameToKey = (requestName) => {
  return `p_${requestName}`;
};
