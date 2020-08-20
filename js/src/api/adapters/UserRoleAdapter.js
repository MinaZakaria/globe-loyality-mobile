import UserRoleApi from '../apis/UserRole';
import {
  listUserRolesApiSuccess,
  listUserRolesApiFailure,
} from '../../actions/userRoles';
import UserRoleMapper from '../mappers/UserRoleMapper';
import ErrorMapper from '../mappers/ErrorMapper';
import HTTPCodeException from '../handlers/HTTPCodeException';
import { handleFailure } from '../handlers/failure';

export default class UserRoleAdapter {
  constructor(getAccessToken, driver) {
    this.userRoleApi = new UserRoleApi(getAccessToken, driver);
  }

  list() {
    return new Promise((resolve) => {
      this.userRoleApi.list()
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { userRoles } = UserRoleMapper.fromAPIList(body.data);
              resolve(listUserRolesApiSuccess(userRoles));
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, listUserRolesApiFailure));
    });
  }
}
