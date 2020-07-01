import AuthAdapter from './adapters/AuthAdapter';

export default (getToken, driver) => {
  return {
    auth: new AuthAdapter(getToken, driver),
  };
};
