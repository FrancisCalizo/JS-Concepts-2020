import React, { SyntheticEvent } from 'react';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo<SyntheticEvent>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label htmlFor={todo.name}>
        <input
          type="checkbox"
          id={todo.name}
          checked={todo.completed}
          onChange={toggleTodo}
        />
        {todo.name}
      </label>
    </li>
  );
};

export default TodoItem;
