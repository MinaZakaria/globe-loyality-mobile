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

  list() {
    return this.driver.get(
      `${this.prefix}`,
      {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    );
  }

  editStatus(userId, statusId) {
    let path = `${this.prefix}/${userId}`;
    if (statusId === 1) {
      path = `${path}/approve`;
    } else if (statusId === 3) {
      path = `${path}/block`;
    }
    return this.driver.post(
      path,
      {},
      {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    );
  }
}
