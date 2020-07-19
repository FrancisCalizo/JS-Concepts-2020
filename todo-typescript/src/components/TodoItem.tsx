<<<<<<< HEAD
import React, { Fragment } from 'react';

interface TodoProps {
  todo: Todo;
  setTodos: (todo: Todo[]) => void;
  clicked: string;
  setClicked: (clicked: string) => void;
}

const TodoItem: React.FC<TodoProps> = ({
  todo: { id, name, completed },
  setTodos,
  clicked,
  setClicked,
}) => {
  const handleChange = (e: any) => {
    // setTodos([{id: 5, name:'Write a todo', completed: false}])
    setClicked(e.target.id);
  };

  return (
    <Fragment>
      <li>
        <label htmlFor={name}>
          {name}
          <input
            type="checkbox"
            id={name}
            checked={completed}
            onChange={handleChange}
          />
        </label>
      </li>
    </Fragment>
=======
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
>>>>>>> 6337e3de5d87c7720dd03bd9bd9f0787e9f38b5a
  );
};

export default TodoItem;
