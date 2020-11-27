import { toByIds } from '../utils/helpers';
import { LIST_CHALLENGE_SUBMITTIONS_API_SUCCESS, EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_SUCCESS } from '../actions/challengeSubmittions';

const defaultState = {
  byId: {},
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_CHALLENGE_SUBMITTIONS_API_SUCCESS:
      return {
        byId: toByIds(state.byId, payload.challengeSubmittions)
      };
    case EDIT_CHALLENGE_SUBMITTIONS_STATUS_API_SUCCESS:
      if (!payload.challengeSubmittion) {
        return state;
      }
      return {
        byId: toByIds(state.byId, [payload.challengeSubmittion]),
      };

    default:
      return state;
  }
};
