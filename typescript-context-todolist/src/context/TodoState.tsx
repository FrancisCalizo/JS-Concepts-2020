import React, { useState, useEffect } from 'react';
import TodoContext from './todoContext';

const TodoState: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load Todos
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Toggle Todos
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

  // Add Todos
  const addTodo: AddTodo = (input) => {
    setTodos([...todos, { title: input, completed: false }]);
  };

  return (
    <TodoContext.Provider value={{ todos, toggleTodo, addTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
