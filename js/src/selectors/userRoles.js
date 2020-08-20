
import ItemNotFoundException from '../utils/app/Exceptions/ItemNotFoundException';

const local = state => state.userRoles;

export function getById(state, id) {
  const entity = local(state).byId[id]; // eslint-disable-line security/detect-object-injection
  if (!entity) {
    throw new ItemNotFoundException('UserRole', id);
  }
  return entity;
}

export function getByIds(state, ids) {
  return ids.map((id) => getById(state, id));
}

export const getAll = (state) => {
  return Object.values(local(state).byId);
};
