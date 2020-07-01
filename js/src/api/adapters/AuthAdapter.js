import AuthApi from '../apis/Auth';
import { loginApiSuccess, loginApiFailure } from '../../actions/login';
import { fromAPI } from '../mappers/AuthMapper';

export default class AuthAdapter {
  constructor(getToken, driver) {
    this.authApi = new AuthApi(getToken, driver);
  }

  login(email, password) {
    return new Promise((resolve) => {
      this.authApi.login(email, password)
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { accessToken, tokenType, expiresIn } = fromAPI(body);
              resolve(loginApiSuccess(accessToken, tokenType, expiresIn));
              return;
            }
            default:
              resolve(loginApiFailure(`Error response with status ${status}: ${body}`));
          }
        })
        .catch(err => { resolve(loginApiFailure(String(err))); });
    });
  }
}
