import actionTypes from './actionTypes';

export function addTodo(content) {
  return {
    type: actionTypes.todos.addTodo,
    payload: content
  }
}
