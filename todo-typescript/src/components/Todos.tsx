<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { initialTodos } from '../data';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [clicked, setClicked] = useState('');

  useEffect(() => {
    setTodos([{ id: 5, name: 'Write a todo', completed: false }]);
  }, [clicked]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </div>
=======
import React, { Fragment, SyntheticEvent } from 'react';
import TodoItem from './TodoItem';

interface TodosInterface {
  todos: Todo[];
  toggleTodo: ToggleTodo<SyntheticEvent>;
}

const Todos: React.FC<TodosInterface> = ({ todos, toggleTodo }) => {
  return (
    <Fragment>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </Fragment>
>>>>>>> 6337e3de5d87c7720dd03bd9bd9f0787e9f38b5a
  );
};

export default Todos;
