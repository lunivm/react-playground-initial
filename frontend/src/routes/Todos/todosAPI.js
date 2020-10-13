import { http } from '../../core/http';

export async function getAllTodos() {
  return http.get('/todos');
}
