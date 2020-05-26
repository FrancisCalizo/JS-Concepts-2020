import React from 'react';

interface IState {
  todos: Todo[];
}

interface IAction {
  type: ActionType;
  payload: {
    todos: Todo[];
  };
}

const TodoReducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [{ id: 3, title: 'blah', completed: false }],
      };
    default:
      return state;
  }
};

export default TodoReducer;
