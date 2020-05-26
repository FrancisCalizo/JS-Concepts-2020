import React from 'react';
import { initialTodos } from '../data/todos';

const todoContext = React.createContext({
  todos: initialTodos,
});

export default todoContext;
