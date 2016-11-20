import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import thunk from "redux-thunk";
import bookState from "./reducers";
import BookApp from "./components/bookApp";
import BookBox from "./components/bookBox";
import BookDetails from "./components/bookDetails";
import Keycloak from "keycloak-js";
import axios from "axios";

const store = createStore(
  bookState,
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(browserHistory, store);

const app = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={BookApp}>
        <Route path="/" component={BookBox}/>
        <Route path="books/:bookId" component={BookDetails}/>
      </Route>
    </Router>
  </Provider>
);

const kc = Keycloak('/keycloak.json');
kc.init({onLoad: 'check-sso'}).success(authenticated => {
  if (authenticated) {
    store.getState().keycloak = kc;

    setInterval(() => {
      kc.updateToken(10).error(() => kc.logout());
    }, 10000);

    ReactDOM.render(app, document.getElementById("app"));

  } else {
    // show possibly other page here...
    kc.login();
  }
});

axios.interceptors.request.use(config => {
  config.headers = {...config.headers, ...{
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + kc.token
  }};
  return config;
});
