import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, Switch} from "react-router-dom";
import BookBox from "./components/BookBox";
import BookDetails from "./components/BookDetails";
import HttpService from "./services/HttpService";
import StoreService from "./services/StoreService";
import UserService from "./services/UserService";

const store = StoreService.setup();
const history = StoreService.browserHistory;

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
HttpService.configure();
