import { toByIds } from '../utils/helpers';
import { LIST_CHALLENGES_SUCCESS, CREATE_CHALLENGE_SUCCESS } from '../actions/challenges';

const defaultState = {
  byId: {},
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_CHALLENGES_SUCCESS:
      return {
        byId: toByIds(state.byId, payload.challenges)
      };

    case CREATE_CHALLENGE_SUCCESS:
      if (!payload.challenge) {
        return state;
      }
      return {
        ...state,
        byId: toByIds(state.byId, [payload.challenge]),
      };

    default:
      return state;
  }
};
