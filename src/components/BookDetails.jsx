import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {allBooks} from '../modules/books';

export default function BookDetails({match}) {

  const dispatch = useDispatch();
  const { books } = useSelector((state) => state);

  const book = books.find(book => book.id === parseInt(match.params.bookId, 10));

  React.useEffect(() => {
    dispatch(allBooks())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
