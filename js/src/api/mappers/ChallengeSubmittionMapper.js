import {
  checkHasId,
  removeUndefinedKeys,
  uniqueEntities
} from '../../utils/helpers';

import ChallengeMapper from './ChallengeMapper';
import UserMapper from './UserMapper';

export function fromAPI(apiSubmittion) {
  checkHasId(apiSubmittion);

  const { user } = apiSubmittion.user ? UserMapper.fromAPI(apiSubmittion.user) : {};
  const { challenge } = apiSubmittion.challenge ? ChallengeMapper.fromAPI(apiSubmittion.challenge) : {};

  return {
    submittion: removeUndefinedKeys({
      id: apiSubmittion.id,
      user,
      challenge,
      image: apiSubmittion.image,
      points: apiSubmittion.points,
      statusId: apiSubmittion.status_id,
      comment: apiSubmittion.comment,
    }),
  };
}

export function fromAPIList(apiSubmittions) {
  let result = {
    submittions: [],
  };
  let allSubmittions = [];

  apiSubmittions.forEach(apiSubmittion => {
    const { submittion } = fromAPI(apiSubmittion);
    allSubmittions.push(submittion);
  });

  result.submittions = uniqueEntities(allSubmittions);

  return result;
}

export function toAPI(challengeId, data) {
  return removeUndefinedKeys({
    challenge_id: challengeId,
    points: data.points,
    image: data.image,
  });
}

export default {
  fromAPI,
  fromAPIList,
  toAPI,
};
