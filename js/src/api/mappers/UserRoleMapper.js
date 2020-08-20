import {
  checkHasId,
  removeUndefinedKeys,
  uniqueEntities
} from '../../utils/helpers';

export function fromAPI(apiUserRole) {
  checkHasId(apiUserRole);

  return {
    userRole: removeUndefinedKeys({
      id: apiUserRole.id,
      name: apiUserRole.name,
    }),
  };
}

export function fromAPIList(apiUserRoles) {
  let result = {
    userRoles: [],
  };
  let allUserRoles = [];

  apiUserRoles.forEach(apiUserRole => {
    const { userRole } = fromAPI(apiUserRole);
    allUserRoles.push(userRole);
  });

  result.userRoles = uniqueEntities(allUserRoles);

  return result;
}

export default {
  fromAPI,
  fromAPIList
};
