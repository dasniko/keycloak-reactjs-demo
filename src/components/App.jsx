import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BookBox from "../components/BookBox";
import BookDetails from "../components/BookDetails";
import NoMatch from "./NoMatch";
import StoreService from "../services/StoreService";

const store = StoreService.setup();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <BookBox/>
          </Route>
          <Route path="/books/:bookId">
            <BookDetails/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
