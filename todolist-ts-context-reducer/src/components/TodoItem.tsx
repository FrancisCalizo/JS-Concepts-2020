import React from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li style={liStyles}>
      <label htmlFor={todo.title}>
        <input
          type="checkbox"
          id={todo.title}
          checked={todo.completed}
          onChange={toggleTodo}
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
