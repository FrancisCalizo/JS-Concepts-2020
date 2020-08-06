import React, { useState } from 'react';
import { useMutation, queryCache } from 'react-query';

const addTodo = async ({ input }) => {
  let todo = {
    title: input,
    completed: false,
  };

  const res = await fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'CONTENT-TYPE': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  return await res.json();
};

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [mutate] = useMutation(addTodo, {
    onSuccess: () => queryCache.invalidateQueries('todos'),
  });

  const onAddTodo = async (e) => {
    e.preventDefault();

    if (input) {
      try {
        await mutate({ input });
        setInput('');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <form onSubmit={onAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
