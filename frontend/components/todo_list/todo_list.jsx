import React from 'react';

import TodoListItem from './todo_list_item';
import TodoForm from './todo_list_form.jsx';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, createTodo } = this.props;
    var list = todos.map(todo => <TodoListItem key={todo.id} todo={todo} />);
    return(
      <div>
        <div>
          <ul>
            {list}
          </ul>
        </div>
        <TodoForm createTodo={createTodo}/>
      </div>

    );
  }
}

export default TodoList;
