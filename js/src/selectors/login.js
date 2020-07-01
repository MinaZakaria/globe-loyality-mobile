
const local = state => state.login;
export const getAccessToken = state => local(state).accessToken;
export const getTokenType = state => local(state).tokenType;
export const getExpiresIn = state => local(state).expiresIn;
