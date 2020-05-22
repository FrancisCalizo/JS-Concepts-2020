Some Redux practice...

https://www.youtube.com/watch?v=CVpUuw9XSjY&t=452s

https://github.com/zalmoxisus/redux-devtools-extension

https://react-redux.js.org/next/api/hooks - useSelector() for extraction data from the Redux store state && useDispatch() return a reference to a dispatch function from the Redux store

https://react-redux.js.org/next/api/hooks - the use of Hooks in React Redux

## Reference Code:

```javascript
// ACTION(s)
const increment = () => {
  return {
    type: "INCREMENT"
  };
};
const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// STORE -> GLOBALIZED STATE
let store = createStore(counter);

// DISPLAY IT IN THE CONSOLE
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
```
