import React, { Component, ChangeEvent } from 'react';

interface Props {
  todo: Todo;
  toggleTodo: (id: string) => void;
}

class TodoItem extends Component<Props> {
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.toggleTodo(e.target.id);
  };

  render() {
    return (
      <div>
        <label htmlFor={this.props.todo.title}>
          <input
            type="checkbox"
            id={this.props.todo.title}
            checked={this.props.todo.completed}
            onChange={this.handleChange}
          />
          {this.props.todo.title}
        </label>
      </div>
    );
  }
}

export default TodoItem;
