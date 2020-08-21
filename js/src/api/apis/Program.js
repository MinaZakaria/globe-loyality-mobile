export default class ProgramApi {
  constructor(getAccessToken, driver) {
    this.driver = driver;
    this.getAccessToken = getAccessToken;
    this.prefix = '/programs';
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
