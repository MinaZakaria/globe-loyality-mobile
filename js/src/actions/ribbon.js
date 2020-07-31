/*
 * action types
*/
export const SHOW_RIBBON = 'SHOW_RIBBON';

/*
 * action creators
*/
export function showRibbon({ type, message, dismissable, timeout, onRetryPress }) {
  return {
    type: SHOW_RIBBON,
    payload: { type, message, dismissable, timeout, onRetryPress }
  };
}

export default {
  SHOW_RIBBON,
  showRibbon
};
