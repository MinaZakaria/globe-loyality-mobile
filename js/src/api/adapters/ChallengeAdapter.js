import ChallengeApi from '../apis/Challenge';
import { listChallengesSuccess, listChallengesFailure } from '../../actions/challenges';
import ChallengeMapper from '../mappers/ChallengeMapper';
import ErrorMapper from '../mappers/ErrorMapper';
import HTTPCodeException from '../handlers/HTTPCodeException';
import { handleFailure } from '../handlers/failure';

export default class ChallengeAdapter {
  constructor(getAccessToken, driver) {
    this.challengeApi = new ChallengeApi(getAccessToken, driver);
  }

  list() {
    return new Promise((resolve) => {
      this.challengeApi.list()
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { challenges } = ChallengeMapper.fromAPIList(body.data);
              resolve(listChallengesSuccess(challenges));
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, listChallengesFailure));
    });
  }
}
