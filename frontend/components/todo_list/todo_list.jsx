import React from 'react';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos } = this.props;
    var list = todos.map(todo => <li>{todo.title}</li>);
    return(
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
};

export default TodoList;
