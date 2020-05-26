import React from 'react';

import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

const Todos: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default Todos;
