import React, { Fragment } from 'react';

interface TodoProps {
  todo: Todo;
  setTodos: (todo: Todo[]) => void;
  clicked: string;
  setClicked: (clicked: string) => void;
}

const TodoItem: React.FC<TodoProps> = ({
  todo: { id, name, completed },
  setTodos,
  clicked,
  setClicked,
}) => {
  const handleChange = (e: any) => {
    // setTodos([{id: 5, name:'Write a todo', completed: false}])
    setClicked(e.target.id);
  };

  return (
    <Fragment>
      <li>
        <label htmlFor={name}>
          {name}
          <input
            type="checkbox"
            id={name}
            checked={completed}
            onChange={handleChange}
          />
        </label>
      </li>
    </Fragment>
  );
};

export default TodoItem;
