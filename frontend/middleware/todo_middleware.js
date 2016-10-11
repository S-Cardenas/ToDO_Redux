import { REQUEST_TODOS,
          RECEIVE_TODOS,
          CREATE_TODO,
          receiveTodos,
          receiveTodo} from '../actions/todo_action.js';

import { fetchTodos,
         createTodo} from '../util/todo_api_util.js';


export default ({ getState, dispatch }) => next => action => {
  const todosSuccess = (data) => dispatch(receiveTodos(data));
  const todoSuccess = data => dispatch(receiveTodo(data));
  const error = (e) => console.log(e);

  switch(action.type) {
    case REQUEST_TODOS:
      fetchTodos(todosSuccess, error);
      break;
    case CREATE_TODO:
      createTodo(action.todo, todoSuccess, error);
      break;
    default:
      next(action);
  }
};
