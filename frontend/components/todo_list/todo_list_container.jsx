import { connect } from 'react-redux';
import TodoList from './todo_list';

import { allTodos } from '../../reducers/selector.js';
import { requestTodos } from '../../actions/todo_action.js';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
