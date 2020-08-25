import { toByIds } from '../utils/helpers';
import { LIST_USERS_API_SUCCESS, EDIT_USER_STATUS_API_SUCCESS } from '../actions/users';

const defaultState = {
  byId: {},
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_USERS_API_SUCCESS:
      return {
        byId: toByIds(state.byId, payload.users)
      };
    case EDIT_USER_STATUS_API_SUCCESS:
      if (!payload.user) {
        return state;
      }
      return {
        byId: toByIds(state.byId, [payload.user]),
      };

    default:
      return state;
  }
};
