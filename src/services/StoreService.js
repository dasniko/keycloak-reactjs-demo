import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "react-router-redux";
import {applyMiddleware, createStore} from "redux";
import axiosMiddleware from "redux-axios-middleware";
import rootReducer from "../modules";
import HttpService from "./HttpService";

const browserHistory = createBrowserHistory();

const setup = () => {
  const middleware = [
    thunk,
    routerMiddleware(browserHistory),
    axiosMiddleware(HttpService.getAxiosClient())
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
