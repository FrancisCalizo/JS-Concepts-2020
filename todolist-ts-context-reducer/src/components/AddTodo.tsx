import React, { ChangeEvent } from 'react';

interface Props {
  addTodo: AddTodo;
  inputText: string;
  handleTyping: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddTodo: React.FC<Props> = ({ addTodo, inputText, handleTyping }) => {
  return (
    <form onSubmit={addTodo}>
      <input type="text" value={inputText} onChange={handleTyping} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
