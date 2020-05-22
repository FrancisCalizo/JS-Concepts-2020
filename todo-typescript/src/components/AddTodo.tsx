import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTodoProps {
  addTodo: (newTodo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [current, setCurrent] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrent(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (current !== '') {
      addTodo(current);
      setCurrent('');
    }
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
