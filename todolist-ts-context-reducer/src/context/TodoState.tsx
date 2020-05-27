import React, { useReducer, Reducer } from 'react';
import TodoContext from './todoContext';

import { initialTodos } from '../data/todos';
import TodoReducer from './todoReducer';

const TodoState: React.FC = (props) => {
  const initialState = {
    todos: initialTodos,
  };

  const [state, dispatch] = useReducer<Reducer<IState, Action>>(
    TodoReducer,
    initialState
  );

  const addTodo: AddTodo = (inputText) => {
    dispatch({
      type: 'ADD_TODO',
      payload: inputText,
    });
  };

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
