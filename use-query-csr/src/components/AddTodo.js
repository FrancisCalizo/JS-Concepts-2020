import React, { useState } from 'react';

const AddTodo = () => {
  const [input, setInput] = useState('');

  return (
    <div>
      <form>
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
