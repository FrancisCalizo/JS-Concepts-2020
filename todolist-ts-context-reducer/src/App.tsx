import React, { useState } from 'react';
import './App.css';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import TodoState from './context/TodoState';

function App() {
  return (
    <TodoState>
      <div>
        <h1>Todo List</h1>
        <Todos />
        <AddTodo />
      </div>
    </TodoState>
  );
}

export default App;
