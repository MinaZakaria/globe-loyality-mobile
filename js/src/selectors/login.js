import { getById as getUserRoleById } from './userRoles';

const local = state => state.login;
export const getAccessToken = state => local(state).accessToken;

export function getCurrentUser(state) {
  let currentUser = local(state).currentUser;
  currentUser.role = currentUser.roleId ? getUserRoleById(state, currentUser.roleId) : null;
  return currentUser;
}
