import { toByIds } from '../utils/helpers';
import { LIST_CHALLENGES_SUCCESS } from '../actions/challenges';

const defaultState = {
  byId: {},
  currentStore: null
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_CHALLENGES_SUCCESS:
      return {
        byId: toByIds(state.byId, payload.challenges)
      };

    default:
      return state;
  }
};
