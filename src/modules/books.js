import axios from 'axios/index';
import UserService from "../services/UserService";

const LIST_BOOKS = 'LIST_BOOKS';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_BOOKS:
      return  action.payload;

    default:
      return state;
  }
};

export const allBooks = () => (
  dispatch => {
    axios.get('/demo/books')
      .then(response => {
        dispatch({
          type: LIST_BOOKS,
          payload: response.data
        })
      })
  }
);

export const addBook = book => (
  dispatch => {
    console.log(`${UserService.getUsername()} added the book ${book.title}`);
    axios.post('/demo/books', book)
      .then(() => {
        dispatch(allBooks());
      })
  }
);

export const deleteBook = book => (
  dispatch => {
    console.log(`${UserService.getUsername()} deletes the book ${book.title}`);
    axios.delete('/demo/books/' + book.id)
      .then(() => {
        dispatch(allBooks());
      })
  }
);
