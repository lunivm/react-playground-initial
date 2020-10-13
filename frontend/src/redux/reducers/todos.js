import actionTypes from '../actions/actionTypes';

const initialState = [];
let newId = 0;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.todos.addTodo:
      return state.concat({
        id: newId++, // todo: remove hack
        title: action.payload
      });
    default:
      return state;
  }
}
