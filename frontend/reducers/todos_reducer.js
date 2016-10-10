import { RECEIVE_TODOS } from '../actions/todo_action.js';

const TodosReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
    let newState = {};
    action.todos.forEach(todo => newState[todo.id] = todo);
    return newState;
    default:
      return state;
  }
};

export default TodosReducer;


// const defaultState = {
//   "1": {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   "2": {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// };
