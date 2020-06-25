import React, { ChangeEvent } from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  const handleChange = (e: ChangeEvent) => {
    toggleTodo(e.target.id);
  };

  return (
    <div>
      <label htmlFor={todo.title}>
        <input
          type="checkbox"
          id={todo.title}
          checked={todo.completed}
          onChange={handleChange}
        />
        {todo.title}
      </label>
    </div>
  );
};

export default TodoItem;
