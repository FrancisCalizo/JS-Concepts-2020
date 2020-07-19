import React, { Component, ChangeEvent, FormEvent } from 'react';

interface Props {
  addTodo: (title: string) => void;
}

interface State {
  input: string;
}

class AddTodo extends Component<Props, State> {
  state = {
    input: '',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (this.state.input !== '') {
      this.props.addTodo(this.state.input);
      this.setState({ input: '' });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
