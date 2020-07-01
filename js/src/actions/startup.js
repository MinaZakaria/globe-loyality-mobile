/*
 * action types
 */
export const STARTUP = 'STARTUP';

/*
 * action creators
 */
export function startup(resolve) {
  return {
    type: STARTUP,
    payload: { resolve }
  };
}

export default {
  STARTUP,
  startup
};
