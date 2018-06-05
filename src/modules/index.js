import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import books from "./books";

export default combineReducers({
  books,
  keycloak: (keycloak = {}) => keycloak,
  routing: routerReducer,
});
