import React, { useState, FormEvent } from 'react';
import './App.css';

import { initialTodos } from './data/todos';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

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

  // const addTodo = (e: FormEvent) => {
  //   e.preventDefault();
  //   if (inputText !== '') {
  //     setTodos([
  //       ...todos,
  //       {
  //         id: Math.floor(Math.random() * 100),
  //         title: inputText,
  //         completed: false,
  //       },
  //     ]);

  //     setInputText('');
  //   }
  // };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todos todos={todos} toggleTodo={toggleTodo} />
      <AddTodo />
    </div>
  );
}

export default App;
