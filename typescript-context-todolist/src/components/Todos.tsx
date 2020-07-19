import React, { useContext } from 'react';
import TodoItem from './TodoItem';

import TodoContext from '../context/todoContext';

const Todos: React.FC = () => {
  const todoContext = useContext(TodoContext);
  const { toggleTodo, todos } = todoContext;

  return (
    <div>
      {todos.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default Todos;
