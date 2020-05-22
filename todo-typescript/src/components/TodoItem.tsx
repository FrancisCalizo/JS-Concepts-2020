import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo<SyntheticEvent>;
}

interface StyledListItem {
  completed: boolean;
}

const ListItem = styled.li<StyledListItem>`
  list-style-type: none;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <ListItem completed={todo.completed}>
      <label htmlFor={todo.name}>
        <input
          type="checkbox"
          id={todo.name}
          checked={todo.completed}
          onChange={toggleTodo}
        />
        {todo.name}
      </label>
    </ListItem>
  );
};

export default TodoItem;
