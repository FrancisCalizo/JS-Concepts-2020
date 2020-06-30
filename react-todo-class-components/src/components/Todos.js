import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todos extends Component {
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
