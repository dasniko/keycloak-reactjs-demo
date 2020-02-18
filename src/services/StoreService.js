import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "react-router-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../modules";


const browserHistory = createBrowserHistory();

const setup = () => {
  const middleware = [
    thunk,
    routerMiddleware(browserHistory),
  ];
  return createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );
};

export default {
  browserHistory,
  setup,
}
