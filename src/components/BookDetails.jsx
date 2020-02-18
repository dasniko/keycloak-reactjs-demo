import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { allBooks } from '../modules/books';

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    if (props.books.length === 0) {
      props.dispatch(allBooks());
    }
    this.state = {
      book: null,
    }
  }

  static getDerivedStateFromProps(props) {
    return {
      book: props.books.find(book => book.id === parseInt(props.match.params.bookId, 10))
    }
  }

  render() {
    const {book} = this.state;
    return book ? (
      <div className="bookDetails row">
        <h1>Details for Book ID {book.id}</h1>
        <hr/>
        <h3>Author</h3>
        <p className="lead">{book.title}</p>
        <h3>Title</h3>
        <p className="lead">{book.author}</p>
        <hr/>
        <p>
          <Link to="/">&laquo; back to list</Link>
        </p>
      </div>
    ) : null
  }
}

BookDetails.propTypes = {
  books: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
};

BookDetails.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookDetails);
