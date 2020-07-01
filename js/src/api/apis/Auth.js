export default class AuthApi {
  constructor(getToken, driver) {
    this.driver = driver;
    this.getToken = getToken;
    this.prefix = '/auth';
  }

  login(email, password) {
    return this.driver.post(
      `${this.prefix}/login`,
      {
        email, password
      },
      {
        Authorization: `Bearer ${this.getToken()}`
      }
    );
  }
}
