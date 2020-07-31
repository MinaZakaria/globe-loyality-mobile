import { defaultHTTPHandlers } from './HTTPCodeTransformers';
import { UN_KNOWN, TIMEOUT } from '../../constants/ApiErrors';

export default {
  ...defaultHTTPHandlers,
  unknown: () => {
    return {
      type: UN_KNOWN,
      details: {}
    };
  },
  timeout: (error) => {
    return {
      type: TIMEOUT,
      details: { timeout: error.timeout }
    };
  },
};
