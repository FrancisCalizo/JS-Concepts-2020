import React, { useContext } from 'react';

import TodoContext from '../context/todoContext';

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  const { toggleTodo } = todoContext;

  const handleChange: HandleChange = (e) => {
    toggleTodo(e.currentTarget.id);
  };

  return (
    <li style={liStyles}>
      <label htmlFor={todo.title}>
        <input
          type="checkbox"
          id={todo.title}
          checked={todo.completed}
          onChange={handleChange}
        />
        {todo.title}
      </label>
    </li>
  );
};

const liStyles = {
  listStyleType: 'none',
};

export default TodoItem;
