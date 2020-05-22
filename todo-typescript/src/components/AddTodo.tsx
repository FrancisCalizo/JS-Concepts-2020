import React, { useState, ChangeEvent, FormEvent } from 'react';

const AddTodo = () => {
  const [current, setCurrent] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrent(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <input type="text" value={current} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
