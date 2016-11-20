import * as types from "../actions/types";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case types.LIST_BOOKS:
      return action.payload;
      break;

    default:
      return state;
  }
};

export default booksReducer;
