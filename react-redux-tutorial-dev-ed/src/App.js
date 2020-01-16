import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

function App() {
  // Use Selector allows you to extract data from the Redux store state
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged && (
        <h2>valuable information I shouldn't see if not logged in</h2>
      )}
    </div>
  );
}

export default App;
