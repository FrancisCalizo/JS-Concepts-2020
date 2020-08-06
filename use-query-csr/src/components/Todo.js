import React from 'react';
import { useMutation, queryCache } from 'react-query';

const toggleTodo = async ({ id, completed }) => {
  const {
    state: { data },
  } = queryCache.getQuery('todos');

  const updatedTodo = data.filter((todo) => todo.id === Number(id));

  if (updatedTodo.length > 0) {
    updatedTodo[0].completed = !updatedTodo[0].completed;
  }

  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedTodo),
  });
};

export default function Todos({ todo }) {
  const [mutate] = useMutation(toggleTodo);

  const onToggleTodo = async (e) => {
    let id = e.target.id;

    try {
      await mutate({ id, completed: e.target.checked });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <li style={{ listStyleType: 'none' }}>
        <label htmlFor={todo.title}>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.completed}
            onChange={onToggleTodo}
            style={{ cursor: 'pointer' }}
          />
          {todo.title}
        </label>
      </li>
    </>
  );
}
