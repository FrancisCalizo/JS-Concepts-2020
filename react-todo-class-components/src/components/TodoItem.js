import React, { Component } from 'react';

export default class TodoItem extends Component {
  handleChange = (e) => {
    this.props.toggleTodo(e.target.id);
  };

  render() {
    const {
      todo: { title, completed },
    } = this.props;

    return (
      <div>
        <label htmlFor={title}>
          <input
            type="checkbox"
            id={title}
            checked={completed}
            onChange={this.handleChange}
          />
          {title}
        </label>
      </div>
    );
  }
}
