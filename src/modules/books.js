import axios from 'axios/index';

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
  (dispatch, getState) => {
    console.log(`${getState().keycloak.tokenParsed.preferred_username} added the book ${book.title}`);
    axios.post('/demo/books', book)
      .then(() => {
        dispatch(allBooks());
      })
  }
);

export const deleteBook = book => (
  (dispatch, getState) => {
    console.log(`${getState().keycloak.tokenParsed.preferred_username} deletes the book ${book.title}`);
    axios.delete('/demo/books/' + book.id)
      .then(() => {
        dispatch(allBooks());
      })
  }
);
