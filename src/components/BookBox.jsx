import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import BookForm from "./BookForm";
import BookList from "./BookList";
import { allBooks, addBook, deleteBook } from "../modules/books";
import UserService from "../services/UserService";

class BookBox extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(allBooks());
  }

  render() {
    const { dispatch, books } = this.props;
    return (
      <div className="bookBox row">
        <h1>
          Welcome {UserService.getUsername()}&nbsp;
          <button className="btn btn-success" onClick={UserService.doLogout}>Logout</button>
        </h1>
        <h1>Best Books ever!</h1>
        <hr/>
        <BookList books={books} onBookDelete={(book) => dispatch(deleteBook(book))}/>
        <BookForm onBookSubmit={(book) => dispatch(addBook(book))}/>
      </div>
    );
  }
}

BookBox.propTypes = {
  books: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

BookBox.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookBox)
