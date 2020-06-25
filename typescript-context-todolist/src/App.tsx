import React, { useEffect, useState } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleTodo: ToggleTodo = (id) => {
    let newTodos = todos.map((todo) => {
      if (todo.title === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const addTodo: AddTodo = (input) => {
    setTodos([...todos, { title: input, completed: false }]);
  };

  return (
    <div>
      <Todos todos={todos} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
