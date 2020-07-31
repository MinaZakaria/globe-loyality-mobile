
const local = state => state.login;
export const getAccessToken = state => local(state).accessToken;
