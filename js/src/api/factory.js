import UserAdapter from './adapters/UserAdapter';
import ProgramAdapter from './adapters/ProgramAdapter';
import UserRoleAdapter from './adapters/UserRoleAdapter';
import ChallengeAdapter from './adapters/ChallengeAdapter';
import ChallengeSubmittionAdapter from './adapters/ChallengeSubmittionAdapter';

export default (getAccessToken, driver) => {
  return {
    user: new UserAdapter(getAccessToken, driver),
    program: new ProgramAdapter(getAccessToken, driver),
    userRole: new UserRoleAdapter(getAccessToken, driver),
    challenge: new ChallengeAdapter(getAccessToken, driver),
    challengeSubmittions: new ChallengeSubmittionAdapter(getAccessToken, driver),
  };
};
