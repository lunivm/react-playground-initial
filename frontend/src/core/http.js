import axios from 'axios';
import getConfig from './config';

export const http = {
  get(url, queryParams) {
    return axios.get(`${getConfig('apiUrl')}${url}`).then(i => i.data);
  }
};
