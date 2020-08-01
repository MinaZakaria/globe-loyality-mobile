import { LOGIN_API_SUCCESS, EXPIRE_TOKEN_SUCCESS } from '../actions/login';
import { LOGOUT_API_SUCCESS } from '../actions/logout';

const defaultState = {
  accessToken: '',
  currentUser: '',
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_API_SUCCESS:
      return {
        ...state,
        ...payload
      };

    case EXPIRE_TOKEN_SUCCESS:
    case LOGOUT_API_SUCCESS:
      return {
        ...defaultState
      };

    default:
      return state;
  }
};
