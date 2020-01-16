import { INCREMENT, DECREMENT } from "../types/actionTypes";

export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
