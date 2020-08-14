export default class ChallengeApi {
  constructor(getAccessToken, driver) {
    this.driver = driver;
    this.getAccessToken = getAccessToken;
    this.prefix = '/challenges';
  }

  list(isActive = 1, programId = null) {
    let path = `${this.prefix}?is_active=${isActive}`;
    if (programId) {
      path = path + `& program_id=${programId}`;
    }
    return this.driver.get(
      path,
      {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    );
  }

  create(challenge) {
    return this.driver.post(
      `${this.prefix}`,
      {
        ...challenge
      },
      {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    );
  }
}
