import React, { ChangeEvent, useState } from 'react';

interface Props {
  // addTodo: AddTodo;
}

// const AddTodo: React.FC<Props> = ({ addTodo}) => {
const AddTodo: React.FC<Props> = () => {
  const [inputText, setInputText] = useState('');

  const handleTyping = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    // <form onSubmit={addTodo}>
    <form>
      <input type="text" value={inputText} onChange={handleTyping} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
