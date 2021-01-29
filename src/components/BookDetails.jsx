import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { allBooks } from '../modules/books';

const BookDetails = () => {

  const { bookId } = useParams();
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state);
  const [book, setBook] = useState();

  useEffect(() => {
    dispatch(allBooks())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setBook(books.find(book => book.id === parseInt(bookId, 10)))
  }, [bookId, books]);

  return book ? (
    <div className="row">
      <div className="col-sm-12">
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
    </div>
  ) : null
}

export default BookDetails
