import { LOGIN_API_SUCCESS } from '../actions/login';

const defaultState = {
  accessToken: '',
  tokenType: '',
  expiresIn: 0,
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_API_SUCCESS:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
