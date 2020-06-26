import React from 'react';

interface Props {
  todos: Todo[];
}

const todoContext = React.createContext<Props>({
  todos: [],
});

export default todoContext;
