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
  );
};

export default Todos;
