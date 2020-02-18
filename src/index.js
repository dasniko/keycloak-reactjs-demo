import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {Router, Route, Switch} from "react-router-dom";
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import rootReducer from "./modules";
import BookBox from "./components/BookBox";
import BookDetails from "./components/BookDetails";
import UserService from "./services/UserService";
import axios from "axios";

const history = createBrowserHistory();
const middleware = [
  thunk,
  routerMiddleware(history),
];
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

const app = (
  <Provider store={store}>
    <Router history={history}>
      <div className="container">
        <Switch>
          <Route exact path="/" component={BookBox}/>
          <Route path="/books/:bookId" component={BookDetails}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

const renderApp = () => ReactDOM.render(app, document.getElementById("app"));

UserService.initKeycloak(renderApp);

axios.interceptors.request.use((config) => {
  const cb = () => {
    config.headers.Authorization = `Bearer ${UserService.getToken()}`;
    return Promise.resolve(config);
  };
  return UserService.updateToken(cb);
});
