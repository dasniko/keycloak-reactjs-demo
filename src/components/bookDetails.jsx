import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.bookId = props.params.bookId;
  }

  componentWillMount() {
    this.setState({book: this.props.books.filter(book => {return book.id == this.bookId})[0]});
  }

  render() {
    return(
      <div className="bookDetails row">
        <h1>Details for Book ID {this.bookId}</h1>
        <hr/>
        <h3>Author</h3>
        <p className="lead">{this.state.book.title}</p>
        <h3>Title</h3>
        <p className="lead">{this.state.book.author}</p>
        <hr/>
        <p>
          <Link to="/">&laquo; back to list</Link>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
};

export default connect(mapStateToProps)(BookDetails);
