import React, { useState } from 'react';
import './App.css';

import { initialTodos } from './data/todos';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import TodoState from './context/TodoState';

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (e) => {
    const newTodos = todos.map((todo) => {
      if (todo.title === e.currentTarget.id) {
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
    <TodoState>
      <div>
        <h1>Todo List</h1>
        <Todos todos={todos} toggleTodo={toggleTodo} />
        <AddTodo />
      </div>
    </TodoState>
  );
}

export default App;
