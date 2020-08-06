import React from 'react';
import { useMutation, queryCache } from 'react-query';

const toggleTodo = async (obj) => {
  const res = await fetch(`http://localhost:3001/todos/${obj.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return res.json();
};

export default function Todos({ todo }) {
  const [mutate] = useMutation(toggleTodo, {
    // onSuccess: () => queryCache.invalidateQueries('todos'), // Causes a full refetch
    onSuccess: (toggled) => {
      queryCache.setQueryData(['todos'], (prevData) => {
        const newTodos = prevData.map((e) => {
          if (e.id === toggled.id) {
            return { ...e, completed: !e.completed };
          } else {
            return e;
          }
        });
        return newTodos;
      });
    },
  });

  const onToggleTodo = async (e) => {
    let id = e.target.id;
    let title = e.target.parentElement.htmlFor;

    try {
      await mutate({ id, title, completed: e.target.checked });
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
