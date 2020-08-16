import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';
import { TodoType } from '../types';

interface Props {
  todos: TodoType[];
}

const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSize.md};
`;

const Todos: React.FC<Props> = (props) => {
  return (
    <div>
      <Subtitle>Todo List</Subtitle>
      <TodoItem {...props} />
    </div>
  );
};

export default Todos;
