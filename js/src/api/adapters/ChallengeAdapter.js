import ChallengeApi from '../apis/Challenge';
import {
  listChallengesSuccess,
  listChallengesFailure,
  createChallengeSuccess,
  createChallengeFailure,
  submitChallengeSuccess,
  submitChallengeFailure
} from '../../actions/challenges';

import ChallengeMapper from '../mappers/ChallengeMapper';
import ChallengeSubmittionMapper from '../mappers/ChallengeSubmittionMapper';

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

  create(challengeData) {
    return new Promise((resolve) => {
      this.challengeApi.create(ChallengeMapper.toAPI(challengeData))
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { challenge } = ChallengeMapper.fromAPI(body.data);
              resolve(createChallengeSuccess(challenge));
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, createChallengeFailure));
    });
  }

  submit(challengeId, data) {
    return new Promise((resolve) => {
      this.challengeApi.submit(ChallengeSubmittionMapper.toAPI(challengeId, data))
        .then(([status, body]) => {
          switch (status) {
            case 204: {
              resolve(submitChallengeSuccess());
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, submitChallengeFailure));
    });
  }
}
