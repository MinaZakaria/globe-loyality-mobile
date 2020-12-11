import { LOGIN_API_SUCCESS, EXPIRE_TOKEN_SUCCESS } from '../actions/login';
import { LOGOUT_API_SUCCESS } from '../actions/logout';
import { GET_ME_API_SUCCESS } from '../actions/users';

const defaultState = {
  accessToken: '',
  currentUser: '',
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_API_SUCCESS:
    case GET_ME_API_SUCCESS:
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
