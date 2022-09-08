import axios from "axios";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import axiosMiddleware from "redux-axios-middleware";
import thunk from "redux-thunk";
import App from "./components/App";
import rootReducer from "./modules";
import UserService from "./services/UserService";


// HTTP

const _axios = axios.create();
_axios.interceptors.request.use((config) => {
  if (UserService.isLoggedIn()) {
    const cb = () => {
      config.headers.Authorization = `Bearer ${UserService.getToken()}`;
      return Promise.resolve(config);
    };
    return UserService.updateToken(cb);
  }
});


// REDUX STORE

const _middleware = applyMiddleware(thunk, axiosMiddleware(_axios));
const store = createStore(rootReducer, _middleware);

// APP

const renderApp = () => ReactDOM.render(<App store={store}/>, document.getElementById("app"));

UserService.initKeycloak(renderApp);
