import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Props {
  addTodo: AddTodo;
}

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (input) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={input} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTodo;
