import { http } from '../../core/http';

export async function getAllFeatures() {
  return http.get('/featured');
}
