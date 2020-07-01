import Config from 'react-native-config';

const API_URL = Config.API_URL;
const apiPrefix = '/api';
const ApiUrl = API_URL + apiPrefix;
const requestTimeout = 30000;

export default {
  ApiUrl,
  requestTimeout
};
