import {
  checkHasId,
  removeUndefinedKeys,
  uniqueEntities
} from '../../utils/helpers';

export function fromAPI(apiChallenge) {
  checkHasId(apiChallenge);

  return {
    challenge: removeUndefinedKeys({
      id: apiChallenge.id,
      name: apiChallenge.name,
      description: apiChallenge.description,
      imageUrl: apiChallenge.image_url,
      programId: apiChallenge.program_id,
      createdBy: apiChallenge.created_by,
      isActive: apiChallenge.is_active,
      firstPrize: apiChallenge.first_prize,
      secondPrize: apiChallenge.second_prize,
      thirdPrize: apiChallenge.third_prize,
      createdAt: apiChallenge.created_at,
      updatedAt: apiChallenge.updated_at,
    }),
  };
}

export function fromAPIList(apiChallenges) {
  let result = {
    challenges: [],
  };
  let allChallenges = [];

  apiChallenges.forEach(apiChallenge => {
    const { challenge } = fromAPI(apiChallenge);
    allChallenges.push(challenge);
  });

  result.challenges = uniqueEntities(allChallenges);

  return result;
}

export function toAPI(challenge) {
  return removeUndefinedKeys({
    name: challenge.name,
    description: challenge.description,
    program_id: challenge.programId,
    first_prize: challenge.firstPrize,
    second_prize: challenge.secondPrize,
    third_prize: challenge.thirdPrize,
  });
}

export default {
  toAPI,
  fromAPI,
  fromAPIList
};
