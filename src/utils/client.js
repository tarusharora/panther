import Axios from 'axios';

import { apiBaseUrl } from '../constants/apiBaseUrl';

const TYPE_JSON = 'application/json';

const apiClient = Axios.create({
  baseURL: apiBaseUrl,
  headers: {
    common: {
      Accept: TYPE_JSON,
      'Content-Type': TYPE_JSON
    },
    post: {
      'Content-Type': TYPE_JSON
    }
  }
});

export { apiClient };
