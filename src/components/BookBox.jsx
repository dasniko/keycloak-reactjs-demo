import React from "react";
import {useDispatch, useSelector} from "react-redux";
import BookForm from "./BookForm";
import BookList from "./BookList";
import {addBook, allBooks, deleteBook} from "../modules/books";
import UserService from "../services/UserService";

export default function BookBox() {

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  React.useEffect(() => {
    dispatch(allBooks())
  }, [dispatch]);

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
