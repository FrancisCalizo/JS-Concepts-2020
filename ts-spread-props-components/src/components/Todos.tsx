import React from 'react';

import TodoItem from './TodoItem';
import { TodoType } from '../types';

interface Props {
  todos: TodoType[];
}

const Todos: React.FC<Props> = (props) => {
  return (
    <div>
      <TodoItem {...props} />
    </div>
  );
};

export default Todos;
