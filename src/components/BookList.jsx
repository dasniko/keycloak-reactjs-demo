import React from "react";
import Book from "./Book";

export default props => (
  <div className="bookList col-sm-6">
    {props.books.map((book, index) => (
      <Book book={book} key={index} onBookDelete={props.onBookDelete}/>
    ))}
  </div>
)
