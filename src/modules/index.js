import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import books from "./books";

export default combineReducers({
  books,
  routing: routerReducer,
});
