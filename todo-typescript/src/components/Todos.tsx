import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { initialTodos } from '../data';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [clicked, setClicked] = useState('');

  useEffect(() => {
    setTodos([{ id: 5, name: 'Write a todo', completed: false }]);
  }, [clicked]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </div>
  );
};

export default Todos;
