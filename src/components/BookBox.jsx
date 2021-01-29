import { Route, Switch } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Menu from "./Menu";
import NoMatch from "./NoMatch";

const BookBox = () => (
  <>
    <Menu/>
    <Switch>
      <Route exact path="/">
        <BookList/>
      </Route>
      <Route exact path="/books/new">
        <BookForm/>
      </Route>
      <Route path="/books/:bookId">
        <BookDetails/>
      </Route>
      <Route path="*">
        <NoMatch/>
      </Route>
    </Switch>
  </>
)

export default BookBox
