import { APPROVED, REJECTED, DECLINED } from '../../constants/ChallengeSubmittionStatueses';

export default class ChallengeSubmittion {
  constructor(getAccessToken, driver) {
    this.driver = driver;
    this.getAccessToken = getAccessToken;
    this.prefix = '/challenge-submittions';
  }

  list() {
    return this.driver.get(
      `${this.prefix}`,
      {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    );
  }

  editStatus(submittionId, statusId, comment) {
    let path = `${this.prefix}/${submittionId}`;
    if (statusId === APPROVED) {
      path = `${path}/approve`;
    } else if (statusId === REJECTED) {
      path = `${path}/reject`;
    } else if (statusId === DECLINED) {
      path = `${path}/decline`;
    }
    return this.driver.post(
      path,
      {
        comment
      },
      {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    );
  }
}
