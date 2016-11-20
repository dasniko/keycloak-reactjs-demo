import React from "react";
import Book from "./book";

export default class BookList extends React.Component {
  render() {
    let books = this.props.books.map((book, index) => {
      return (
        <Book book={book} key={index} onBookDelete={this.props.onBookDelete}/>
      );
    });

    return (
      <div className="bookList col-sm-6">
        {books}
      </div>
    );
  }
}
