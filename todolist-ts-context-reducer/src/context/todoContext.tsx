import React from 'react';

interface ContextState {
  todos: Todo[];
  addTodo: AddTodo;
}

const todoContext = React.createContext({} as ContextState);

export default todoContext;
