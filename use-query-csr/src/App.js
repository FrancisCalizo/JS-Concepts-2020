import React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  const { data: todos, status, error } = useQuery('todos', async () => {
    return await (await fetch('http://localhost:3001/todos')).json();
  });

  if (status === 'loading') return <div>loading...</div>;
  if (status === 'error') return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <AddTodo />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
