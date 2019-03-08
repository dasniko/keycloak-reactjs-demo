import React from "react";
import Book from "./Book";

export default ({books, onBookDelete}) => (
  <div className="bookList col-sm-6">
    {books.map((book, index) => (
      <Book book={book} key={index} onBookDelete={onBookDelete}/>
    ))}
  </div>
)
