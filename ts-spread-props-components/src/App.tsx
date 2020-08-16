import React from 'react';
import Todos from './components/Todos';

import { TodoType } from './types';

function App() {
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  React.useEffect(() => {
    async function getTodos() {
      const res = await fetch('data.json');
      const data = await res.json();

      setTodos(data.todos);
    }

    getTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
