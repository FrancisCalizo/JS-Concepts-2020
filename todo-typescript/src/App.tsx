import React from 'react';
import Todos from './components/Todos';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>TypeScript Todo List</h1>
      <Todos />
    </div>
  );
};

export default App;
