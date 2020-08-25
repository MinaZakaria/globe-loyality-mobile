import {
  checkHasId,
  removeUndefinedKeys,
  uniqueEntities
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
      createdAt: apiEmployee.created_at,
      updatedAt: apiEmployee.updated_at,
    }),
  };
}

export function fromAPIList(apiUsers) {
  let result = {
    users: [],
  };
  let allUsers = [];

  apiUsers.forEach(apiUser => {
    const { user } = fromAPI(apiUser);
    allUsers.push(user);
  });

  result.users = uniqueEntities(allUsers);

  return result;
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
  fromAPIList,
  toAPI
};
