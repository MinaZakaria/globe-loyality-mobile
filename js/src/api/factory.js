import UserAdapter from './adapters/UserAdapter';

export default (getAccessToken, driver) => {
  return {
    user: new UserAdapter(getAccessToken, driver),
  };
};
