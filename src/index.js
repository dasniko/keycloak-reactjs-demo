import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import HttpService from "./services/HttpService";
import StoreService from "./services/StoreService";
import UserService from "./services/UserService";

const { history, store } = StoreService.setup();

const renderApp = () => ReactDOM.render(<App {...{ store, history }} />, document.getElementById("app"));

UserService.initKeycloak(renderApp);
HttpService.configure();
