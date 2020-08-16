import React from 'react';
import styled from 'styled-components';

import { TodoType } from '../types';

interface Props {
  todos: TodoType[];
}

const ListItem = styled.li`
  color: ${(props) => props.theme.colors.primary};
`;

const TodoItem: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos?.map((todo) => (
        <ListItem key={todo.id}>{todo.title}</ListItem>
      ))}
    </>
  );
};

export default TodoItem;
