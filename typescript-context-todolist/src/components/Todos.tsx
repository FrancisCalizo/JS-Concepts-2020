import React, { useContext } from 'react';
import TodoItem from './TodoItem';

import TodoContext from '../context/todoContext';

const Todos: React.FC = () => {
  const todoContext = useContext(TodoContext);

  return (
    <div>
      {todoContext!.todos.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} toggleTodo={todoContext!.toggleTodo} />
      ))}
    </div>
  );
};

export default Todos;
