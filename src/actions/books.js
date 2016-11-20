import * as types from "./types";
import axios from "axios";

export function allBooks() {
  return dispatch => {
    axios.get('/demo/books')
      .then(response => {
        dispatch({
          type: types.LIST_BOOKS,
          payload: response.data
        })
      })
  }
}

export function addBook(book) {
  return (dispatch, getState) => {
    console.debug(getState().keycloak.tokenParsed.preferred_username + ' added the book ' + book.title);
    axios.post('/demo/books', book)
      .then(() => {
        dispatch(allBooks());
      })
  }
}

export function deleteBook(book) {
  return (dispatch, getState) => {
    console.debug(getState().keycloak.tokenParsed.preferred_username + ' deletes the book ' + book.title);
    axios.delete('/demo/books/' + book.id)
      .then(() => {
        dispatch(allBooks());
      })
  }
}
