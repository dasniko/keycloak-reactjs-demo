import PropTypes from 'prop-types';
import {Provider} from "react-redux";
import {Router, Route, Switch} from "react-router-dom";
import BookBox from "../components/BookBox";
import BookDetails from "../components/BookDetails";

const App = ({ store, history }) => (
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

App.propTypes = {
  history: PropTypes.any.isRequired,
  store: PropTypes.any.isRequired
};

export default App;
