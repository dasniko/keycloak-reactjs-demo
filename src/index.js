import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import HttpService from "./services/HttpService";
import StoreService from "./services/StoreService";
import UserService from "./services/UserService";

const store = StoreService.setup();
const history = StoreService.browserHistory;

const renderApp = () => ReactDOM.render(<App {...{ store, history }} />, document.getElementById("app"));

UserService.initKeycloak(renderApp);
HttpService.configure();
