/*
 * action types
 */
export const NAVIGATE = 'NAVIGATE';
export const NAVIGATE_BACK = 'NAVIGATE_BACK';

/*
 * action creators
 */
export function navigate(routeName = '', params = {}) {
  return {
    type: NAVIGATE,
    payload: { routeName, params }
  };
}

export function goBack() {
  return {
    type: NAVIGATE_BACK,
    payload: {}
  };
}

export default {
  navigate,
  goBack,

  NAVIGATE,
  NAVIGATE_BACK,
};
