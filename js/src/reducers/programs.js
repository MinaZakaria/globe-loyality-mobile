import { toByIds } from '../utils/helpers';
import { LIST_PROGRAMS_API_SUCCESS } from '../actions/programs';

const defaultState = {
  byId: {},
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_PROGRAMS_API_SUCCESS:
      return {
        byId: toByIds(state.byId, payload.programs)
      };

    default:
      return state;
  }
};
