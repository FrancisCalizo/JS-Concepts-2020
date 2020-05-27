import React from 'react';

const TodoReducer: React.Reducer<IState, Action> = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: Math.floor(Math.random() * 100),
            title: action.payload,
            completed: false,
          },
        ],
      };
    case 'TOGGLE_TODO':
      return { todos: action.payload };
    default:
      return state;
  }
};

export default TodoReducer;
