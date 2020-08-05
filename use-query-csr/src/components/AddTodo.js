import React, { useState } from 'react';
import { useMutation } from 'react-query';

const addTodo = async ({ input }) => {
  let todo = {
    title: input,
    completed: false,
  };

  console.log('wroking');
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
  const [mutate] = useMutation(addTodo);

  const onAddTodo = async (e) => {
    e.preventDefault();

    try {
      await mutate({ input });
    } catch (err) {
      console.log(err);
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
