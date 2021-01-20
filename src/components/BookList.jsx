import Book from "./Book";

const BookList = ({books, onBookDelete}) => (
  <div className="bookList col-sm-6">
    {books.map((book, index) => (
      <Book book={book} key={index} onBookDelete={onBookDelete}/>
    ))}
  </div>
);

export default BookList
