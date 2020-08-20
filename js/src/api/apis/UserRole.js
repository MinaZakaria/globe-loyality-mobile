export default class UserRoleApi {
  constructor(getAccessToken, driver) {
    this.driver = driver;
    this.getAccessToken = getAccessToken;
    this.prefix = '/user-roles';
  }

  list() {
    return this.driver.get(
      `${this.prefix}`,
      {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    );
  }
}
