import React, { useContext } from 'react';

import TodoItem from './TodoItem';

import TodoContext from '../context/todoContext';

const Todos: React.FC = () => {
  const todoContext = useContext(TodoContext);
  const { todos } = todoContext;

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
