import React, { Component } from 'react';
import './App.css';

import { initialTodos } from './data';
import Todos from './components/Todos';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: initialTodos,
    };
  }

  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.title === id) {
        return { title: todo.title, completed: !todo.completed };
      } else {
        return { ...todo };
      }
    });

    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}
