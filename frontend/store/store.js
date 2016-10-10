import { createStore } from 'redux';

import RootReducer from '../reducers/root_reducer.js';
import masterMiddleware from '../middleware/master_middleware.js';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    masterMiddleware
  )
);

export default configureStore;
