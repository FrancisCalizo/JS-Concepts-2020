import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { initialTodos } from './data';

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleChange = (e) => {
    const newTodos = todos.map((todo) => {
      if (todo.name === e.target.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleChange={handleChange} />
      ))}
    </div>
  );
};

export default Todos;
