
import ItemNotFoundException from '../utils/app/Exceptions/ItemNotFoundException';

const local = state => state.challenges;

export function getById(state, id) {
  const entity = local(state).byId[id]; // eslint-disable-line security/detect-object-injection
  if (!entity) {
    throw new ItemNotFoundException('Challenge', id);
  }
  return entity;
}

export function getByIds(state, ids) {
  return ids.map((id) => getById(state, id));
}

export const getAll = (state) => {
  return Object.values(local(state).byId);
};

export const getAllActive = (state) => {
  return getAll(state).filter(challenge => {
    return challenge.isActive;
  }).sort((o1, o2) => o2.id - o1.id);
};
