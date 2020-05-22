import React, { useState, SyntheticEvent } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

import { initialTodos } from './data';

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo<SyntheticEvent> = (e) => {
    const newTodos = todos.map((todo) => {
      if (todo.name === (e.target as HTMLInputElement).id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (newTodo: string) => {
    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * 100), name: newTodo, completed: false },
    ]);
  };

  return (
    <div>
      <h1>TypeScript Todo List</h1>
      <Todos todos={todos} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
};

export default App;
