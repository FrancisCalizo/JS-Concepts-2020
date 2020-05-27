import React, { ChangeEvent, useState, useContext, FormEvent } from 'react';

import TodoContext from '../context/todoContext';

const AddTodo: React.FC = () => {
  const todoContext = useContext(TodoContext);
  const { todos, addTodo } = todoContext;

  const [inputText, setInputText] = useState('');

  const handleTyping = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(todos);
    addTodo(inputText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputText} onChange={handleTyping} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
