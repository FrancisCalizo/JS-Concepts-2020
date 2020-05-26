import React, { useReducer, Reducer } from 'react';
import TodoContext from './todoContext';

import { initialTodos } from '../data/todos';
import TodoReducer from './todoReducer';

interface IState {
  todos: Todo[];
}

interface IAction {
  type: ActionType;
  payload: {
    todos: Todo[];
  };
}

const TodoState: React.FC = (props) => {
  const initialState = {
    todos: initialTodos,
  };

  const [state, dispatch] = useReducer<Reducer<IState, IAction>>(
    TodoReducer,
    initialState
  );

  return (
    <TodoContext.Provider value={{ todos: state.todos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
