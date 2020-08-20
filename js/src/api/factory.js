import UserAdapter from './adapters/UserAdapter';
import UserRoleAdapter from './adapters/UserRoleAdapter';
import ChallengeAdapter from './adapters/ChallengeAdapter';

export default (getAccessToken, driver) => {
  return {
    user: new UserAdapter(getAccessToken, driver),
    userRole: new UserRoleAdapter(getAccessToken, driver),
    challenge: new ChallengeAdapter(getAccessToken, driver),
  };
};
