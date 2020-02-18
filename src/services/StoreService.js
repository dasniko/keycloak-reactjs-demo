import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "react-router-redux";
import {applyMiddleware, compose, createStore} from "redux";
import axiosMiddleware from "redux-axios-middleware";
import logger from "redux-logger";
import rootReducer from "../modules";
import HttpService from "./HttpService";

const browserHistory = createBrowserHistory();

const setup = () => {
  const enhancers = [];
  const middleware = [
    thunk,
    routerMiddleware(browserHistory),
    axiosMiddleware(HttpService.getAxiosClient())
  ];

  if (process.env.NODE_ENV === 'development') {
    enhancers.push(applyMiddleware(logger));
  }

  const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

  return createStore(rootReducer, composedEnhancers);
};

export default {
  browserHistory,
  setup,
}
