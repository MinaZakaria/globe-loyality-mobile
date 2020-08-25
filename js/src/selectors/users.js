import { getById as getUserRoleById } from './userRoles';

import ItemNotFoundException from '../utils/app/Exceptions/ItemNotFoundException';

const local = state => state.users;

export function getById(state, id) {
  const user = local(state).byId[id]; // eslint-disable-line security/detect-object-injection
  if (!user) {
    throw new ItemNotFoundException('User', id);
  }

  user.role = user.roleId ? getUserRoleById(state, user.roleId) : null;
  return user;
}

export function getByIds(state, ids) {
  return ids.map((id) => getById(state, id));
}

export const getAll = (state) => {
  return Object.values(local(state).byId);
};

export const getByStatus = (state, statusId) => {
  return getAll(state).filter(user => {
    return user.statusId == statusId;
  });
};

