import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => {
  return (
    <div style={gridContainer}>
      <div>
        <h2>Articles</h2>
        <List />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  );
};

const gridContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
};

export default App;
