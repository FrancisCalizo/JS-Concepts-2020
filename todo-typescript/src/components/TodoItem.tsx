import React, { SyntheticEvent } from 'react';

interface TodoItemProps {
  todo: Todo;
  onChange: (event: SyntheticEvent) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onChange }) => {
  return (
    <li>
      <label htmlFor={todo.name}>
        <input
          type="checkbox"
          id={todo.name}
          checked={todo.completed}
          onChange={onChange}
        />
        {todo.name}
      </label>
    </li>
  );
};

export default TodoItem;
