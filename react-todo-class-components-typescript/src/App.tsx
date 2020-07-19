import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

interface State {
  todos: Todo[];
}

class App extends Component<{}, State> {
  state = {
    todos: [] as Todo[],
  };

  componentDidMount = async () => {
    const res = await (await fetch('data.json')).json();

    this.setState({ todos: res });
  };

  toggleTodo = (id: string) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.title === id) {
        return { title: id, completed: !todo.completed };
      } else {
        return { ...todo };
      }
    });

    this.setState({ todos: newTodos });
  };

  addTodo = (title: string) => {
    this.setState({
      todos: [...this.state.todos, { title, completed: false }],
    });
  };

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
