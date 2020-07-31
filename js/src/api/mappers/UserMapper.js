import {
  checkHasId,
  removeUndefinedKeys
} from '../../utils/helpers';

export function fromAPI(apiEmployee) {
  checkHasId(apiEmployee);

  return {
    user: removeUndefinedKeys({
      id: apiEmployee.id,
      name: apiEmployee.name,
      email: apiEmployee.email,
      points: apiEmployee.points,
      isAdmin: apiEmployee.is_admin,
      statusId: apiEmployee.status_id,
      roleId: apiEmployee.role_id,
      emailVerifiedAt: apiEmployee.email_verified_at,
      createdAt: apiEmployee.createdAt,
      updatedAt: apiEmployee.updatedAt,
    }),
  };
}

export function toAPI(user) {
  return removeUndefinedKeys({
    name: user.name,
    email: user.email,
    password: user.password,
    password_confirmation: user.passwordConfirmation,
    role_id: user.roleId,
  });
}

export default {
  fromAPI,
  toAPI
};
