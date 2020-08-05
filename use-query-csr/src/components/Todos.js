import React from 'react';
import Todo from './Todo';

export default function Todos({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
