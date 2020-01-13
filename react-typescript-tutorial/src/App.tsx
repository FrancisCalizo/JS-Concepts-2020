import React from "react";
import Textfield from "./TextField";
import { Counter } from "./Counter";

const App: React.FC = () => {
  return (
    <div>
      <Textfield
        text="hello"
        person={{ firstName: "Mike", lastName: "Jones" }}
      />
      <Counter>
        {(count, setCount) => (
          <div>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
