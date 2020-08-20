import { toByIds } from '../utils/helpers';
import { LIST_USER_ROLES_API_SUCCESS } from '../actions/userRoles';

const defaultState = {
  byId: {},
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_USER_ROLES_API_SUCCESS:
      return {
        byId: toByIds(state.byId, payload.userRoles)
      };

    default:
      return state;
  }
};
