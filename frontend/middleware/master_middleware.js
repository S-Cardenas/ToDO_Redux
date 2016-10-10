import { applyMiddleware } from 'redux';

import TodoMiddleware from './todo_middleware.js';

const masterMiddleware = applyMiddleware(
  TodoMiddleware
);

export default masterMiddleware;
