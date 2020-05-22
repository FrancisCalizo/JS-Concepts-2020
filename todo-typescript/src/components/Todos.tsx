import React, { Fragment, SyntheticEvent, useState } from 'react';
import TodoItem from './TodoItem';
import { initialTodos } from '../data';

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (e: SyntheticEvent) => {
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

  return (
    <Fragment>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </Fragment>
  );
};

export default Todos;
