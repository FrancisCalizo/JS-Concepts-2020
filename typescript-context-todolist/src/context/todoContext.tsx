import React from 'react';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  addTodo: AddTodo;
}

const todoContext = React.createContext<Props | undefined>(undefined);

export default todoContext;
