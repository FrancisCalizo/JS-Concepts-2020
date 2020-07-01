import React, { Component } from 'react';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => void;
}

interface State {}

class Todos extends Component<Props, State> {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, idx) => (
          <TodoItem key={idx} todo={todo} toggleTodo={this.props.toggleTodo} />
        ))}
      </div>
    );
  }
}

export default Todos;
