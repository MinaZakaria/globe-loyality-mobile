import UserApi from '../apis/User';
import { loginApiSuccess, loginApiFailure } from '../../actions/login';
import {
  listUsersApiSuccess,
  listUsersApiFailure,
  editUserStatusApiSuccess,
  editUserStatusApiFailure
} from '../../actions/users';
import { signUpApiSuccess, signUpApiFailure } from '../../actions/signUp';
import { logoutApiSuccess, logoutApiFailure } from '../../actions/logout';
import UserMapper from '../mappers/UserMapper';
import ErrorMapper from '../mappers/ErrorMapper';
import HTTPCodeException from '../handlers/HTTPCodeException';
import { handleFailure } from '../handlers/failure';

export default class UserAdapter {
  constructor(getAccessToken, driver) {
    this.userApi = new UserApi(getAccessToken, driver);
  }

  login(email, password) {
    return new Promise((resolve) => {
      this.userApi.login(email, password)
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { user } = UserMapper.fromAPI(body.data.user);
              resolve(loginApiSuccess(body.data.token, user));
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, loginApiFailure));
    });
  }

  register(userData) {
    return new Promise((resolve) => {
      this.userApi.register(UserMapper.toAPI(userData))
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { user } = UserMapper.fromAPI(body.data.user);
              resolve(signUpApiSuccess(body.data.token, user));
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, signUpApiFailure));
    });
  }

  logout() {
    return new Promise((resolve) => {
      this.userApi.logout()
        .then(([status, body]) => {
          switch (status) {
            case 204: {
              resolve(logoutApiSuccess());
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, logoutApiFailure));
    });
  }

  list() {
    return new Promise((resolve) => {
      this.userApi.list()
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { users } = UserMapper.fromAPIList(body.data);
              resolve(listUsersApiSuccess(users));
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, listUsersApiFailure));
    });
  }

  editStatus(userId, statusId) {
    return new Promise((resolve) => {
      this.userApi.editStatus(userId, statusId)
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { user } = UserMapper.fromAPI(body.data);
              resolve(editUserStatusApiSuccess(user));
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, editUserStatusApiFailure));
    });
  }
}
