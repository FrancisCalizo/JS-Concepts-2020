import React from 'react';
import { ThemeProvider } from 'styled-components';

import Todos from './components/Todos';
import { TodoType } from './types';
import Theme from './config';

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
    <ThemeProvider theme={Theme}>
      <h1>Todos</h1>
      <Todos todos={todos} />
    </ThemeProvider>
  );
}

export default App;
