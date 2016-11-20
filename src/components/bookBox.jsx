import React from "react";
import {connect} from "react-redux";
import BookForm from "./bookForm";
import BookList from "./bookList";
import {allBooks, addBook, deleteBook} from "../actions/books";

class BookBox extends React.Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    const kc = this.props.kc;
    return (
      <div className="bookBox row">
        <h1>
          Welcome {kc.tokenParsed.preferred_username}&nbsp;
          <button className="btn btn-success" onClick={kc.logout}>Logout</button>
        </h1>
        <h1>Best Books ever!</h1>
        <hr/>
        <BookList books={this.props.books} onBookDelete={this.props.handleBookDelete}/>
        <BookForm onBookSubmit={this.props.handleBookSubmit}/>
      </div>
    );
  }
}

BookBox.defaultProps = {
  books: []
};

const mapStateToProps = state => {
  return {
    books: state.books,
    kc: state.keycloak
  }
};

const mapDispatchToProps = dispatch => {
  return {
    init: () => {
      dispatch(allBooks());
    },
    handleBookSubmit: (book) => {
      dispatch(addBook(book));
    },
    handleBookDelete: (book) => {
      dispatch(deleteBook(book));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookBox)
