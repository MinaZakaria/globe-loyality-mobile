import UserAdapter from './adapters/UserAdapter';
import ChallengeAdapter from './adapters/ChallengeAdapter';

export default (getAccessToken, driver) => {
  return {
    user: new UserAdapter(getAccessToken, driver),
    challenge: new ChallengeAdapter(getAccessToken, driver),
  };
};
