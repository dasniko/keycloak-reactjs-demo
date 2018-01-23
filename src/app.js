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
kc.init({onLoad: 'login-required'}).success(authenticated => {
  if (authenticated) {
    store.getState().keycloak = kc;
    ReactDOM.render(app, document.getElementById("app"));
  }
});

axios.interceptors.request.use(config => {
  return refreshToken().then(() => {
    config.headers.Authorization = 'Bearer ' + kc.token;
    return Promise.resolve(config)
  }).catch(() => {
    kc.login();
  })
});

// need to wrap the KC "promise object" into a real Promise object
const refreshToken = (minValidity = 5) => {
  return new Promise((resolve, reject) => {
    kc.updateToken(minValidity)
      .success(() => resolve())
      .error(error => reject(error))
  });
};
