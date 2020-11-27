import ChallengeSubmittionApi from '../apis/ChallengeSubmittion';
import {
  listChallengeSubmittionsApiSuccess,
  listChallengeSubmittionsApiFailure,
  editChallengeSubmittionStatusApiSuccess,
  editChallengeSubmittionStatusApiFailure
} from '../../actions/challengeSubmittions';
import ChallengeSubmittionMapper from '../mappers/ChallengeSubmittionMapper';
import ErrorMapper from '../mappers/ErrorMapper';
import HTTPCodeException from '../handlers/HTTPCodeException';
import { handleFailure } from '../handlers/failure';

export default class ChallengeSubmittionAdapter {
  constructor(getAccessToken, driver) {
    this.challengeSubmittionApi = new ChallengeSubmittionApi(getAccessToken, driver);
  }

  list() {
    return new Promise((resolve) => {
      this.challengeSubmittionApi.list()
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { submittions } = ChallengeSubmittionMapper.fromAPIList(body.data);
              resolve(listChallengeSubmittionsApiSuccess(submittions));
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, listChallengeSubmittionsApiFailure));
    });
  }

  editStatus(submittionId, statusId) {
    console.log('editStatus', submittionId, statusId);
    return new Promise((resolve) => {
      this.challengeSubmittionApi.editStatus(submittionId, statusId)
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { submittion } = ChallengeSubmittionMapper.fromAPI(body.data);
              console.log('200', submittion);
              resolve(editChallengeSubmittionStatusApiSuccess(submittion));
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, editChallengeSubmittionStatusApiFailure));
    });
  }
}
