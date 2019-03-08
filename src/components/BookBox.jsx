import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import BookForm from "./BookForm";
import BookList from "./BookList";
import * as bookActions from "../modules/books";

class BookBox extends React.Component {
  constructor(props) {
    super(props);
    props.allBooks();
  }

  render() {
    const {kc, books, deleteBook, addBook} = this.props;
    return (
      <div className="bookBox row">
        <h1>
          Welcome {kc.tokenParsed.preferred_username}&nbsp;
          <button className="btn btn-success" onClick={kc.logout}>Logout</button>
        </h1>
        <h1>Best Books ever!</h1>
        <hr/>
        <BookList books={books} onBookDelete={deleteBook}/>
        <BookForm onBookSubmit={addBook}/>
      </div>
    );
  }
}

BookBox.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.books,
  kc: state.keycloak,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...bookActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookBox)
