import React from 'react';
import { TodoType } from '../types';

interface Props {
  todos: TodoType[];
}

const TodoItem: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
};

export default TodoItem;
