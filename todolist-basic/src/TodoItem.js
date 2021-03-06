import React from 'react';

const TodoItem = ({ todo, handleChange }) => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <label htmlFor={todo.name}>
        <input
          type="checkbox"
          id={todo.name}
          checked={todo.completed}
          onChange={handleChange}
        />
        {todo.name}
      </label>
    </li>
  );
};

export default TodoItem;
