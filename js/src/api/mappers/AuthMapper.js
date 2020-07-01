export function fromAPI(apiToken) {
  return {
    accessToken: apiToken.access_token,
    tokenType: apiToken.token_type,
    expiresIn: apiToken.expires_in,
  };
}

export default {
  fromAPI,
};

