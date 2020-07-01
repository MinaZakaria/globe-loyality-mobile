import factory from './factory';
import Rest from '../utils/api/rest';
import apiConfig from '../config/api';

export default (getToken) => {
  let driver = new Rest(apiConfig.ApiUrl, apiConfig.requestTimeout);
  return factory(getToken, driver);
}; 
