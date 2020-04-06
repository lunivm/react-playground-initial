import axios from 'axios';
import getConfig from '../../core/config';

export async function getAllFeatures() {
  return axios.get(getConfig('apiUrl') + '/featured').then(i => i.data);
}
