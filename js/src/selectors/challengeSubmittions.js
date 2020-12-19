import ItemNotFoundException from '../utils/app/Exceptions/ItemNotFoundException';
import { getCurrentUser } from './login';

const local = state => state.challengeSubmittions;

export function getById(state, id) {
  const submittion = local(state).byId[id]; // eslint-disable-line security/detect-object-injection
  if (!submittion) {
    throw new ItemNotFoundException('Challenge Submittion', id);
  }

  return submittion;
}

export function getByIds(state, ids) {
  return ids.map((id) => getById(state, id));
}

export const getAll = (state) => {
  return Object.values(local(state).byId);
};

export const getByStatus = (state, statusId) => {
  return getAll(state).filter(submittion => {
    return submittion.statusId == statusId;
  }).sort((o1, o2) => o2.challenge.programId - o1.challenge.programId);
};

export const getByUserId = (state, userId) => {
  return getAll(state).filter(submittion => {
    return submittion.user.id == userId;
  }).sort((o1, o2) => o2.challenge.programId - o1.challenge.programId);
};

export const getForCurrentUser = (state) => {
  const currentUser = getCurrentUser(state);
  return getByUserId(state, currentUser.id);
};
