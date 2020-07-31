export default class UserApi {
  constructor(getAccessToken, driver) {
    this.driver = driver;
    this.getAccessToken = getAccessToken;
    this.prefix = '/users';
  }

  login(email, password) {
    return this.driver.post(
      `${this.prefix}/auth`,
      {
        email, password
      },
      {}
    );
  }

  register(user) {
    return this.driver.post(
      `${this.prefix}/register`,
      user,
      {}
    );
  }

  logout() {
    return this.driver.post(
      `${this.prefix}/logout`,
      {},
      {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    );
  }
}
