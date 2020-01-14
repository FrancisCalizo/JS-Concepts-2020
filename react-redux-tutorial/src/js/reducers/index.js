import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        articles: [action.payload, ...state.articles]
      };
    default:
      return state;
  }
}

export default rootReducer;
