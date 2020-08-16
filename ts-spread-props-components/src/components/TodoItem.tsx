import React from 'react';
import { TodoType } from '../types';

interface Props {
  todos: TodoType[];
}

const TodoItem: React.FC<Props> = ({ todos }) => {
  console.log(todos);
  return (
    <>
      <h2>Check the console</h2>
    </>
  );
};

export default TodoItem;
