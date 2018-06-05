import React from "react";
import {Link} from "react-router-dom";

export default props => {
  const {book} = props;
  return (
    <div className="book">
      <h3>{book.author}</h3>
      <span className="lead">
        <Link to={`/books/${book.id}`}>{book.title}</Link>
      </span>
      <button className="btn btn-xs btn-danger pull-right" onClick={() => props.onBookDelete(book)}>
        Delete Book
      </button>
      <hr/>
    </div>
  )
}
