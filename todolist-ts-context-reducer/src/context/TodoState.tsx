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

  const toggleTodo: ToggleTodo = (id) => {
    const newTodos = state.todos.map((todo) => {
      if (todo.title === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    dispatch({
      type: 'TOGGLE_TODO',
      payload: newTodos,
    });
  };

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, toggleTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
