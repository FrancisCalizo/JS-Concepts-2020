import React, { useState, useEffect } from 'react';
import TodoContext from './todoContext';

const TodoState: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TodoContext.Provider value={{ todos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
