import { REQUEST_TODOS, RECEIVE_TODOS, receiveTodos } from '../actions/todo_action.js';

import { fetchTodos } from '../util/todo_api_util.js';


export default ({ getState, dispatch }) => next => action => {
  const success = (data) => dispatch(receiveTodos(data));
  const error = (e) => console.log(e);

  switch(action.type) {
    case REQUEST_TODOS:
      fetchTodos(success, error);
      break;
    default:
      next(action);
  }
};
