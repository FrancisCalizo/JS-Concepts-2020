import React from 'react';

const TodoItem = ({ todo, handleChange }) => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <label htmlFor={todo.name}>
        <input
          type="checkbox"
          checked={todo.completed}
          id={todo.name}
          onChange={handleChange}
        />
        {todo.name}
      </label>
    </li>
  );
};

export default TodoItem;
