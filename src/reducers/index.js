import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import books from "./books";
import keycloak from "./keycloak";

const bookState = combineReducers({
  routing: routerReducer,
  books,
  keycloak
});

export default bookState;
