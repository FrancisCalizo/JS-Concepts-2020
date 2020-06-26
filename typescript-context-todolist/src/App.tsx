import React from 'react';

import TodoState from './context/TodoState';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <TodoState>
      <div>
        <Todos />
        <AddTodo />
      </div>
    </TodoState>
  );
}

export default App;
